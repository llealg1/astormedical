import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/global.scss'
import 'semantic-ui-css/semantic.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
