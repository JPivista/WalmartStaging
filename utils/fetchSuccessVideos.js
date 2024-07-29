import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import SuccessVideos from "../utils/data";

const fetchSuccessVideos = () => {
  return (
    <Container>
      <Row className="pt-5">
        {SuccessVideos.map((item, index) => (
          <Col xs={12} lg={6} key={index} className="p-3">
            <Card className="rounded-0 shadow">
              <div className="position-relative">
                <Card.Img className="p-3 position-relative" src={item.image} />
                <img
                  src="/images/success/icon-video.svg"
                  className="position-absolute top-50 start-50 translate-middle"
                  alt="video icon"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">
                  {item.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default fetchSuccessVideos;
