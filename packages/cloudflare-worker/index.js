import render from '@coexist/frontend/render'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { pathname, search } = new URL(request.url)

  if (pathname === '/favicon.ico') return new Response(null, { status: 404 })

  const originalResponse = await fetch(`${BACKEND_HOST}${pathname}${search}`)

  if (request.method === 'HEAD') return originalResponse
  if (originalResponse.status === 304) return originalResponse

  try {
    const payload = await originalResponse.json()
    const html = render(payload)
    const response = new Response(html, originalResponse)
    response.headers.set('content-type', 'text/html')
    return response
  } catch (e) {
    console.error(e)
    return new Response('Something went wrong', {
      status: 500
    })
  }
}
