'use client'
import React, { useEffect, useState, useCallback } from "react";
import { Card, Col, Row, Container, Modal } from 'react-bootstrap';
import configData from "../config.json";
import { usePathname } from 'next/navigation';
import debounce from 'lodash.debounce';
import Aos from "aos";
import { IoIosCloseCircle } from "react-icons/io";


const FetchSuccessVideos = () => {
  const pathname = usePathname();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [end, setEnd] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchContent = useCallback(async () => {
    setLoading(true);
    try {
      const [moviesResponse, categoriesResponse] = await Promise.all([
        fetch(`${configData.SERVER_URL}posts?_embed&categories[]=128&production[]=${configData.SERVER}&status[]=publish&per_page=${page}`),
        fetch(`${configData.SERVER_URL}categories/128`)
      ]);

      const moviesData = await moviesResponse.json();
      const categoriesData = await categoriesResponse.json();

      const sortedMoviesData = moviesData.sort((a, b) => new Date(a.date) - new Date(b.date));

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
    setShowModal(true);
  };

  const handleVideoClick = () => {
    const iframe = document.querySelector("iframe");
    const videoSrc = iframe.src;

    iframe.src = ''; // Empty the src to stop the video
    iframe.src = videoSrc; // Re-assign to play again (toggles play/pause)
  };

  useEffect(() => {
    Aos.init({
      delay: 0,
      duration: 400,
      easing: 'ease',
    });
  }, []);

  return (
    <Container>
      <style>
        {`
          .tab-item:hover {
              opacity: 1;
              background-color: #FFC221;
              border-color: rgba(194, 53, 100, 0.1);
          }

          .tab-item:hover .walmart-default {
              color: white;
          }

          .modal-content {
              background: transparent;
              border: none;
          }

          .modal-backdrop.show {
              opacity: 0.5;
          }

          .custom-video-css{
            height:450px; 
            width:100% ; 
          }

          @media(max-width:767px){
            .custom-video-css{
              min-height:220px; 
              max-height:250px;
              width:100% ; 
            }
          }

          .close-button {
            position: absolute;
            bottom: 100%;
            right: 0px;
            background: transparent;
            border: none;
            cursor: pointer;
            font-size:35px;
            z-index:1100;
            color: white;
          }
        `}
      </style>
      <Row className="pt-5" data-aos="fade-up">
        {movies.map((item, index) => (
          <Col xs={12} lg={6} key={index} className="p-3">
            <Card className="rounded-0 shadow h-100">
              <div className="position-relative">
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

      {/* Modal for playing the video */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Body className="text-center p-0 position-relative">
          <button className="close-button" onClick={() => setShowModal(false)}><IoIosCloseCircle /></button>
          <div
            onClick={handleVideoClick}
            style={{
              position: 'relative',
              cursor: 'pointer',
              backgroundColor: 'transparent',
            }}
          >
            <iframe
              src={currentVideo}
              title="YouTube video player"
              frameBorder="0"
              className="custom-video-css"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FetchSuccessVideos;
