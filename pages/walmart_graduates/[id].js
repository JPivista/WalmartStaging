import React, { useEffect, useState} from 'react'
import Header from '../../components/Header';
import Brand from '../../components/BrandLogo';
import Footer from '../../components/Footer';
import {Col,Container, Row, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import NewsLetter from '../../components/NewsLetter'
import Floating from '../../components/FloatingMenu'
import Popups from '../../components/PopUps'

import {
    TelegramShareButton,
    TelegramIcon,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share'
import { TbShare } from "react-icons/tb";  

const post = ({ data }) => {
  const pathname = usePathname()
  console.log(data);
  return (
    <div>
          <Header />   

<div className='grid grid-cols-3 gap-5 w-full'>
{
          data.map((post) => {
return (
  <>
    <NextSeo
      noindex={true}
      nofollow={true}
      title={post['title']['rendered']}
      description=''
      canonical={pathname}
      openGraph={{
        url: pathname,
        title: post['title']['rendered'],
        description: '',
        images: [
          {
            url: post['_embedded']['wp:featuredmedia'][0]['source_url'],
            width: 800,
            height: 600,
            alt: '',
            type: 'image/jpeg',
          },
          {
            url: post['_embedded']['wp:featuredmedia'][0]['source_url'],
            width: 900,
            height: 800,
            alt: '',
            type: 'image/jpeg',
          },
          { url: post['_embedded']['wp:featuredmedia'][0]['source_url'] },
          { url: post['_embedded']['wp:featuredmedia'][0]['source_url'] },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
<Container fluid className="wbg-main yellow-border">
<Container>
                <Row>
                    <Col className="m-center">
                <div className="row g-0">
                  <div className="col-md-3 p-2">
                    <Image
                      src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                      className="profile-img img-fluid rounded-start"
                      alt="..."
                      width={100}
                      height={100}
                                />
                    </div>
                    <div className="col-md-9 profile-stat">
                    <div className="card-body text-white">
                      <h4 className="profile-title bogle-medium">{post['title']['rendered']}</h4>
                      <p className="card-text fs-5">{post['acf']['company_name_&_place']}</p>
                    </div>
                  </div>
                    </div>
                    
                    </Col>
                    <Col className="d-flex align-items-center justify-content-end text-white fs-5" sm={12} lg={6}>       
<div className="p-share">
Share Profile <TbShare className="s-share" />
<Row className="share" style={{'display':'none'}}>
<Col>
<FacebookShareButton
  url={`https://walmartvriddhi.org${pathname}`}
  quote={'Join the alumni network'}
  hashtag={'#walmartvriddhialumni'}>
  <FacebookIcon size={32} round />
</FacebookShareButton>
</Col>
<Col>
<TelegramShareButton
  url={`https://walmartvriddhi.org${pathname}`}
  title={'Join the alumni network'}>
  <TelegramIcon size={32} round />
</TelegramShareButton>
</Col>
<Col>
<WhatsappShareButton
  url={`https://walmartvriddhi.org${pathname}`}
  title={'Join the alumni network'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>
</Col>
</Row>                             

</div>
                    </Col>
</Row>                
</Container>
</Container>
<Container>
<Container>
<p className="fs-5 fw-bold mt-4 walmart-default">Business Category: <span className="bogle-medium">{post['acf']['business_category']}</span></p>
<p dangerouslySetInnerHTML={{ __html: post['acf']['description_2'] }} className="fs-5"></p>
            </Container>
            <hr />
            <Container>
                <h4 className="fs-3 fw-bold mb-4">Gallery</h4>
                <Row>
          <Col>
          {post['acf']['gallery'] && post['acf']['gallery'][0] && post['acf']['gallery'][0]['full_image_url'] ? (
  <Image src={post['acf']['gallery'][0]['full_image_url']} width={400} height={300} />
) : ''}
            
            
            </Col>
          <Col>
          {post['acf']['gallery'] && post['acf']['gallery'][1] && post['acf']['gallery'][1]['full_image_url'] ? (
  <Image src={post['acf']['gallery'][1]['full_image_url']} width={400} height={300} />
) : ''}
            </Col>
                    
          <Col>
          {post['acf']['gallery'] && post['acf']['gallery'][2] && post['acf']['gallery'][2]['full_image_url'] ? (
  <Image src={post['acf']['gallery'][2]['full_image_url']} width={400} height={300} />
) : ''}
            </Col>
                </Row>
            </Container>
            <hr className=""/>
            <Container className="mb-5 mt-5">
        <Link className="profile-btn" href="/alumni-profiles">Go Back </Link>
        {post['acf']['visit_the_website'] ? <Link href={post['acf']['visit_the_website']} className="profile-btn mx-5" target="_blank">Visit the website</Link> : ''}
            </Container>
    </Container>
    <Container fluid style={{ background: '#3591ED' }}>
      <Container>
        <Row style={{'height':60}}>
          <Col lg={2} sm={12} className="d-flex align-items-center justify-content-end fs-4 bogle-medium text-white">Follow me on:</Col>
          <Col lg={10} sm={12} className="d-flex align-items-center fs-4 bogle-medium text-white">
            <Row>
            {post['acf']['facebook'] ?<Col className="d-flex align-items-center">
                  <Link href={post['acf']['facebook']} target='_blank'>
                    <div className="bg-circle"><IoLogoFacebook size={28} fill='#1471CE' /></div></Link> 
              </Col>: ''}
              {post['acf']['twiter'] ?<Col>
                  <Link href={post['acf']['twiter']} target='_blank'>
                    <div className="bg-circle"><FaXTwitter size={28} fill='#1471CE' /></div></Link> 
              </Col>: ''}
              {post['acf']['instagram'] ?<Col>
                  <Link href={post['acf']['instagram']} target='_blank'>
                    <div className="bg-circle"><IoLogoInstagram size={28} fill='#1471CE' /></div></Link> 
              </Col>: ''}
              {post['acf']['linkedin'] ?<Col>                
                  <Link href={post['acf']['linkedin']} target='_blank'>
                    <div className="bg-circle"><AiFillLinkedin size={28} fill='#1471CE' /></div></Link> 
              </Col>: ''}
            </Row>
          </Col>
      </Row></Container>
    </Container>
    <Popups/>
            <Floating/> 
            <NewsLetter/>
<Footer/>
</>
)

})}

</div>
</div>
  )
  
}

export default post

export async function getServerSideProps(context){
  const {id} = context.params;
  const res = await fetch(`${configData.SERVER_URL}walmart_graduates?_embed&slug=${id}`);
  const data = await res.json();
  console.log(data)
    return {props:{data}}

    }