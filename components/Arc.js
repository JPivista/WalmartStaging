import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from 'next/image'

const Arc = () => {

    const [isStep1, setIsStep1] = useState(false);
    const [isStep2, setIsStep2] = useState(false);
    const [isStep3, setIsStep3] = useState(false);
    const [isStep4, setIsStep4] = useState(false);
    const [isStep5, setIsStep5] = useState(false);
    const [isStep6, setIsStep6] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const handleStep1Over = () => {
        setIsStep1(true);
    };
    const handleStep1Out = () => {
        setIsStep1(false);
    };
    const handleStep2Over = () => {
        setIsStep2(true);
    };
    const handleStep2Out = () => {
        setIsStep2(false);
    };
    const handleStep3Over = () => {
        setIsStep3(true);
    };
    const handleStep3Out = () => {
        setIsStep3(false);
    };
    const handleStep4Over = () => {
        setIsStep4(true);
    };
    const handleStep4Out = () => {
        setIsStep4(false);
    };
    const handleStep5Over = () => {
        setIsStep5(true);
    };
    const handleStep5Out = () => {
        setIsStep5(false);
    };
    const handleStep6Over = () => {
        setIsStep6(true);
    };
    const handleStep6Out = () => {
        setIsStep6(false);
    };
    const step_01 =
    isStep2 || isStep3 || isStep4 || isStep5 || isStep6? "fade-in step_01" : "step_01";

    const step_02 =
    isStep1 || isStep3 || isStep4 || isStep5 || isStep6? "fade-in step_02" : "step_02";


    const step_03 = 
    isStep1 || isStep2 || isStep4 || isStep5 || isStep6? "fade-in step_03" : "step_03";
    


    const step_04 =
    isStep1 || isStep2 || isStep3 || isStep5 || isStep6? "fade-in step_04" : "step_04";


    const step_05 =
    isStep1 || isStep2 || isStep3 || isStep4 || isStep6? "fade-in step_05" : "step_05";

    const step_06 =
    isStep1 || isStep2 || isStep3 || isStep4 || isStep5? "fade-in step_06" : "step_06";
  



    

    return (
        <div>
            <Container className="d-none d-sm-block overflow-hidden">
                <Row>
                    <Col className="text-center">

                        <p className="fs-2 bogle-medium walmart-default">5 simple steps for you, a giant leap for your business</p>
                        <Image
              src='/images/line-svg-png-1.png'
              alt='walmart vriddhi'
              width={100}
              height={20}
              className='mb-1'
          />
                    </Col>
                </Row>
                <Row>
                    <Col className='zindex-7'>
                        <Row className="mt-5 text-center">
                        <Col className="step_03_text">
                                <p className={isStep3 ? 'slide-up bogle-medium fs-4 text-3':'bogle-medium fs-4 text-3'}>Market Connect</p>
                                <p className={isStep3 ? 'slide-up':''}>{isStep3 ? 'On-board and transact on Flipkart Marketplace and Flipkart Wholesale':''}</p>
                            </Col>
                        </Row>
                        <Row className="text-center">
                        
                            <Col className=""> 
                            <LazyLoadImage
                                src='/images/arc-1.png'
                                alt=''
                                effect="blur"
                                className={step_03}
                                 onMouseOver={handleStep3Over}
                                onMouseOut={handleStep3Out}
                            /></Col>
                        </Row>
                    </Col>
                    
                </Row>
                <Row style={{marginTop: -6}}>
                    <Col style={{marginTop: -103}}>
                        <Row>
                            <Col className="step_02_text" sm={7}>
                                <p className={isStep2 ? 'slide-up bogle-medium fs-4 text-2':'bogle-medium fs-4 text-2'}>On-Demand Learning</p>
                                <p className={isStep2 ? 'slide-up':''}>{isStep2 ? 'Self-learning (Business Fundamentals & Advanced)':''}</p>
                            </Col >
                            <Col className="d-flex justify-content-end zindex-8"> 
                            <LazyLoadImage
                                src='/images/step_02.png'
                                alt=''
                                effect="blur"
                                className={step_02}
                                onMouseOver={handleStep2Over}
                                onMouseOut={handleStep2Out}
                            /></Col>
                        </Row>
                    </Col>
                    <Col className="d-flex justify-content-center" sm={3}>
                        <LazyLoadImage
                            src='/images/circle_lady.png'
                            alt=''
                            effect="blur"
                            className="circle_lady"
                        />
                    </Col>
                    <Col style={{marginTop: -108}}>
                        <Row >
                            <Col className='zindex-5'>
                                <LazyLoadImage
                                    src='/images/step_05.png'
                                    alt=''
                                    effect="blur"
                                    className={step_05}
                                    onMouseOver={handleStep5Over}
                                    onMouseOut={handleStep5Out}

                                /></Col>
                            <Col className="step_05_text" sm={7}>
                                <p className={isStep5 ? 'slide-up bogle-medium fs-4 text-5':'bogle-medium fs-4 text-5'}>Personalized Mentoring</p>
                                <p className={isStep5 ? 'slide-up':''}>{isStep5 ? 'Engage with experts for customized strategic & operational solutions':''}</p></Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{marginTop: -200}}>
                    <Col >
                        <Row>
                            <Col className="step_01_text" sm={7}>
                                <p className={isStep1 ? 'slide-up bogle-medium fs-4 text-1':'bogle-medium fs-4 text-1'}>Registration</p>
                                <p className={isStep1 ? 'slide-up':''}>{isStep1 ? 'Fill a few details and register with Walmart Vriddhi in under 2 minutes' :''}</p>
                            </Col>
                            <Col className="d-flex justify-content-end zindex-9"> 
                            <LazyLoadImage
                                src='/images/step_01.png'
                                alt=''
                                effect="blur"
                                // className="step_01"
                                className={step_01}

                                onMouseOver={handleStep1Over}
                                onMouseOut={handleStep1Out}
                            /></Col>
                        </Row>
                    </Col>
                    <Col className=""></Col>
                    <Col className="zindex-4">
                        <Row>
                            <Col>
                                <LazyLoadImage
                                    src='/images/step_06.png'
                                    alt=''
                                    effect="blur"
                                    className={step_06}
                                    onMouseOver={handleStep6Over}
                                    onMouseOut={handleStep6Out}
                                /></Col>
                            <Col className="step_06_text" sm={7}>
                                <p className={isStep6 ? 'slide-up bogle-medium fs-4 text-6':'bogle-medium fs-4 text-6'}>Network Support</p>
                                <p className={isStep6 ? 'slide-up':''}>{isStep6 ? 'Learn, share and connect with a wide network of MSMEs' : ''}</p>
                                </Col>
                        </Row>

                    </Col>
                </Row>

            </Container>


        </div>
    )
}

export default Arc