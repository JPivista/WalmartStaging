import React from 'react'
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import { NextSeo } from 'next-seo';

const title = "404 - page not found";
const desc = "page not found";
const banner = '/images/banner_about.jpeg';
const url = 'https://www.walmartvriddhi.org/';

function Error() {
  return (
    <div>
      <NextSeo
        noindex={true}
        nofollow={true}
      title= {title}
      description={desc}
        canonical={url}
        openGraph={{
          url: url,
          title: title,
          description: desc,
          images: [
            {
              url: banner,
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url: banner,
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: banner },
            { url: banner },
          ],
          siteName: title,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    />
      <Header /> 
      <Container className='my-5'>
        <Row>
        <Col sm={12} lg={5} className='text-center'>
            <h1 className='bogle-bold walmart-default' style={{fontSize:'15em'}}>404</h1>
          <h2 className='walmart-primary fs-1'>Page not found!</h2>
          </Col>
          <Col sm={12} lg={7}>
            <h2 className='fs-1 bogle-medium walmart-default'>Accept our appologies!</h2>
            <p className='fs-3 mb-5'>The page you were looking for doesn't exists.You may have misstyped the address or the page may have moved.</p>
            <Link href="" className='error-btn fs-5 text-white '>Go to Home page</Link>
          </Col>
          

</Row>


      </Container>
<Footer/>      
    </div>
  )
}

export default Error
