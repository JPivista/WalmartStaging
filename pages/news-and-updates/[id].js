import React, { useEffect, useState} from 'react'
import Header from '../../components/Header';
import Brand from '../../components/BrandLogo';
import Footer from '../../components/Footer';
import {Col,Container, Row, Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../../config.json";
import { NextSeo } from 'next-seo';
import NewsLetter from '../../components/NewsLetter'
import Floating from '../../components/FloatingMenu'
import Popups from '../../components/PopUps'

const post = ({data}) => {
//   console.log(data);
  return (
<div>
<Header/>   
<div className='grid grid-cols-3 gap-5 w-full'>
{
          data.map((post) => {
             // console.log(post);
            const [string, setString] = useState(
                post['excerpt']['rendered']
            );
            useEffect(() => {
              const regex = /(<([^>]+)>)/gi;
              const newString = string.replace(regex, "");
              setString(newString);
            }, []);

return (
<div key={post.id}>
    <NextSeo
      noindex={false}
      nofollow={false}
      title={post['title']['rendered']}
      description={string} 
      canonical="https://www.canonical.ie/"
      openGraph={{
        url: 'https://www.url.ie/a',
        title: post['title']['rendered'],
        description: string,
        images: [
          {
            url: post['_embedded']['wp:featuredmedia'][0]['source_url'],
            width: 800,
            height: 600,
            alt: string,
            type: 'image/jpeg',
          },
          {
            url: post['_embedded']['wp:featuredmedia'][0]['source_url'],
            width: 900,
            height: 800,
            alt: string,
            type: 'image/jpeg',
          },
          { url: post['_embedded']['wp:featuredmedia'][0]['source_url'] },
          { url: post['_embedded']['wp:featuredmedia'][0]['source_url'] },
        ],
        siteName: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />   
        <Container fluid key={post.id} className="success_post d-flex align-items-end wbg-main" style={{ backgroundImage: `url(${post['acf']['inside_banner']})`,backgroundSize:'contain' }}>
        <Container className="py-4 wbg-main">
                <h1 className="text-white fs-2" dangerouslySetInnerHTML={{__html:post['title']['rendered']}}></h1>
                </Container>
</Container>
<Brand />
<Container className="pt-4">
<Row>
                <Col>
                <div dangerouslySetInnerHTML={{__html:post['content']['rendered']}} className="fs-4"></div>  
                </Col>
</Row>        
            </Container>
</div>
)

})}

      </div>
      <Popups/>
            <Floating/> 
            <NewsLetter/>
          <Footer/>
      </div>
      
  )
  
}

export default post




export async function getServerSideProps(context){
  const {id} = context.params;
  const res = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${id}`);
  const data = await res.json();
  console.log(data)
    return {props:{data}}
    
    
    
    }
