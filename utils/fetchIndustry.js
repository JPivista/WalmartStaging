import React, { useEffect, useState, useCallback } from "react";
import { Card, Button, Col, Row, Modal, Container } from 'react-bootstrap';
import Link from 'next/link'
import configData from "../config.json";
import { usePathname } from 'next/navigation'
import debounce from 'lodash.debounce';
import { RotatingLines } from 'react-loader-spinner';
import date from 'date-and-time';
import Image from 'next/image'

const SuccessStories = () => {
  const pathname = usePathname();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState();
  const [total, setTotal] = useState(0);
  const [end, setEnd] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleClose = () => setProduct(false);
  const [currentProduct, setProduct] = useState(null);
  const [currentUrl, setUrl] = useState(null);
  const [currentTitle, setTitle] = useState(null);

  const fetchContent = useCallback(async () => {
    setLoading(true);

    try {
      const [moviesResponse, categoriesResponse] = await Promise.all([
        fetch(`${configData.SERVER_URL}industry_connect?_embed&status=publish&production[]=${configData.SERVER}&per_page=${page}`),
        fetch(`${configData.SERVER_URL}categories/13`)
      ]);

      const moviesData = await moviesResponse.json();
      const categoriesData = await categoriesResponse.json();

      if (moviesData.length === 0) {
        setEnd(true);
      } else {
        setMovies(moviesData);
        setTotal(categoriesData.count);
        setNext(categoriesData);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [page]);

  const debouncedFetchContent = useCallback(debounce(fetchContent, 500), [page]);

  useEffect(() => {
    fetchContent();
    debouncedFetchContent();
  }, [page, debouncedFetchContent]);

  const loadMore = () => {
    if (page >= total) {
      setEnd(true);
      return;
    }

    setPage((oldPage) => oldPage + 4);
  };

  return (
    <div>
      <Modal
        show={currentProduct}
        onHide={handleClose}
        closeTimeoutMS={300}
        isOpen={Boolean(currentProduct)}
        onRequestClose={() => setProduct(null)}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title dangerouslySetInnerHTML={{ __html: currentTitle }} />
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="400" src={currentUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></Modal.Body>
      </Modal>
      <Container style={{ background: '#dee2e6' }} fluid>
        <Container>
          <Row className="pt-5">
            {
              movies.map((post, index) => {
                return (
                  <Col sm={4} className="p-3" key={index}>
                    <Card className="webinar_post">
                      {post['_embedded']['wp:featuredmedia'][0]['source_url'] && (
                        <Image
                          src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                          alt={post['title']['rendered']}
                          className="img-hover webimg img-fluid"
                          width={500}
                          height={500}
                          onClick={() => {
                            setProduct(post.id);
                            setUrl(post.acf.video_url);
                            setTitle(post.title.rendered);
                          }}
                        />
                      )}


                      <Card.Body>
                        <Card.Title className="fs-4 bogle-medium walmart-default pt-2" style={{ minHeight: 112 }} dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} />
                        <div dangerouslySetInnerHTML={{ __html: post['acf']['short_decription'] }} style={{ minHeight: 195 }} />
                        <div style={{ minHeight: 230 }}>
                          <Button variant="primary" className="pri-category mb-3" >{post['acf']['category']}</Button>
                          <h3 className="fs-5 bogle-medium mb-1 ">{post['acf']['expert_name']}</h3>
                          <h3 className="fs-6 mb-3 ">{post['acf']['expert_designation']}</h3>
                          <h3 className="fs-5 bogle-medium mb-1">{post['acf']['expert_name_copy']}</h3>
                          <h3 className="fs-6 mb-3">{post['acf']['expert_designation_copy']}</h3>
                        </div >
                      </Card.Body>
                    </Card>


                  </Col>
                )


              })}
          </Row>
        </Container>
      </Container>
      <section className="section text-center mb-3 pb-5" style={{ background: '#dee2e6' }} fluid>
        {loading ? (
          <RotatingLines
            visible={true}
            height="30"
            width="30"
            color="#fff"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            strokeColor="green"
            wrapperClass="" />

        ) : (
          <div className="loadmodediv">
            {end ? (<p>No more posts to load</p>) : (<Button variant="primary" className="authors_btn fs-5" onClick={loadMore}  >Load more</Button>
            )}</div>)}
      </section>



    </div>
  );
};

export default SuccessStories;