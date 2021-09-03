import ReactDOMServer from 'react-dom/server'
import pages from './pages'

export default function ({ component, props }) {
  const PageComponent = pages[component]
  return template(ReactDOMServer.renderToString(<PageComponent {...props} />))
}

function template(page) {
  return `<!doctype html>
<html>
  <head>
    <meta charset='UTF-8' />
  </head>
  <body>${page}</body>
</html>
`
}
