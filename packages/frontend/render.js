import ReactDOMServer from 'react-dom/server'
import pages from './pages'

export default function ({ component, props }) {
  const PageComponent = pages[component]
  return ReactDOMServer.renderToString(<PageComponent {...props} />)
}
