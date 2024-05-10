import React from 'react'
import { Container, Col, Row} from 'react-bootstrap';
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = () => {
    return (
        <div className="app_back ">
            <Container className="py-4">
                <Row className="py-4">
                    <Col className="d-flex justify-content-end" sm={6} xs={12}>
                        <LazyLoadImage
                            src='/images/app_banner.png'
                            alt=''
                            width='80%'
                            effect="blur"
                            

                        />

                    </Col>
                    <Col>
                        <p className="fs-1 bogle-medium m-center walmart-default lh-2">Download the<br/> Walmart Vriddhi App</p>
                        <p className="fs-4 m-center">#GrowKaro with one of the best learning programs for
                            MSMEs in the country!</p>
                        <Container>
                            <Row>
                                <Col className="text-end" sm={6} xs={6}>
                                    <Link href="https://play.google.com/store/search?q=Walmart%20vriddhi&c=apps">
                                        <LazyLoadImage
                                            src='/images/google-play-badge.png'
                                            alt=''
                                            width='100%'
                                            effect="blur"
                                        /></Link>
                                </Col>
                                <Col sm={6} xs={6}><Link href="https://apps.apple.com/in/app/walmart-vriddhi/id1631093898">
                                    <LazyLoadImage
                                        src='/images/apple-store-badge.png'
                                        alt=''
                                        width='100%'
                                        
                                        effect="blur"
                                        /></Link>
                                </Col>
                            </Row>
                        </Container>
                        <hr className="p_line"/>
                        <p className="fs-4">Download the App to begin your Walmart Vriddhi FREE learning
                            program. The app provides access to learning modules in English,
                            Hindi and Tamil.</p>
                    </Col>

                </Row>


            </Container>

        </div>
    )
}

export default App