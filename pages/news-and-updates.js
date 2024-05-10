import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import date from 'date-and-time';
import News from '../utils/fetchNews'
import NewsLetter from '../components/NewsLetter'
import Floating from '../components/FloatingMenu'
import Popups from '../components/PopUps'

const SuccessStories = ({ heroBannerpost }) => {
  
  return (
    <>
      <Header />
      <Container fluid style={{ padding: 0 }} className="overflow-hidden">
        <Row>
          {heroBannerpost.map((post, index) => {
            const Myimg = post['acf']['inside_banner']['url'];
            const Mytitle = post['title']['rendered'];

            return (
              <>
                <NextSeo
                   noindex={false}
                   nofollow={false}
                  title={Mytitle}
                  description="News and updates  - Walmart Vriddhi Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets. Walmart Vriddhi is a supplier development program tailored to help MSMEs modernize"
                  canonical=''
                  openGraph={{
                    url: '',
                    title: 'News and updates  - Walmart Vriddhi',
                    description: 'News and updates  - Walmart Vriddhi Walmart and Flipkart have made a long-term commitment to transform India’s MSME ecosystem by empowering 50,000 MSMEs. We strive to play a catalytic role by supporting small businesses with growth opportunities to reach greater heights and new markets. Walmart Vriddhi is a supplier development program tailored to help MSMEs modernize',
                    images: [
                      {
                        url: Myimg,
                        width: 800,
                        height: 600,
                        alt: 'Walmart Vridhi',
                        type: 'image/jpeg',
                      },
                      {
                        url: Myimg,
                        width: 900,
                        height: 800,
                        alt: 'Walmart Vridhi',
                        type: 'image/jpeg',
                      },
                      { url: Myimg },
                      { url: Myimg },
                    ],
                    siteName: { Mytitle },
                  }}
                  twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                  }}
                />
                <Container fluid>
                  <Row className="d-flex flex-column wbg-main">
                    <Col>
                      <Image
                        src={post['acf']['inside_banner']}
                        width="800"
                        height="300"
                        background='no-repeat'
                        background-size='cover'
                        alt={post['title']['rendered']}
                        className="banner-img d-flex align-items-end w-100"
                      />
                    </Col>
                    <Col>
                      <Container className="wbg-main px-4 news_b">
                        <Row>
                          <Col sm={8} lg={8} className="pt-3">
                            <p className="text-white fs-5 bogle-medium" dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} />
                            <p className="text-white">
                              {date.format(new Date(post.date), 'MMMM DD, YYYY')}
                      
                            </p>
                          </Col>
                          <Col sm={3} lg={3} className="d-flex align-items-center">
                            <Link key={index} href={`${post['acf']['source_url']}`} target="_blank">
                              <Button className="news-btn">Know more</Button>
                            </Link>
                          </Col>
                        </Row>
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </>
            );
          })}
        </Row>
      </Container>
      <Brand />
      <News/>
  
      <Popups/>
            <Floating/> 
            <NewsLetter/>
      <Footer />
    </>
  );
};

export default SuccessStories;

// Your existing code for fetching banner post and news
// ...

export async function bannerPost() {
  const getPosts = await fetch(`${configData.SERVER_URL}posts?_embed&status[]=publish&production[]=${configData.SERVER}&categories[]=13&order=desc&per_page=1`);
  const data = await getPosts.json();
  return data;
}



export async function getServerSideProps() {
  const heroBannerpost = await bannerPost();

  return {
    props: {
      heroBannerpost,
    },
  };
}

