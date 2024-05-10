import React from 'react';
import { Container, Col, Row, Image,Button } from 'react-bootstrap';
import Link from 'next/link';

function InteractiveFlipkart() {
  return (
    <>
      <Container className='text-center pt-5'>
        
    
        <Row className=''>
            <Col className=''>
            <h2 className='fs-1 bogle-medium'>Interactive kiosk by Flipkart</h2>
            <Image
    src='/images/line-svg-png-1.png'
    alt='walmart vriddhi'
    width={100}
    height={20}
    className='mb-3'/>
<p className='fs-5'>Visit our live kiosk to resolve your queries and learn how to seamlessly onboard<br/>with Flipkart – a step towards expanding your business horizons.</p>            
<Image
        src="/images/flipcart.png" 
        alt="Bottom Corner Image"
        className="img-fluid"/> 
            </Col>
        </Row>
</Container>
     
      
    </>
  )
}

export default InteractiveFlipkart
