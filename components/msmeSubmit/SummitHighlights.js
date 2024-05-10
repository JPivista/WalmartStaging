import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'

function SummitHighlights() {
  return (
    <>
      <Container>
<Container style={{background:'#FCEBC8'}} className='g-0 text-center'>
<Row>
<Col className='d-flex justify-content-start align-items-end' lg={2}>
<Image
src="/images/bottom-corner-image.svg"
alt="Top Corner Image"
className=""
style={{ width: "117px", height: "114px" }}
/>
</Col>
<Col className='pt-5 pb-5'>
<h2 className='fs-1 bogle-medium'>Summit Highlights</h2>
<Image
    src='/images/line-svg-png-1.png'
    alt='walmart vriddhi'
    width={100}
    height={20}
    className='mb-3'
/>
              <p className='fs-5'> Experienced leaders from Flipkart, Walmart Vriddhi, Walmart, Swasti, and other industry experts shared valuable tips on how to grow businesses in the digital world during informative sessions.</p>
              <hr className='dot-line'/>
              <p className='fs-5'>A special fireside chat featured a Walmart Vriddhi mentor and graduates of the MSME program. They shared their experiences on the benefits of joining the program and how it prepared, trained, and supported MSMEs in accelerating their business growth.</p>
              <hr className='dot-line'/>
              <p className='fs-5'>Attendees had the opportunity to learn from these sessions and gain insights into strategies for enhancing their businesses in the digital realm.</p>
              {/* <hr className='dot-line'/> */}
{/* <p className='fs-5'>Please do join these informative sessions and learn how it prepares, trains, and supports MSMEs in accelerating their business growth.</p>           */}
            
            </Col>
            <Col lg={2} className='d-flex justify-content-end'>
            <Image
src="/images/top-corner-image.svg"
alt="Bottom Corner Image" 
className=""
style={{ width: "117px", height: "114px" }}
/>
            </Col>
       </Row>
        </Container>
     </Container>
    </>
  )
}

export default SummitHighlights
