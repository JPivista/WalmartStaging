import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Link from 'next/link'

function Banner() {
  return (
    <>
      <Container fluid className="text-center position-relative d-flex justify-content-center wbg-blue-m">
        <Image
          src="images/summit-top-corner.svg"
          alt="Top Corner Image"
          className="position-absolute top-0 end-0 img-banner z-index"
          
        />
        <Image
          src="images/summit-bottom-corner.svg"
          alt="Bottom Corner Image" 
          className="position-absolute bottom-0 start-0 img-banner z-index"
          
              />
<Container style={{height:'600px'}} className="d-flex">
        <Row className="d-flex justify-content-center align-items-center">
          <Col lg="6" className="d-flex align-items-center">
            <Row className="d-flex flex-column">
<Col className="padding-left">
<h2 className="fs-2 bogle-medium text-white text-start">
        Walmart Vriddhi<br/>MSME Summit 2022</h2>
<p className='fs-4 text-white text-start'>A journey through the highlights<br/>and memorable moments of our<br/>previous gathering.</p>
</Col>
            </Row>
          </Col>
          <Col lg="6" className="d-flex justify-content-center align-items-center">
            <Image
              src="/images/group.png"
              alt="msme Image"
              className="img-fluid h-100"
            />
          </Col>
                  </Row>
                  </Container>
      </Container>
     
    </>
  );
}

export default Banner;
