import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Theme from './Portfolio/Theme';
import store from './Portfolio/index';
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
