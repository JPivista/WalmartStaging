import '../styles/globals.css'
import '../styles/register.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

    
        {/* Start Google Analytics Manager */}
        <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-L833QYKDP3`}
      />

        <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-L833QYKDP3');
        `}
        </Script>
        {/* End Google Analytics Manager */}


        {/* Google Tag Manager (noscript) */}
        <Script id="google-tag-manager-start">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N899F6N');
        `}
      </Script>


       <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-N899F6N"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>  
      <Analytics />
      <SpeedInsights/>

    <Component {...pageProps} />    
    </>



  )
}
