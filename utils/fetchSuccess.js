import React, { useEffect, useState, useCallback } from "react";
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link'
import configData from "../config.json";
import { usePathname } from 'next/navigation'
import debounce from 'lodash.debounce';
import { RotatingLines } from 'react-loader-spinner';
import Image from 'next/image'

const SuccessStories = () => {
  const pathname = usePathname();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState();
  const [total, setTotal] = useState(0);
  const [end, setEnd] = useState(false);

  const fetchContent = useCallback(async () => {
    setLoading(true);

    try {
      const [moviesResponse, categoriesResponse] = await Promise.all([
        fetch(`${configData.SERVER_URL}posts?_embed&categories[]=12&&production[]=${configData.SERVER}&status[]=publish&per_page=${page}`),
        fetch(`${configData.SERVER_URL}categories/12`)
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


      <Container className="wbg-light-gy" fluid>
        <Container>
          <Row className="pt-5">
            {

              movies.map((post, index) => {
                //console.log(post);
                return (
                  <>
                    <Col sm={6} className="p-3" key={post.id}>
                      <Card className="story_post" >
                        {post['_embedded']['wp:featuredmedia'][0]['source_url'] && (
                          <Image
                            src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                            alt={post['title']['rendered']}
                            className="w-100 h-auto"
                            width={600}
                            height={400}
                            priority
                          />
                        )}

                        <Card.Body>
                          <Button variant="primary" className="pri-category mb-3 bogle-medium">MSME SuperPower: {post['acf']['primary_category']}</Button>
                          <Card.Title className="fs-3 bogle-medium mb-4 story-title" dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} />
                          <h3 dangerouslySetInnerHTML={{ __html: post['acf']['author_name'] }} className="fs-4 authors bogle-medium"></h3>
                          <h3 dangerouslySetInnerHTML={{ __html: post['acf']['author_designation'] }} className="fs-7 mb-3" style={{ minHeight: 25 }}></h3>
                          <div dangerouslySetInnerHTML={{ __html: post['excerpt']['rendered'] }} className="fs-5 mb-3 m-height" style={{ minHeight: 200 }}></div>
                          <Link key={index} href={`/success-story/${post['slug']}`}>
                            <Button variant="primary" className="authors_btn fs-5">Know more</Button>
                          </Link>
                        </Card.Body>
                      </Card>

                    </Col>

                  </>
                )
              })}
          </Row>
        </Container>
      </Container>

      <section className="section text-center mb-3 pb-5 wbg-light-gy" fluid>
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