import { Container, Row, Col, Card,  Carousel } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'next/image'


function ContainerFluidBreakpointExample() {

  return (
    <Container className="wbg-gy text-center mx-auto py-4 my-4" fluid>
      <Container className="d-none d-sm-block">
        <p className="fs-2 bogle-medium walmart-default">Program benefits</p>
        <Image
              src='/images/line-svg-png-1.png'
              alt='walmart vriddhi'
              width={100}
              height={20}
              className='mb-1'
          />

        <Row className="justify-content-md-center pt-4">
          <Col className="col-md px-0 hover-card" xs={12}>
            <Card className="wbg-orange rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-1.webp'
                  alt=''
                  className="img-benefits"
                  
                />

                <hr className="b_line" />
                <Card.Title className="text-white bogle-medium " style={{ height: 100 }}>Business Development Assistance to Go Digital</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-md px-0 hover-card" xs={12}>
            <Card className="wbg-yellow rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-2.webp'
                  alt=''
                  className="img-benefits"
                
                />

<hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>Exclusive Pre-Launch Support to Grow on Flipkart</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-md px-0 hover-card" xs={12}>
            <Card className="wbg-green rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-3.webp'
                  alt=''
                  className="img-benefits"
                  
                />

<hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>New Domestic Markets</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-md px-0 hover-card" xs={12}>
            <Card className="wbg-blue rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-4.webp'
                  alt=''
                  className="img-benefits"
                  
                />

<hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>Collaborate and Grow your MSME Network</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-md px-0 hover-card" xs={12}>
            <Card className="wbg-main rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-5.webp'
                  alt=''
                  className="img-benefits"
                  
                />

<hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>Personalized Mentoring Support with Industry Experts</Card.Title>
              </Card.Body>
            </Card>
          </Col>


        </Row></Container>

      <Container className="d-lg-none">
        <p className="fs-1 bogle-bold walmart-default">Program benefits</p>
        <LazyLoadImage
          src='/images/line-svg-png-1.png'
          alt=''
          className="img-benefits"
        />
        <Carousel
          fade={false}
          controls={false}
          indicators={false}
          touch={true}
          slide={true}

        >
          {/* first mobile slide */}

          <Carousel.Item>
            <Card className="wbg-orange rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-1.webp'
                  alt=''
                  className="m-img"
                />

                <hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>Business Development Assistance to Go Digital</Card.Title>
              </Card.Body>
            </Card>

          </Carousel.Item>

          {/* first mobile slide end here */}

          <Carousel.Item>
            <Card className="wbg-yellow rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-2.webp'
                  alt=''
                  className="m-img"
                />

                <hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>Exclusive Pre-Launch Support to Grow on Flipkart</Card.Title>
              </Card.Body>
            </Card>

          </Carousel.Item>

          {/* second carosel slide end here */}
          <Carousel.Item>
            <Card className="wbg-green rounded-0" style={{ height: 310 }}>
              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-3.webp'
                  alt=''
                  className="m-img"
                />
                <hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>New Domestic Markets</Card.Title>
              </Card.Body>
            </Card>

          </Carousel.Item>

          {/* second carosel slide end here */}
          <Carousel.Item>
            <Card className="wbg-blue rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-4.webp'
                  alt=''
                  className="m-img"
                />

<hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>Collaborate and Grow your MSME Network</Card.Title>
              </Card.Body>
            </Card>

          </Carousel.Item>

          {/* second carosel slide end here */}
          <Carousel.Item>
            <Card className="wbg-main rounded-0" style={{ height: 310 }}>

              <Card.Body className='benefits'>
                <LazyLoadImage
                  src='/images/benefits-step-5.webp'
                  alt=''
                  className="m-img"
                />

<hr className="b_line" />
                <Card.Title className="text-white bogle-medium" style={{ height: 100 }}>Personalized Mentoring Support with Industry Experts</Card.Title>
              </Card.Body>
            </Card>

          </Carousel.Item>



        </Carousel>

      </Container>




    </Container>

  );


}

export default ContainerFluidBreakpointExample;