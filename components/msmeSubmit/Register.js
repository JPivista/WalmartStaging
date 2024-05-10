import React from 'react'
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import Link from 'next/link'

function Register() {
  return (
    <Container className='text-center mt-5 mb-3 pt-1 pb-5'>
    <Container>
        <h2 className='fs-1 bogle-medium'>Fireside Chat</h2>
            <Image
    src='/images/line-svg-png-1.png'
    alt='walmart vriddhi'
    width={100}
    height={20}
    className='mb-3'/>

     </Container>
    <Row>
        <Col>
          <p className='mt-1 fs-5'> This unique segment featured Mr. V. S. Kumar, a Walmart Vriddhi mentor, along with Walmart Vriddhi graduates Mr. Vikalp Maithil, Co-founder of Pavika Organics, and Ms. Preeti Bhandari, Founder of Naturally Pahadi. They shared their entrepreneurial journeys in an insightful discussion moderated by Mr. Shiv Kumar, Chief Mentor of Swasti and Co-Founder of Catalyst Group.</p>
          <Container>
          <Image src="/images/chat.png" height={300} width={300} className='w-100 h-100'/>  
        </Container>
          
        
        
        </Col>
    </Row>
      
    </Container>
  )
}

export default Register
