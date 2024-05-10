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

<Container className='wbg-blue-m rounded-3 mb-2 text-center' style={{width:'20'+'%'}}>
<Row class="d-flex justify-content-center pt-2">
<Col lg="12" sm="12" className='pb-4 pt-4'>
<h3 className='fs-3 text-white bogle-medium mb-2'>New Delhi</h3>
<Image
        src="/images/time.png" 
        alt="Bottom Corner Image"
        className="img-fluid"
        style={{ width: '200px', height: '30px' }}
      />
       </Col>
     </Row>
</Container>
<Container className='mb-5 mt-5 text-center'>
      <p className='fs-5'>The Walmart Vriddhi MSME Summit 2024 was a moment to reflect on the journey and milestones of thousands of MSMEs who had accelerated their growth and accessed new markets through the Walmart Vriddhi supplier development program. It was also an event to commemorate the graduation of MSMEs, which was a testament to their efforts to embrace digitisation and grow.</p>
       <p className='fs-5'> By connecting, growing, and accelerating Walmart and Flipkart’s ongoing supplier development initiatives, the Walmart Vriddhi program sought to empower Indian MSMEs, artisans, weavers, and craftspeople for growth and have a lasting effect.</p>

</Container>
    </>
  )
}

export default Summit2024
