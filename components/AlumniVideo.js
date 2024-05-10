import React, { useState, useEffect } from 'react';
import configData from "../config.json";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from 'next/image'
import { Card, Button, Col, Row, Modal } from 'react-bootstrap';

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
      loop: true,
      margin: 10,
      nav: true,
    dots: false,
      //stagePadding: 50,
      //stageOuterClass:'owl-stage-outer',
      navText: [
        '<span class="left"><</span>',
        '<span class="right">></span>'
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 2
      }
    }
  };

function AlumniCarousel() {

    //const pathname = usePathname()
    const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [isOpen, setOpen] = useState(false)
const handleClose = () => setProduct(false);
const [currentProduct, setProduct] = useState(null);
const [currentUrl, setUrl] = useState(null);
const [currentTitle, setTitle] = useState(null);

    const fetchMovies = async () => {
        let url = "";
        const urlPage = `${page}`;
        //console.log(urlPage)
        //url = query ? `${API_ENDPOINT}${urlPage}${urlQuery}` : "";
        //url = `${configData.SERVER_URL}posts?_embed&categories[]=12&status[]=publish&per_page=${urlPage}`;
      url = `${configData.SERVER_URL}msme_speaks?_embed&status[]=publish&production[]=${configData.SERVER}&per_page=${urlPage}`;//Staging Enviroment
      //url = `${configData.SERVER_URL}msme_speaks?_embed&status[]=publish&production[]=77&per_page=${urlPage}`;//Live Enviroment
    
        try {
          const response = await fetch(url);
          const data = await response.json();
          //console.log(data);
          setMovies(data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        fetchMovies();
      }, []);


    return (
      <>
        <Modal show={currentProduct} onHide={handleClose}
                  closeTimeoutMS={300}
                  isOpen={Boolean(currentProduct)}
                  onRequestClose={() => setProduct(null)}
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title dangerouslySetInnerHTML={{ __html: currentTitle }} />
                  </Modal.Header>
                  <Modal.Body>
                    <iframe width="100%" height="400" src={currentUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe></Modal.Body>
                </Modal>
        <OwlCarousel  
                    nav
          // className="owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          {...options}
          className="owl-theme owl-loaded hie"
          navContainerClass="video-nav owl-nav"
            >
                
                {
            movies.map((post, index) => {
            //console.log(post);
                return ( 
                
       
                    <div class="item" key={post.id}>
                     
                    <Image
                        alt={post['title']['rendered']}
                        src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
                        className="w-100 h-100 cursor"
                        width={360}
                        height={360}
                      
                      onClick={() => {
                        setProduct(post.id)
                        setUrl(post['acf']['video_url'])
                        setTitle(post['title']['rendered'])
                      }}
            />
                  
                  </div>
                )
            
            
            })
        
        }
</OwlCarousel>
            </> 
  )
}
export default AlumniCarousel
