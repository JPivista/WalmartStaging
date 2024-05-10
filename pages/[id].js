import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Col, Container, Row, Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';
import NewsLetter from '../components/NewsLetter'
import Floating from '../components/FloatingMenu'
import Popups from '../components/PopUps'

const post = ({ data }) => {
  const pathname = usePathname();
  return (
    <div>
       <NextSeo
        noindex={false}
        nofollow={false}
      />
      <Header />
      <div className='grid grid-cols-3 gap-5 w-full g-0'>
        {data.map((post, index) => (
         <>
            <Container fluid className="g-0">
              <Row className="g-0 flex-column flex-lg-row">
                <Col style={{ background: '#306FC7' }} className="d-flex flex-column justify-content-center px-2">
                  <div dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} className="text-white blog-head fs-1 bogle-medium" />
                </Col>
                <Col>
{post['_embedded']['wp:featuredmedia'][0]['source_url'] && (
  <Image
  src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
  alt={post['title']['rendered']}
  width="100%"
/>
)}
                  
                </Col>
              </Row>
            </Container>
            <Container className="pt-5">
              <div dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }}/>
            </Container>
          </>
        ))}
      </div>
      <Popups/>
            <Floating/> 
            <NewsLetter/>
      <Footer />
    </div>
  );
};

export default post;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${id}`);
  const data = await res.json();
  //return { props: { data } };
  return {
    props: { data },
    // If data is empty, return a 404 status
    notFound: !data || data.length === 0,
  };
}
