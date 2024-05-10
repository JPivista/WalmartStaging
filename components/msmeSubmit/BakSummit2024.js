import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'

function Summit2024() {
  return (
    <>
<Container className='text-center'>
        <h1 className='fs-2 bogle-medium mt-5'>Walmart Vriddhi MSME Summit 2024</h1>
        <Image
              src='/images/line-svg-png-1.png'
              alt='walmart vriddhi'
              width={100}
              height={20}
              className='mb-3'
          />
</Container>

<Container className='wbg-blue-m rounded-3 mb-2 text-center' style={{width:'80'+'%'}}>
<Row class="d-flex justify-content-center pt-2">
<Col lg="12" sm="12" className='pb-4 pt-4'>
<h3 className='fs-3 text-white bogle-medium mb-2'>New Delhi, Bengaluru, Surat, Guwahati, Chennai, Agra & Lucknow</h3>
<Image
        src="/images/time.svg" 
        alt="Bottom Corner Image"
        className="img-fluid"
        style={{ width: '621px', height: '44px' }}
      />
       </Col>
     </Row>
</Container>
<Container className='mb-5 mt-5 text-center'>
      <p className='fs-5'> The Walmart Vriddhi MSME Summit 2024 is a moment to reflect on the journey and milestones of thousands of MSMEs who<br/> have accelerated their growth and accessed new markets through the Walmart Vriddhi supplier development program. It is also<br/> an event to commemorate the graduation of MSMEs, which is a testament to their efforts to embrace digitisation and grow. </p>
       <p className='fs-5'>By connecting, growing, and accelerating, Walmart and Flipkart’s ongoing supplier development initiatives, the Walmart Vriddhi<br/> program seeks to empower Indian MSMEs, artisans, weavers, and craftspeople for growth and have a lasting effect.</p>

</Container>
    </>
  )
}

export default Summit2024
