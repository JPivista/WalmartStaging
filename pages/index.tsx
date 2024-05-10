import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/HomeBanner';
import BrandLogo from '../components/BrandLogo';
import Arc from '../components/Arc';
import Learning from '../components/LearningPrograme';
import Programme from '../components/ProgramBenefits';
import Growth from '../components/GrowthJourney';
import Testimonials from '../components/Testimonials';
import App from '../components/App';
import Footer from '../components/Footer';
import { NextSeo } from 'next-seo';
import NewsLetter from '../components/NewsLetter'
import Floating from '../components/FloatingMenu'
import Popups from '../components/PopUps'
import MsmeBanner from '../components/msmeSubmit/Banner'

export default function Home() {

  const title = "Learning program for MSME entrepreneurs";
  const desc = "Walmart Vriddhi initiative is designed to support MSMEs in modernising, expanding, and reaching their domestic ambitions.";
  const banner = "/images/banner_1_1.png";


  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="robots" content="noindex,nofollow"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> 
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" async />
      </Head>

      <NextSeo
         noindex={true}
         nofollow={true}
      title={title}
      description={desc}
      canonical="https://www.walmartvriddhi.org/"
      openGraph={{
        url: 'https://www.walmartvriddhi.org/',
        title: title,
        description: desc,
        images: [
          {
            url: banner,
            width: 800,
            height: 600,
            alt: desc,
            type: 'image/jpeg',
          },
          {
            url: banner,
            width: 900,
            height: 800,
            alt: desc,
            type: 'image/jpeg',
          },
          { url: banner },
          { url: banner },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />

    
    <div>
      <Header/>
        <Banner />
        
      <BrandLogo/>
      <Learning/>
      <Programme/>  
      <Arc/>
      <Growth/>
      <Testimonials/>
        <App />
        <Popups/>
            <Floating/> 
            <NewsLetter/>
<Footer/>
    </div>
    </>
  )
}




