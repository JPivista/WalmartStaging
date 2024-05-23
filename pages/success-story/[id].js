import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Brand from '../../components/BrandLogo';
import Footer from '../../components/Footer';
import { Col, Container, Row, Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation'
import NewsLetter from '../../components/NewsLetter'
import Floating from '../../components/FloatingMenu'
import Popups from '../../components/PopUps'

const post = ({ data }) => {
  const pathname = usePathname()
  //console.log(data);
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-5 w-full'>
        {
          data.map((post) => {

            const [string, setString] = useState(
              post['acf']['descheading-2']
            );
            useEffect(() => {
              const regex = /(<([^>]+)>)/gi;
              const newString = string.replace(regex, "");
              setString(newString);
            }, []);

            return (
              <>
                <NextSeo
                  noindex={true}
                  nofollow={true}
                  title={post['title']['rendered']}
                  description={string}
                  canonical=''
                  openGraph={{
                    url: '',
                    title: post['title']['rendered'],
                    description: string,
                    images: [
                      {
                        url: post['_embedded']['wp:featuredmedia'][0]['source_url'],
                        width: 800,
                        height: 600,
                        alt: string,
                        type: 'image/jpeg',
                      },
                      {
                        url: post['_embedded']['wp:featuredmedia'][0]['source_url'],
                        width: 900,
                        height: 800,
                        alt: string,
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

                <Container fluid key={post.id} className=" p-0">
                  <Image
                    // src={post['acf']['wp:desktop_silder_image_bg']['url']}
                    src={post['acf']['desktop_silder_image_bg']['url']}
                    alt={post['title']['rendered']}
                    className="w-100 h-auto"
                    width={600}
                    height={400}
                    priority
                  />

                </Container>
                <Brand />
                <Container className="pt-4 pb-4">
                  <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center'>
                    <div className="  ">
                      <p className='bogle-bold fs-5 margin-center p-2'>MSME SuperPower: </p>
                    </div>
                    <div className="  ">
                      <Image src={post['acf']['primary_category_icon']['url']} className=" fluid" style={{height:"75px"}} alt={post['title']['rendered']} />
                    </div>
                  </div>
                </Container>

                <Container className="text-center mx-auto">
                  <h1 className="fs-2 bogle-medium walmart-default pb-4" dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} />
                  <Image src={post['acf']['author_profile']['url']} alt="Walmart Vriddhi" />
                  <h3 className="fs-2 bogle-medium">{post['acf']['author_name']}</h3>
                  <p className="fs-5">{post['acf']['author_designation']}</p>
                </Container>
                <Container>
                  <Row>
                    <Col sm={1}><Image src="/images/commas.png" alt="Walmart Vriddhi" /></Col>
                    <Col sm={10}><div dangerouslySetInnerHTML={{ __html: post['acf']['short_descriptions'] }} className="fs-4"></div></Col>
                    <Col sm={1} className="d-flex align-items-end "><Image src="/images/commas_1.png" alt="Walmart Vriddhi" /></Col>
                  </Row>
                </Container>

                <Container className="wbg-main pb-5" fluid>
                  <Container>

                    <Row>
                      <Col sm={1}><Image src="/images/commas_2.png" alt="Walmart Vriddhi" /></Col>
                      <p className="text-white fs-3 bogle-medium">{post['acf']['heading-1']}</p>
                    </Row>

                    <Row >
                      <Col lg={4} sm={12}><div dangerouslySetInnerHTML={{ __html: post['acf']['cloumn-1_heading-1'] }} className="text-white fs-5 bogle-medium"></div></Col>
                      <Col lg={4} sm={12}><div dangerouslySetInnerHTML={{ __html: post['acf']['cloumn-2_heading-1'] }} className="text-white fs-5 bogle-medium"></div></Col>
                      <Col><div dangerouslySetInnerHTML={{ __html: post['acf']['cloumn-3_heading-1'] }} className="text-white fs-5 bogle-medium"></div></Col>
                    </Row>

                    <Container className="wbg-white mb-5">
                      <Row>
                        <Col className="mt-3 mx-3"><p className="fs-2 bogle-medium">{post['acf']['heading-2']}</p></Col>
                        <Col lg={12}><div dangerouslySetInnerHTML={{ __html: post['acf']['descheading-2'] }} className=" fs-5 bogle-medium p-3"></div></Col>
                      </Row>
                      <Row className="wbg_grey m-3">
                        <Col><div dangerouslySetInnerHTML={{ __html: post['acf']['paragraph-heading'] }} className=" fs-6 bogle-italic p-3 walmart-default"></div></Col>
                      </Row>
                      <Row className="p-3">
                        <Col xs={12} lg={6}><Image src={post['acf']['product-image-left']['url']} alt="Walmart Vriddhi fluid" className="w-100 mb-3" /></Col>
                        <Col xs={12} lg={6}><Image src={post['acf']['product-image-right']['url']} alt="Walmart Vriddhi"className="w-100" /></Col>

                      </Row>
                      <Row className="p-3">

                        <div dangerouslySetInnerHTML={{ __html: post['acf']['description_below_images'] }} className="fs-5 bogle-medium h-bold"></div>
                      </Row>
                      <Row className="p-3 justify" >
                        <div dangerouslySetInnerHTML={{ __html: post['acf']['paragraph_heading-1'] }} className="heading"></div>
                      </Row>
                      <Row className="p-3">
                        <div dangerouslySetInnerHTML={{ __html: post['acf']['paragraph_end'] }} className="fs-5 bogle-medium h-bold"></div>
                      </Row>
                    </Container>
                  </Container>
                </Container>
                <Popups />
                <Floating />
                <NewsLetter />
                <Footer />
              </>
            )

          })}

      </div>
    </div>
  )

}

export default post




export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${id}`);
  const data = await res.json();
  // console.log(data)  
  return { props: { data } }

}
