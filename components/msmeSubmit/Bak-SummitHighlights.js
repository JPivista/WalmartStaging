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
              <p className='fs-5'> Shri Narayan Rane, the Minister for Micro, Small, and Medium Enterprises in India, has been invited as a special guest to speak at the event. </p>
              <hr className='dot-line'/>
              <p className='fs-5'>Listen to experienced leaders from Flipkart, Walmart Vriddhi, Swasti, and other industry experts as they share valuable tips on how to grow your business in the digital world.</p>
              <hr className='dot-line'/>
              <p className='fs-5'>There will also be a special fireside chat with mentors from Walmart Vriddhi and MSMEs who have successfully graduated from the program. They will share their experiences on the benefits of joining the program.</p>
              <hr className='dot-line'/>
<p className='fs-5'>Please do join these informative sessions and learn how it prepares, trains, and supports MSMEs in accelerating their business growth.</p>          
            
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
