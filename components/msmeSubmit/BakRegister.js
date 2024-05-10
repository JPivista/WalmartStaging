import React from 'react'
import { Container, Col, Row, Image, Button } from "react-bootstrap";
import Link from 'next/link'

function Register() {
  return (
    <Container className='text-center mt-5 mb-3 pt-1 pb-5'>
    <Row>
        <Col>
          <p className='mt-1 fs-5'>Don’t miss out on this opportunity to connect, learn, and grow.<br /> Click ‘Register Now’ to be a part of this inspiring journey.</p>
          <br/><br/>
          <Link href="https://forms.gle/1eZnYRz8qs1gxKST7" target='_blank' className='walmart-orange fs-5 bogle-medium text-white mt-5'>REGISTER NOW</Link>
        
        
        </Col>
    </Row>
      
    </Container>
  )
}

export default Register
