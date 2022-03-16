import MainLayoul from '../components/mainLayoul/mainLayoul'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayoul>
      <Component {...pageProps} />
    </MainLayoul>
    )
}

export default MyApp
