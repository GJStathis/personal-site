import '../styles/globals.css'
import Navbar from '../components/navbar'
import HamburgerMenu from '../components/hamburger'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <HamburgerMenu/>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
