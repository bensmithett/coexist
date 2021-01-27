export default function Header() {
  return (
    <header style={styles.root}>
      <a style={styles.link} href='/'>
        Home
      </a>
      <a style={styles.link} href='/account/'>
        Account
      </a>
    </header>
  )
}

const styles = {
  root: {
    fontFamily: 'sans-serif',
    display: 'flex',
    justifyContent: 'flex-start',
    borderBottom: '1px dashed #2b3a42',
    paddingBottom: '10px'
  },
  link: {
    padding: '20px',
    background: '#2b3a42',
    color: '#fff',
    marginRight: '5px',
    textDecoration: 'none'
  }
}
