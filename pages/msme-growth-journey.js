import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import { Card, Col, Row } from 'react-bootstrap';
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import NewsLetter from '../components/NewsLetter'
import Floating from '../components/FloatingMenu'
import Popups from '../components/PopUps'



const Webinars = () => {
    const pathname = usePathname()
    const title = "MSME growth program, MSME growth journey program, MSME Supply Chain Management, msme online training program";
    const desc = "Walmart Vriddhi has assisted countless small businesses in going digital and growing their market reach Learn more about the different steps of the MSME growth journey program here";
    const banner = '/images/msme_banner.jpeg';
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
                    <p className="fs-2 bogle-medium text-white pt-3" >MSME Growth Journey</p>
                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
                    <p className="fs-3 text-white">The Walmart Vriddhi program helps you address your business challenges and pursue your aspirations, wherever you are in your business growth journey. It aims to equip MSMEs to ‘Make-in-India’ as well as enable their offline and online growth by becoming part of domestic supply chains.</p>
                </Container>
                <Container>
                    <div className="tabs">
                        <div className="tab-item active" >
                            <Image src="/images/learning_ico.svg" alt="msme training Program online" className="img img-fluid" width={100} height={100} />
                            <span className="eael-tab-title bogle-medium walmart-default">Learning</span>
                        </div>
                        <div className="tab-item">
                            <Image src="/images/mentoring_ico.svg" alt="msme training Program online" className="img img-fluid" width={100} height={100} />
                            <span className="eael-tab-title bogle-medium walmart-default">Personalized Mentoring</span>
                        </div>
                        <div className="tab-item">
                            <Image src="/images/market_ico.svg" alt="msme training Program online" className="img img-fluid" width={100} height={100} />
                            <span className="eael-tab-title bogle-medium walmart-default">Market Connect</span>
                        </div>

                        <div className="line"></div>
                    </div>
                </Container>
                <Container fluid className='wbg-white overflow-hidden'>
                    <div className="tab-content">
                        <div className="tab-pane active"  >
                            <Row className='w-center'>
                                <Container>
                                    <p className="fs-2 bogle-medium walmart-default mt-4" >Learning</p>
                                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" className="mb-5"/>
                                    <p className="fs-4" style={{width:'80%'}}>The Walmart Vriddhi learning program equips you with tailored support to help you unlock your growth potential. It provides you with interactive virtual learning experiences<br/>through the mobile app available on iOS and Android, in English, Hindi and Tamil.</p>
                                    <div className="banner-ribbon arrow-bottom fs-3 bogle-medium mt-5 mb-4">Business Fundamentals</div>
                                    <p className="fs-4" style={{width:'80%'}}>The program helps you gain a foundational understanding of business management, with a special focus on the global shift towards eCommerce. Frameworks and established theories will guide you on how to modernise and expand your businesses.</p>

                                    <Row className="d-flex flex-nowrap align-items-center px-2">
                                        <Col sm={4} lg={4} xs={4} className=" fs-4 b-box-3" >Channel-Based Costing</Col>
                                        <Col sm={4} lg={4} xs={4} className="fs-4 b-box-3">Introduction to Supply Chain</Col>
                                        <Col sm={4} lg={4} xs={4} className="fs-4 b-box-3">Pitch and Customer Value Proposition</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center px-2">
                                        <Col sm={4} className="fs-4 b-box-3">Digital Enablement</Col>
                                        <Col sm={4} className="fs-4 b-box-3">MSME Response to Covid-19</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Raising Capital and Leveraging Support</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center px-2">
                                        <Col sm={4} className="fs-4 b-box-3">Innovation</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Trade Promotions and Visual Merchandising</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Workforce Motivation</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center px-2">
                                        <Col sm={4} className="fs-4 b-box-3">Way Forward Strategy</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Cost Competitiveness</Col>
                                        <Col sm={4} className="fs-4 b-box-3">Risk and Legal Responsible Sourcing</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center px-1">
                                        <Col sm={6} className="fs-4 b-box-2">Marketing</Col>
                                        <Col sm={6} className="fs-4 b-box-2">Basics of Finance</Col>

                                    </Row>
                                    <div className="banner-ribbon arrow-bottom fs-3 bogle-medium mt-5 mb-4">Advanced Business</div>
                                    <p className="fs-4 pb-3">The program helps you apply advanced business management tools and strategies to your business. It offers relevant case studies to assist you gain real-life experience of MSMEs and get a deep understanding of markets,<br/>consumers, and digital transformation tools.</p>
                                    <Image
                                        src='/images/advanced_banner.jpeg'
                                        alt='advanced business walmart'
                                        width={700}
                                        height={100}
                                        className="w-100 h-auto"
                                     
                                    />

                                    <Row className="d-flex flex-nowrap align-items-center">
                                        <Col sm={4} className=" fs-4 a-box-3" >Success Factors for B2B eCommerce</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Supply Chain Management - Elements and Digitization</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Market Intelligence</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center">
                                        <Col sm={4} className="fs-4 a-box-3">Risk and Legal Responsible Sourcing</Col>
                                        <Col sm={4} className="fs-4 a-box-3">LEAN Manufacturing</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Success Factors for B2C eCommerce</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center">
                                        <Col sm={4} className="fs-4 a-box-3">Digital Enablement</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Business Case</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Product Development</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center">
                                        
                                        <Col sm={4} className="fs-4 a-box-3">Advanced Marketing</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Data-Based Performance Management</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Demand Forecasting</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center">
                                        
                                        <Col sm={4} className="fs-4 a-box-3">Procurement</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Managing your Finances</Col>
                                        <Col sm={4} className="fs-4 a-box-3">Advanced Financing</Col>
                                    </Row>
                                    <Row className="d-flex flex-nowrap align-items-center">
                                        
                                        <Col sm={12} className="fs-4 a-box-5">Women in Business</Col>

                                    </Row>

                                </Container>





                            </Row>
                        </div>
                        {/* 2nd tab starts here  */}
                        <div className="tab-pane" >
                            <Row className='w-center'>
                                <Container>
                                    <p className="fs-2 bogle-medium walmart-default mt-4" >Personalized Mentoring</p>
                                    <Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Industry Connect Series" />
                                    <p className="fs-4">One-to-one mentoring support to help you handle business challenges and make the most of opportunities.</p>
                                    <p className="fs-4">Mentors act as strategy experts to guide Vriddhi entrepreneurs on their transformational journey to help them identify the key action points and take their business forward to the next level.</p>

                                    <Row className="d-flex align-items-center">
                                        <Col sm={12} lg={4}  >
                                            <div className="card-box">
                                                <Image
                                                    src='/images/opportunities.svg'
                                                    alt=''
                                                    width='100'
                                                    height={100}
                                                    className=""
                                                    

                                                />
                                                <p className="bogle-medium fs-5">Do a SWOT Analysis
                                                    (Strengths, weaknesses,
                                                    opportunities and threats)</p>
                                            </div>
                                        </Col>
                                        <Col sm={12} lg={4} className="card-border" >
                                            <div className="card-box">
                                                <Image
                                                    src='../images/identify.svg'
                                                    alt='opportunities'
                                                    width='100'
                                                    height={100}
                                                    className=""
                                                 

                                                />
                                                <p className="bogle-medium fs-5">Identify areas of improvement</p>
                                            </div>
                                        </Col>
                                        <Col sm={12} lg={4} className="card-border">
                                            <div className="card-box ">
                                                <Image
                                                    src='../images/actionable.svg'
                                                    alt=''
                                                    width='100'
                                                    height={100}
                                                    className=""
                                                    

                                                />
                                                <p className="bogle-medium fs-5">Create an actionable roadmap towards business growth</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex align-items-center">
                                        
                                        <Col sm={12} lg={3} xs={12} className=" fs-5 p-box-4" ><p>Duration of <br/>Personalized Mentoring:</p><p className="bogle-medium walmart-default fs-2">100 days</p></Col>
                                        <Col sm={12} lg={3} className="fs-5 p-box-4"><p><br/>Number of sessions:</p><p className="bogle-medium walmart-default fs-2">6</p></Col>
                                        <Col sm={12} lg={3} className="fs-5 p-box-4"><p><br/>Duration of sessions:</p><p className="bogle-medium walmart-default fs-2">60-90 minutes</p></Col>
                                        <Col sm={12} lg={3} className="fs-5 p-box-4"><p><br/>Medium:</p><p className="bogle-medium walmart-default fs-2">Virtual meetings</p></Col>
                                    </Row>
                                    <p className="fs-3 bogle-medium walmart-default mt-4">Mentors: Average industry experience of 30 years</p>
                                    <Image
                                        src='/images/mentor_exp.png'
                                        alt='mentor experts walmart'
                                        width={800}
                                        height={600}
                                        className="w-70 h-auto"
                                     

                                    />
                                    <Image
                                        src='/images/msme_growth_banner.png'
                                        alt=''
                                        width={1000}
                                        height={200}
                                        className="my-3 w-100 h-auto"
                                     

                                    />

                                </Container>





                            </Row>
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



