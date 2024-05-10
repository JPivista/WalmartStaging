import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, InputGroup, Row, Button } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../config.json";
import useDebounce from "../components/useDebounce";
import Link from 'next/link';

const SuccessStories = () => {
  const [movies, setMovies] = useState([]);
  const [profile, setProfile] = useState([]);
  const [uniqueCities, setUniqueCities] = useState([]);
  const [uniqueIndustry, setUniqueIndustries] = useState([]);
  const [page, setPage] = useState(1);
  const [val, setVal] = useState("");
  const [acfSearch, setSelectedCategory] = useState("");
  const [acfIndustry, setselectedIndustry] = useState("");
  const [hideNext, setHideNext] = useState(false);
  const [showPre, setshowPre] = useState(false);
  const [noPosts, setnoPost] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [hide, setHide] = useState(false);

  const postsPerPage = '9';
  const API_ENDPOINT = `${configData.SERVER_URL}walmart_graduates?_embed&categories[]=27&production[]=${configData.SERVER}&category_type[]=79&search=`;

  const NUM_PAGES_DISPLAYED = 5;

  const taxonomyName = "staging"; // Replace with your actual taxonomy name
  //const taxonomyUrl = `${configData.SERVER_URL}category_type/79`;
const taxonomyUrl = `${configData.SERVER_FROM}custom/v1/category_type_post_count/?category_type=79&production=${configData.SERVER}`;
const fetchTaxonomyCount = async () => {
  try {
    const response = await fetch(taxonomyUrl);
    const data = await response.json();

    if (response.ok) {
      const termCount = data.count;
      const pages =   parseInt( termCount / postsPerPage )

      setTotalPages(pages);
      //console.log(`Total Count of ${taxonomyName} Taxonomy Terms:`, pages);
    } else {
      console.error(`Failed to fetch taxonomy information. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching taxonomy information:", error);
  }
};



  const fetchMovies = async () => {
    let url = `${API_ENDPOINT}${val}&per_page=${postsPerPage}&page=${page}&category_type[]=79`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data);

    } catch (error) {
      console.log(error);
    }
  };

  const debouncedVal = useDebounce(val, 1000);

  useEffect(() => {
    if (debouncedVal) {
      fetchMovies();
    }
  }, [debouncedVal, page]);

  useEffect(() => {
    fetchCities();
    fetchPosts();
    fetchTaxonomyCount();
  }, [page]);

  const fetchPosts = async () => {
    let url = `${configData.SERVER_URL}walmart_graduates?_embed&categories[]=27&production[]=${configData.SERVER}&category_type[]=79&${acfSearch ? `&city=${acfSearch}` : ''}${acfIndustry ? `&industy=${acfIndustry}` : ''}&per_page=${postsPerPage}&page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setProfile(data);
          // Update total pages calculation
      
      
      if (postsPerPage > data.length) {
        setHideNext(true);
        setshowPre(false);
	setHide(false);
      } else {
        setHideNext(false);
      }
      if (page === 1) {
        setshowPre(true);
      }
      if (data.length === 0) {
        setnoPost(true);
	setHide(true);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async () => {
    let url = `${configData.SERVER_URL}walmart_graduates?_embed&categories[]=27&production[]=${configData.SERVER}&category_type[]=79&per_page=60`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data)
      const uniqueCities = data.reduce((accumulator, post) => {
        const existingCity = accumulator.find((city) => city.name === post['_embedded']['wp:term'][0][0]['name']);
        if (!existingCity) {
          accumulator.push({
            name: post['_embedded']['wp:term'][0][0]['name'],
            id: post['city'][0],
          });
        }
        return accumulator;
      }, []);

      setUniqueCities(uniqueCities);
      // Extract unique industries
      const uniqueIndustry = data.reduce((accumulator, post) => {
        const existingIndustry = accumulator.find((industry) => industry.name === post['_embedded']['wp:term'][1][0]['name']);
        if (!existingIndustry) {
          accumulator.push({
            name: post['_embedded']['wp:term'][1][0]['name'],
            id: post['industy'][0],
          });
        }
        return accumulator;
      }, []);

      setUniqueIndustries(uniqueIndustry);

    } catch (error) {
      console.log(error);
    }
  };

  const handleNumberClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
  };

  const handleIndustryChange = (e) => {
    const selectedIndustry = e.target.value;
    setselectedIndustry(selectedIndustry);
  };

  useEffect(() => {
    fetchPosts();
  }, [acfSearch, acfIndustry, page]);

  return (
    <div className="alu-height">
      <Container fluid className="mb-5">
        <Row>
          <Col>
            <Form className="px-4 m-tm-none">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleIndustryChange}
              >
                <option value="">All</option>
                {uniqueIndustry.map((industry, index) => (
                  <option key={index} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </Form>
          </Col>
          <Col>
            <Form className="px-4 m-tm-none">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleCategoryChange}
              >
                <option value="">All</option>
                {uniqueCities.map((city, index) => (
                  <option key={index} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </Form>
          </Col>
          <Col>
            <Form className="px-4 m-tm-none" onSubmit={(e) => e.preventDefault()}>
              <InputGroup className="">
                <Form.Control
                  type="text"
                  placeholder="Name...."
                  aria-label="Name...."
                  aria-describedby="basic-addon2"
                  className="search"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5 height">
        {val ? (
          <Row>
            {movies.map((post, index) => (
              <Col lg={4} key={index}>
                <div className="card mb-3 profiles">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <Image
                        src={ 
                          post['_embedded']['wp:featuredmedia'][0]['source_url'] ?
                          post['_embedded']['wp:featuredmedia'][0]['source_url'] : ''

                        }
                        className="profile-img img-fluid rounded-start"
                        alt="..."
                        width={150}
                        height={150}
                      />
                      <Container className="mt-3 info">
                        <p className="fw-bold text-white fs-6">{post['acf']['business_category']}</p>
                        <Row className="sharerow">
                          <Col><Link href={`/walmart_graduates/${post['slug']}`} className="btn know">Know More</Link></Col>
                          <Col>{post['acf']['visit_the_website'] ? <Link href={post['acf']['visit_the_website']} className="btn know" target="_blank">Visit the website</Link> : ''}</Col>
                        </Row>
                      </Container>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                      <h4 className="profile-title bogle-medium fs-5">{post['title']['rendered']}</h4>
                        <p className="card-text fs-6">{post['acf']['company_name_&_place']}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <Row className="col-51">
            {profile.map((post, index) => (
              <Col lg={4} key={index}>
                <div className="card mb-3 ">
                  <div className="container profile">
                    <div className="row g-0">
                      <div className="col-md-4 m-center">
                        <Image
                          src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                          className="profile-img img-fluid rounded-start"
                          alt="..."
                          width={150}
                          height={150}
                        />
                        <Container className="mt-3 info">
                          <p className="fw-bold text-white fs-6">{post['acf']['business_category']}</p>
                          <Row className="sharerow">
                            <Col><Link href={`/walmart_graduates/${post['slug']}`} className="btn know">Know More</Link></Col>
                            {post['acf']['visit_the_website'] ? 
                            <Col>
                              <Link href={post['acf']['visit_the_website']} className="btn know" target="_blank">Visit the website</Link> 
                            </Col>: ''}
                          </Row>
                        </Container>
                      </div>
                      <div className="col-md-8 m-center">
                        <div className="card-body">
                          <h4 className="profile-title bogle-medium fs-5">{post['title']['rendered']}</h4>
                          <p className="card-text fs-6">{post['acf']['company_name_&_place']}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}

        {hide ? (
          <Container>
            No profile found
          </Container>
        ) : (
          <>
  <div className="d-flex justify-content-center mt-3">
  <div className="btn-group" role="group" aria-label="Basic example">
    {[...Array(totalPages)].map((_, index) => (
      <Button
        key={index}
        onClick={() => handleNumberClick(index + 1)}
        variant={page === index + 1 ? 'primary' : 'secondary'}
      >
        {index + 1}
      </Button>
    ))}
  </div>
</div>
          </>
        )}
      </Container>
      <Container>
<p className="fs-4 pb-5"><b className="bogle-medium">Disclaimer:</b> Information regarding profiles has been voluntarily shared by MSMEs who are responsible for the accuracy of data. In case of changes or edits required on any profile, MSMEs can reach out to us at <b className="bogle-medium">contactus@walmartvriddhi.org</b></p>

      </Container>
    </div>
  );
};

export default SuccessStories;
