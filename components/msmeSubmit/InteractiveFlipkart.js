import React from 'react';
import { Container, Col, Row, Image,Button } from 'react-bootstrap';
import Link from 'next/link';

function InteractiveFlipkart() {
  return (
    <>
      <Container className='text-center pt-5 py-5'>
        
    
        <Row className=''>
            <Col className=''>
            <h2 className='fs-1 bogle-medium'>Lamp Lighting</h2>
            <Image
    src='/images/line-svg-png-1.png'
    alt='walmart vriddhi'
    width={100}
    height={20}
    className='mb-3'/>
<p className='fs-5'>The event was graced by Walmart Vriddhi’s honoured guest, Ms. Najma Hashmi, Director of International Trade at the India SME Forum. Among the other distinguished attendees were senior leadership representatives from Walmart and Flipkart, including Mr. Jason Fremstad, Senior Vice President of Supplier Development; Mr. Nittin Dutt, Senior Director of India Supplier Development at Walmart Sourcing; Ms. Sherry Lee Singh, Senior Director of Walmart Supplier Development; Mr. Rajneesh Kumar, Chief Corporate Affairs Officer of Flipkart Group; and Mr. Rakesh Krishnan, Vice President and Head of Marketplace at Flipkart, who participated in the inaugural lamp lighting ceremony.</p>            
</Col>
        </Row>
        <Row>
          <Col><Image src="/images/light-left.png" height={400} width={400} className='w-100 h-100'/></Col>
          <Col><Image src="/images/light-right.png" height={400} width={400}  className='w-100 h-100'/></Col>
        </Row>
</Container>
     
      
    </>
  )
}

export default InteractiveFlipkart
