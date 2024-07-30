'use client'
import React, { useEffect, useState, useCallback } from "react";
import { Card, Col, Row, Container } from 'react-bootstrap';
import configData from "../config.json";
import { usePathname } from 'next/navigation';
import debounce from 'lodash.debounce';
import { RotatingLines } from 'react-loader-spinner';

const FetchSuccessVideos = () => {
  const pathname = usePathname();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [end, setEnd] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const fetchContent = useCallback(async () => {
    setLoading(true);
    try {
      const [moviesResponse, categoriesResponse] = await Promise.all([
        fetch(`${configData.SERVER_URL}posts?_embed&categories[]=128&production[]=${configData.SERVER}&status[]=publish&per_page=${page}`),
        fetch(`${configData.SERVER_URL}categories/128`)
      ]);

      const moviesData = await moviesResponse.json();
      const categoriesData = await categoriesResponse.json();
      console.log(moviesData)
      if (moviesData.length === 0) {
        setEnd(true);
      } else {
        setMovies(moviesData);
        setTotal(categoriesData.count);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [page]);

  const debouncedFetchContent = useCallback(debounce(fetchContent, 500), [fetchContent]);

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

  const handleThumbnailClick = (videoLink) => {
    setCurrentVideo(videoLink);
  };

  return (
    <Container>
      <Row className="pt-5">
        {movies.map((item, index) => (
          <Col xs={12} lg={6} key={index} className="p-3">
            <Card className="rounded-0 shadow h-100">
              <div className="position-relative">
                {/* {currentVideo === item.acf.video_link ? (
                  <div className="d-flex flex-column justify-content-center align-items-center p-3">
                    <iframe
                      height="315"
                      src={item.acf.video_link}
                      title="YouTube video player"
                      frameBorder="0"
                      className="w-100"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                ) : ( */}
                <>
                  <Card.Img
                    className="p-3 position-relative"
                    src={item._embedded['wp:featuredmedia'][0].source_url}
                    alt={item.title.rendered}
                    onClick={() => handleThumbnailClick(item.acf.video_link)}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src="/images/success/icon-video.svg"
                    className="position-absolute top-50 start-50 translate-middle"
                    alt="video icon"
                    onClick={() => handleThumbnailClick(item.acf.video_link)}
                    style={{ cursor: 'pointer' }}
                  />
                </>
                {/* )} */}
              </div>
              <Card.Body>
                <Card.Title className="text-center">
                  {item.title.rendered}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {!end && movies.length >= 10 && (
        <div className="text-center my-4">
          <button className="btn btn-primary" onClick={loadMore} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </Container>
  );
};

export default FetchSuccessVideos;
