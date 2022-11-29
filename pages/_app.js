import '../styles/globals.css'
import SEO from '@bradgarropy/next-seo'
function MyApp({ Component, pageProps }) {
  return <>
  <SEO title="Chirayu-Portfolio" description="Chirayu Shah:Web Developer" keywords={['chirayu shah', 'chirayu.tech', 'chirayu chandigarh university', 'chirayu']}
  icon='/favicon.ico'
  />
  <Component {...pageProps} />
  </>
}

export default MyApp
