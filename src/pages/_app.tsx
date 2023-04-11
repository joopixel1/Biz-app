import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/header.js'
import Footer from '../components/footer/footer.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
