import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Theme from './Portfolio/Theme';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default MyApp
