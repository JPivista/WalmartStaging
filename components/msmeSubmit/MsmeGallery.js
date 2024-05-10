import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Link from 'next/link'

function Banner() {

  const Lists = [
  
    { photo: '/images/1.png', name: 'Najma Hashmi', title: 'Director International Trade India SME Forum', desc: 'Najma emphasized the importance of MSMEs as the backbone of the economy and their need for digital transformation, in line with India’s vision to become the third-largest global economy.' },
    { photo: '/images/2.png', name: 'Jason Fremstad', title: 'Senior Vice President, Supplier Development, Walmart', desc: 'Jason highlighted Walmart’s vision for supporting MSMEs nationwide and the impactful contributions made through Walmart Vriddhi, underscoring the expanding Indian economy.' },
    { photo: '/images/3.png', name: 'Rakesh Krishnan', title: 'Vice President and Head of Marketplace, Flipkart', desc: 'Rakesh delivered an engaging session on the transformative power of technology in business through eCommerce, offering invaluable insights for MSMEs looking to leverage digital platforms.' },
    {photo:'/images/4.png',name: 'Sherry Lee Singh',title: 'Senior Director, Walmart Supplier Development, Walmart',desc:'Sherry focused on the significance of inclusion in supplier development. She also spoke about creating eCommerce opportunities for suppliers within Walmart’s supply chain.'  },
    
]


  return (
    <>
<Container className="text-center py-5">
        <h2 className='fs-1 bogle-medium'>Summit Highlights</h2>
            <Image
    src='/images/line-svg-png-1.png'
    alt='walmart vriddhi'
    width={100}
    height={20}
    className='mb-3'/>

        </Container>
      <Container fluid className="text-center position-relative d-flex justify-content-center wbg-blue-m">
        <Image
          src="images/summit-top-corner.svg"
          alt="Top Corner Image"
          className="position-absolute top-0 end-0 img-banner z-index"
          
        />
        <Image
          src="images/summit-bottom-corner.svg"
          alt="Bottom Corner Image" 
          className="position-absolute bottom-0 start-0 img-banner z-index"
          
        />
        

        <Container className="d-flex py-5">
          <Row className="d-flex justify-content-center align-items-center">
            {

          Lists.map((items, index) => { 
            return (
              <Col lg="6" className="d-flex align-items-center" key={index}>
              <div class="card bg-transparent border-0">
                <img src={items.photo} class="card-img-top" alt={items.name} />
                <div class="card-body text-start text-white">
                  <h5 class="card-title walmart-primary fs-3 bogle-medium">{items.name}</h5>
                    <p class="card-text bogle-medium fs-5">{items.title}</p>
                    <p class="card-text fs-5">{items.desc}</p>
                </div>
              </div>      
                        </Col>
            )

            
            
          })
        }



     </Row>
                  </Container>
      </Container>
     
    </>
  );
}

export default Banner;
