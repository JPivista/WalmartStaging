import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MdMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";


function FloatingMenu() {
  return (
    <div >
      <Container className="floating-menu">
          <Container className="float_email">
              <Row>
              <Col className="d-flex align-items-center hide_email" ><a href="mailto:contactus@walmartvriddhi.org">contactus@walmartvriddhi.org</a></Col>
            <Col >
            <MdMail size={40} fill="#fff"/>
            </Col>
              </Row>
          </Container>
          <Container className="float_phone">
              <Row>
              <Col className="d-flex align-items-center hide_phone" ><a href="tel:+916361056533">+91 6361 056 533</a></Col>
            <Col >
                  <MdLocalPhone size={40} fill="#fff" />
            </Col>
              </Row>
        </Container>
        </Container>
    </div>
  )
}

export default FloatingMenu
