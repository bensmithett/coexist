import Hapi from '@hapi/hapi'
import H2o2 from '@hapi/h2o2'
import Wreck from '@hapi/wreck'
import render from '@coexist/frontend/render'

async function start () {
  const server = Hapi.server({
    port: 4000,
    host: 'localhost'
  })

  server.route({
    method: '*',
    path: '/{any*}',
    handler: (request, h) => h.proxy({
      host: 'localhost',
      port: 3000,
      passThrough: true
    }),
    options: {
      payload: {
        parse: false
      }
    }
  })

  server.ext('onPreResponse', transformResponse)
  
  await server.register(H2o2)
  await server.start()
  console.log(`Server started at ${server.info.uri}`)
}

async function transformResponse (request, h) {
  const { response } = request

  if (request.url.pathname === '/favicon.ico') return response
  if (request.method === 'head') return response
  if (response.statusCode === 304) return response

  const payload = await Wreck.read(response.source, { json: 'strict' })
  
  try {
    const renderedResponse = h.response(render(payload))
    Object.entries(response.headers).forEach(([key, val]) => {
      renderedResponse.header(key, val)
    })
    renderedResponse.type('text/html')
    return renderedResponse
  } catch (e) {
    console.error(e)
    return h.response('Something went wrong').code(500)
  }
}

start()
