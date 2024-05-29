import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import { Container, Button, Form, Nav, Navbar, Offcanvas, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import configData from "../config.json";
import useDebounce from "../components/useDebounce";
import { FaSistrix } from 'react-icons/fa';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const SuccessStories = () => {
  const pathname = usePathname();
  const [showLogo, setShowLogo] = useState(true);
  const [val, setVal] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (val.trim()) {
      router.push(`/search?query=${val.trim()}`);
    }
  };

  useEffect(() => {
    if (pathname === '/marketplace') {
      setShowLogo(false);
    }
  }, [pathname]);

  return (
    <div>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-0 overflow-hidden">
          <Container fluid>
            <Link href="/">
              <Navbar.Brand>
                {showLogo ? (
                  <Image
                    src='/images/Walmart-Vriddhi-logo.svg'
                    alt="walmart Vriddhi"
                    width={400}
                    height={90}
                    className="logo-img"
                  />
                ) : (
                  <div style={{ height: '60px' }}></div>
                )}
              </Navbar.Brand>
            </Link>

            <Nav className="ms-auto d-lg-flex flex-row flex-nowrap d-none">
              <div className="d-flex flex-lg-row flex-column gap-lg-0 gap-2">
                <Link href="/register-with-walmartvriddhi">
                  <Button className="rounded-5 py-2 mx-4 border-0" style={{ background: '#78BE21' }}>
                    Register for Walmart Vriddhi
                  </Button>
                </Link>

                <Link href="/register-with-walmart-marketplace">
                  <Button className="rounded-5 py-2 mx-4 border-0" style={{ background: '#FFC221' }}>
                    Register for Walmart Marketplace
                  </Button>
                </Link>
              </div>
              <Form className="px-4 m-tm-none" onSubmit={handleSearch}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search...."
                    aria-label="Search...."
                    aria-describedby="basic-addon2"
                    className="search"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                  />
                  <Button variant="outline-secondary" id="button-addon2" className="src-button" type="submit">
                    <FaSistrix size={25} />
                  </Button>
                </InputGroup>
              </Form>
            </Nav>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="text-white"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body className="fs-5 bogle-medium p-0">
                <Nav className="justify-content-end flex-grow-1">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/about-us" className={pathname == "/about-us" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">About us</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/msme-growth-journey" className={pathname == "/msme-growth-journey" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">MSME growth journey</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/success-stories" className={pathname == "/success-stories" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">Success Stories</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/alumni-profiles" className={pathname == "/alumni-profiles" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">Alumni Profiles</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/webinars" className={pathname == "/webinars" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">Webinars</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/newsroom" className={pathname == "/newsroom" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">Newsroom</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/marketplace" className={pathname == "/marketplace" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">Walmart Marketplace</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/walmart-vriddhi-msme-summit-2024" className={pathname == "/walmart-vriddhi-msme-summit-2024" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">MSME Summit 2024</Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/contact-us" className={pathname == "/contact-us" ? "active nav-link px-5" : "nav-link px-5"} aria-current="page">Contact us</Link>
                    </li>
                  </ul>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Nav className="d-flex flex-row flex-nowrap d-lg-none">
              <div className="d-flex flex-lg-row flex-column gap-lg-0 gap-2">
                <Link href="/register-with-walmartvriddhi">
                  <Button className="rounded-5 py-2 mx-4 border-0 w-100" style={{ background: '#78BE21' }}>
                    Register for Walmart Vriddhi
                  </Button>
                </Link>

                <Link href="/register-with-walmart-marketplace">
                  <Button className="rounded-5 py-2 mx-4 border-0 w-100" style={{ background: '#FFC221' }}>
                    Register for Walmart Marketplace
                  </Button>
                </Link>
              </div>
              <Form className="px-4 m-tm-none" onSubmit={handleSearch}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search...."
                    aria-label="Search...."
                    aria-describedby="basic-addon2"
                    className="search"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                  />
                  <Button variant="outline-secondary" id="button-addon2" className="src-button" type="submit">
                    <FaSistrix size={25} />
                  </Button>
                </InputGroup>
              </Form>
            </Nav>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default SuccessStories;
