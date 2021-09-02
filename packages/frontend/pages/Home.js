import Nav from '../components/Nav/Nav'

export default function Home (props) {
  return (
    <div>
      <Nav />
      <h1>Home</h1>
      <p>This value is generated on the origin backend and is persisted via cookie: <strong>{props.preferences}</strong></p>
      <p>Try deleting the cookie, you'll get a new value.</p>
    </div>
  )
}
