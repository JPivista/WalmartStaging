import React, { useEffect, useState } from "react";
import { Card,Col, Row, Container, Image,Carousel } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import configData from '../config.json';


const Home = () => {
  
  
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchMovies = async () => {
    setLoading(true);
    let url = "";
    url = `${configData.SERVER_URL}testimonials?_embed&status=publish&production[]=${configData.SERVER}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    
  }, []);

  return (

    <Container className="wbg-yellow text-center" fluid>
    <p className="fs-2 bogle-bold ">Proud owners who keep adding to the India story</p>
    <LazyLoadImage 
    src="./images/line-svg-png-1.png" 
    alt="walmart Vriddhi"
    effect="blur"
    />
    <Row className="pb-5 pt-4">
    {loading && <h2 className="loading">Loading...</h2>}
        <Carousel>
          {
            movies.map((post) => {
              //  console.log(post)
              return (
                <Carousel.Item key={post.id}>
                  <Container className="md-flex">
                    <Row className="wbg-white d-flex align-items-center ">
                    <Col className="p-0 d-flex justify-content-center  d-sm-none" sm={5}>
                        <LazyLoadImage
                          src={post['acf']['profile_banner_mobile']['url']}
                          alt={post['title']['rendered']}
                          effect="blur"
                         
                        />
                      </Col>
                      <Col sm={7} className="wbg-white ">
                        <div className="bogle-r-italic fs-5 test px-3" dangerouslySetInnerHTML={{ __html: post['acf']['testimonial'] }} />

                        <Card.Title className="walmart-secondary px-3 fs-4 test bogle-medium">{post['acf']['name']},</Card.Title>
                        <Card.Text className="px-3 test fs-5">
                          {post['acf']['business']}
                        </Card.Text>
                      </Col >
                      <Col className="p-0  d-flex justify-content-end m-tm-none" sm={5}>
                        <LazyLoadImage
                          src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                          alt={post['title']['rendered']}
                          className="m-tm-none"
                          effect="blur"
                          
                        />
                      </Col>
                    </Row>
                  </Container>

                </Carousel.Item>
              )

            })}
        </Carousel>

        
      </Row>
  </Container>



    
  );
};

export default Home;
