import '../styles/globals.css'
import SEO from '@bradgarropy/next-seo'
function MyApp({ Component, pageProps }) {
  return <>
  <SEO title="Chirayu-Portfolio" description="Chirayu Shah:Web Developer" keywords={['chirayu shah', 'chirayu.tech','shah Chirayu', 'chirayu chandigarh university', 'chirayu shah web developer']}
  icon='/favicon.ico'
  />
  <Component {...pageProps} />
  </>
}

export default MyApp
