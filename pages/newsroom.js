import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Card, Col, Row } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import News from '../utils/fetchNews'
import Media from '../utils/fetchMedia'
import NewsLetter from '../components/NewsLetter'
import Floating from '../components/FloatingMenu'
import Popups from '../components/PopUps'



const Webinars = () => {
    const pathname = usePathname()
    const title = "MSME growth program, MSME growth journey program, MSME Supply Chain Management, msme online training program";
    const desc = "Walmart Vriddhi has assisted countless small businesses in going digital and growing their market reach Learn more about the different steps of the MSME growth journey program here";
    const banner = '/images/Newsroom-banner.jpg';
    const url = 'https://www.walmartvriddhi.org/msme-growth-journey/'; 


    useEffect(() => {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);

        const tabs = $$(".tab-item");
        const panes = $$(".tab-pane");

        const tabActive = $(".tab-item.active");
        const line = $(".tabs .line");

        // requestIdleCallback(function () {
        //     line.style.left = tabActive.offsetLeft + "px";
        //     line.style.width = tabActive.offsetWidth + "px";

        // });

        tabs.forEach((tab, index) => {
            const pane = panes[index];

            tab.onclick = function () {
                $(".tab-item.active").classList.remove("active");
                $(".tab-pane.active").classList.remove("active");

                line.style.left = this.offsetLeft + "px";
                line.style.width = this.offsetWidth + "px";

                this.classList.add("active");
                pane.classList.add("active");
            };
        });

    }, []);


    const [isOpen, setOpen] = useState(false)
    const handleClose = () => setProduct(false);
    const [currentProduct, setProduct] = useState(null);
    const [currentUrl, setUrl] = useState(null);
    const [currentTitle, setTitle] = useState(null);


    return (
        <div>
            <NextSeo
                 noindex={true}
                 nofollow={true}
      title={title}
      description={desc}
      canonical={pathname}
      openGraph={{
        url: pathname,
        title: title,
        description:desc,
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
          { url:banner},
          { url:banner},
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
<Header />
           
            <Image
                src={banner}
                width="900"
                height="620"
                background='no-repeat'
                background-size='cover'
                className="banner-img w-100"
                
            />
            <Brand />
            <Container fluid className="wbg-main p-0 overflow-hidden">
                <Container className="text-center">
                    <p className="fs-2 bogle-medium text-white pt-3" >Newsroom</p>
                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
                </Container>
                <Container>
                    <div className="tabs">
                        <div className="tab-item active" >
                            <Image src="/images/annoucement.svg" alt="msme training Program online" className="img mt-2" width={50} height={50} />
                            <span className="eael-tab-title bogle-medium walmart-default">Announcements</span>
                        </div>
                        <div className="tab-item">
                            <Image src="/images/coverage.svg" alt="msme training Program online" className="img mt-2" width={50} height={50} />
                            <span className="eael-tab-title bogle-medium walmart-default">Coverage</span>
                        </div>
                        <div className="line"></div>
                    </div>
                </Container>
                <Container fluid className='overflow-hidden' style={{background:'#dee2e6'}}>
                    <div className="tab-content">
                        <div className="tab-pane active"  >
                        <News/>
                        </div>
                        {/* 2nd tab starts here  */}
                        <div className="tab-pane" >
                        <Media/>
                        </div>

                        {/* third tab start here */}

                        <div className="tab-pane" >
                            <Row className='w-center'>
                                <Container>
                                    <p className="fs-2 bogle-medium walmart-default mt-4" >Market Connect</p>
                                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
                                    <p className="fs-4">Expand your business reach by capturing new markets and widening existing markets. Vriddhi offers you the opportunity to grow through the supply chains of Flipkart and Walmart and other major domestic companies.</p>
                                </Container>
                            </Row>
                            <Container className="wbg_grey" fluid>
                                <Row>
                                    <Container className='w-center'> <p className="fs-2 bogle-medium  mt-4" >Domestic</p>
                                        <Image src="/images/flipkart-1.png" width={180} height={70} alt="Industry Connect Series" className="img-fluid"/>
                                        <p className="fs-4 mb-4 pb-4" style={{width:'70%'}}>As a Walmart Vriddhi-certified seller, you would be eligible for onboarding as well as incubation support to take your business digital on Flipkart.</p>


                                        <Container className="wbg-blue-m pb-4 mt-4 pb-5">
                                            <div className="onboard fs-3 bogle-medium walmart-border-right walmart-border-left">Onboarding</div>
                                            <p className="fs-3 bogle-medium text-white py-4 pb-4">Get handholding support to register and start selling on Flipkart.</p>
                                            <Row className="d-flex align-items-center justify-content-around">
                                            <Col sm={2} xs={12} lg={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/sign_up.png'
                                                        alt=''
                                                        width='90'
                                                        height={90}
                                                        className="w-30 w-20"
                                                     

                                                    />
                                                    <p style={{ height: 107 }}>Sign up as a seller on Flipkart</p></Col>
                                                    <Col sm={2} xs={12} lg={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/gstin.png'
                                                        alt=''
                                                        width={90}
                                                        height={90}
                                                        className="w-30 w-20"
                                                        effect="blur"

                                                    /><p style={{ height: 107 }}>Update GSTIN in Seller Dashboard</p></Col>
                                                <Col sm={2} xs={12} lg={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/upload.png'
                                                        alt=''
                                                        width={90}
                                                        height={90}
                                                        className="w-30 w-20"
                                                        effect="blur"

                                                    /><p style={{ height: 107 }}>Upload one listing on Flipkart</p></Col>
                                                <Col sm={2} xs={12} lg={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/products.png'
                                                        alt=''
                                                        width={90}
                                                        height={90}
                                                        className="w-30 w-20"
                                                        

                                                    /><p style={{ height: 107 }}>Select brand and vertical approval when listing products</p></Col>
                                                <Col sm={2} xs={12} lg={2} className="fs-4 h-box-5">
                                                    <Image
                                                        src='/images/new_orders.png'
                                                        alt=''
                                                        width={100}
                                                        height={100}
                                                        className="w-30 w-20"
                                                        

                                                    /><p style={{ height: 107 }}>Process new orders</p></Col>
                                            </Row>
                                        </Container>


                                        <Container className="wbg-footer pb-4">
                                            <div className="onboard fs-3 bogle-medium walmart-border-right walmart-border-left">Incubation</div>
                                            <p className="fs-3 bogle-medium text-white py-4 pb-4">Get a dedicated account manager to help you manage your business efficiently and get maximum customers on Flipkart.</p>
                                            <Container>
                                                <Row className="d-flex flex-lg-nowrap flex-sm-nowrap align-items-center">
                                                    <Col sm={12} lg={6} className="fs-4 s-box text-white border-box">
                                                        <p>Support to select the right products through knowledge of ‘Best Selling’ and ‘New and Trending’. </p></Col>

                                                    <Col sm={12} lg={6} className="fs-4 s-box text-white border-box">
                                                        <p>Guidance on pricing the products based on available information.</p></Col>
                                                </Row>
                                                <Row className="d-flex flex-lg-nowrap flex-sm-nowrap align-items-center mt-4">

                                                    <Col sm={12} lg={6} className="fs-4 s-box text-white border-box">
                                                        <p>Support to monitor business performance and connect with an Account Manager at least 4 times a week.</p></Col>
                                                    <Col sm={12} lg={6} className="fs-4 s-box text-white border-box">
                                                        <p>Assistance with keyword selection and advertising services to increase visibility.</p></Col>
                                                </Row>
                                                <Row className="d-flex flex-lg-nowrap flex-sm-nowrap align-items-center mt-4">

                                                    <Col sm={12} lg={6} className="fs-4 s-box text-white border-box">
                                                        <p>Help to improve business metrics and avail programs (Flipkart Fulfillment, Smart Fulfillment, Sunday Working and Express Working)</p></Col>
                                                    <Col sm={12} lg={6} className="fs-4 s-box text-white border-box">
                                                        <p>Real-time notifications on Flipkart promotions so you don’t miss out on the best deals.</p></Col>
                                                </Row>
                                            </Container>
                                        </Container>


                                    </Container>


                                </Row>

                            </Container>


                        </div>


                    </div>


                </Container>

                
            </Container>
            <Popups/>
            <Floating/> 
            <NewsLetter/>
            <Footer />
        </div>
    )
}

export default Webinars



