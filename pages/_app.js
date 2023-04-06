import '../styles/globals.css'
import SEO from '@bradgarropy/next-seo'
import {Analytics} from '@vercel/analytics/react'


function MyApp({ Component, pageProps }) {
  return <>
  <SEO title="Chirayu-Portfolio" description="Chirayu Shah:Web Developer" keywords={['chirayu shah', 'chirayu.tech','shah Chirayu','chirayu tech','chirayu chandigarh university', 'chirayu shah web developer']}
  icon='/favicon.ico'
  />
  <Component {...pageProps} />
  <Analytics/>
  </>
}

export default MyApp
