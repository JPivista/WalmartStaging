// pages/search.js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import configData from '../config.json';
import NoResults from '../pages/no-results';

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const API_ENDPOINT = `${configData.SERVER_URL}posts?_embed&search=`;

  const fetchMovies = async (searchQuery) => {
    setLoading(true);
    const perPage = '&per_page=4';
    const url = searchQuery ? `${API_ENDPOINT}${searchQuery}${perPage}` : "";

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setMovies(data);
      setLoading(false);
      if (data.length === 0) {
        setError({ show: true, msg: "No results found" });
      } else {
        setError({ show: false, msg: "" });
      }
    } catch (error) {
      console.log(error);
      setError({ show: true, msg: "Failed to fetch data" });
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query]);

  return (
    
    <Container className="p-0" fluid>
        <Header/>
      {loading ? (
        <div className='text-center text-primary fs-4 p-3'>Loading...Please wait</div>
      ) : (
        <Row className='p-0 m-0'>
          {movies.length > 0 ? (
            movies.map((post) => {
              let type = ''; // Declare type outside the if conditions

              if (post['categories'][0] === 12) {
                type = '/success-story';
              }

              if (post['categories'][0] === 13) {
                type = '/newsroom';
              }

              return (
                // <Link key={post.id} href={`${type}/${post['slug']}`} className="search-text" target="_blank">
                
                  <Row className="py-3 justify-content-center">
                    <Col sm={4} lg={3} md={6}>
                      {post['_embedded'] && post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'][0] && (
                       <div className='text-center ms-3'>
                        <Link key={post.id} href={`${type}/${post['slug']}`} className="search-text" target="_blank">
                           <Image
                          src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                          alt={post['title']['rendered']}
                          width={300}
                          height={200}
                          className="w-lg-50"
                        /> 
                        </Link>
                         
                        </div>
                      )}
                    </Col>
                    
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <Link key={post.id} href={`${type}/${post['slug']}`} className="search-text text-center text-lg-start p-3  p-lg-0" target="_blank">
                      <span className="fs-5" dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} />
                      </Link>
                    </Col>
                  
                  </Row>
                // </Link>
              );
            })
        ) : (
            <div className='text-center p-5 text-danger fw-bold fs-1'>
                <NoResults/>
            </div>
          )}
        </Row>
      )}
      <Footer/>
    </Container>
    
  );
};

export default SearchResults;
