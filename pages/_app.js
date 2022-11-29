import '../styles/globals.css'
import SEO from '@bradgarropy/next-seo'
function MyApp({ Component, pageProps }) {
  return <>
  <SEO title="Chirayu-Portfolio" description="My portfolio" keywords={['chirayu shah', 'chirayu.tech', 'chirayu chandigarh university', 'chirayu']}
  icon='/favicon.ico'
  />
  <Component {...pageProps} />
  </>
}

export default MyApp
