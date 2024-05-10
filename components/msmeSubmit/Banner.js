import React, { useState, useEffect } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Link from 'next/link'
import { usePathname } from "next/navigation";

function Banner() {
  const pathname = usePathname()
  const [url, setUrl] = useState(true)
  
  useEffect(() => {
    if (pathname === '/walmart-vriddhi-msme-summit-2024') {
      setUrl(false);
    }
  }, [pathname]);


  return (
    <>
      {url ? (
<Link href="/walmart-vriddhi-msme-summit-2024" >
          <Image src="/images/New-Home-Banner.png" className="w-100 d-sm-none d-lg-block d-xs-none d-none" />
          <Image src="/images/New-Home-Banner-Mobile.png" className="w-100 d-lg-none"/>
        </Link>
      ) : (
          <>
      <Image src="/images/msmeDesktopBanner.png" className="w-100 d-sm-none d-lg-block d-xs-none d-none" />
            <Image src="/images/msme-mobile-banner.png" className="w-100 d-lg-none" />
            
          </>
              )}

      
      {/* <Container
        fluid
        className="text-center position-relative d-flex justify-content-center"
        style={{ 
          backgroundImage: `url("/images/msmeDesktopBanner.png")` ,height:'640px'
        }}
        
      >
        <Image
          src="images/top-corner-image.svg"
          alt="Top Corner Image"
          className="position-absolute top-0 end-0 img-banner z-index"
          
        />
        <Image
          src="images/bottom-corner-image.svg"
          alt="Bottom Corner Image" 
          className="position-absolute bottom-0 start-0 img-banner z-index"
        
        />
        <Row className="d-flex justify-content-center align-items-lg-center">
          <Col lg="6" md={8} className="d-flex align-items-center justify-content-center">
            <Row className="d-flex flex-column">
              <Col style={{ marginBottom: '33' }} className="m-height">
                <h2 className="bogle-medium b-font text-white text-center mobile-padding">
              Celebrating today,<br/>building tomorrow
                </h2></Col>
  
              {url ? (
              <Col className="mt-5"><Link href="/walmart-vriddhi-msme-summit-2024" className="w-orange fs-5">Know more</Link></Col>

              ) :''}
              
            </Row>
          </Col>
          <Col lg="6" md={4}
            className="d-flex justify-content-center"
          >
            <Image
              src="/images/msme.png"
              alt="msme Image"
              className="img-fluid h-100 z-index"
            />
          </Col>
        </Row> 
      </Container>*/}
     
    </>
  );
}

export default Banner;
