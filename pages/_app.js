import '../styles/globals.css'
import SEO from '@bradgarropy/next-seo'
import {Analytics} from '@vercel/analytics/react'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return <>
  <Script
  id='Adsense-id'
  data-ad-client = 'ca-pub-1701950568487295'
  async="true"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  onError={ (e) => { console.error('Script failed to load', e) }}
  crossorigin="anonymous"
  />
  <SEO title="Chirayu-Portfolio" description="Chirayu Shah:Web Developer" keywords={['chirayu shah', 'chirayu.tech','shah Chirayu','chirayu tech','chirayu chandigarh university', 'chirayu shah web developer']}
  icon='/favicon.ico'
  />
  <Component {...pageProps} />
  <Analytics debug/>
  </>
}

export default MyApp
