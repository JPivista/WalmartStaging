import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image'
import 'react-lazy-load-image-component/src/effects/blur.css';


function ContainerFluidBreakpointExample() {

  return (
    <Container fluid className="mt-4">
      <Container>
      <Row>
        <Col className="text-center">
          <p className="fs-1 mfs-1 bogle-medium walmart-default">Grow your business with<br />
            the Walmart Vriddhi Learning Program</p>
          <Image
              src='/images/line-svg-png-1.png'
              alt='walmart vriddhi'
              width={100}
              height={20}
              className='mb-3'
          />
          <p className="col-md-9 mx-auto text-center fs-4 ">Walmart Vriddhi is a supplier development program that aims to work with 50,000
            Micro, Small and Medium Enterprises (MSMEs) in India to expand their domestic
            capabilities.</p>
            <p className="col-md-9 mx-auto text-center fs-4 ">The program offers the opportunity to:</p>

        </Col>
      </Row>
      
      <Row>
        <Col className="text-center" xs={12} sm={5}>
          <p className="fs-2 bogle-medium walmart-default">DEVELOP</p>
          <p className="fs-5"> On-Demand Learning &<br />
            Personalized Mentoring for MSMEs</p>

          </Col >
          <Col className="text-center" xs={12} sm={2} lg={2}>
           <hr className="line_d"/>
          </Col>
        <Col className="text-center" xs={12} sm={5}>
          <p className="fs-2 bogle-medium walmart-secondary">CONNECT</p>
          <p className="fs-5">Market Access & Onboarding<br />
            Support with Flipkart Marketplace</p>

        </Col>
   

      </Row>
      </Container>
    </Container>

  );
}

export default ContainerFluidBreakpointExample;
