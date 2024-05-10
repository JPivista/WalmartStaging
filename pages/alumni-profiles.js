import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';

import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Carousel from '../components/AlumniCarousel'
import Video from '../components/AlumniVideo'
import News from '../components/AlumniNew'
import Share from '../components/AlumniShare';
import Profile from'../components/AlumniProfile';
import NewsLetter from '../components/NewsLetter'
import Floating from'../components/FloatingMenu';
import Popups from '../components/PopUps';

const alumniProfiles = () => {
  const pathname = usePathname()
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [next, setNext] = useState();
  const [total, setTotal] = useState();
  const [end, setEnd] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const title = "Business Owner Training, Business Owner Training Programs, Sell Products Online in India";
  const desc = "The MSME spotlight and industry connect series is a collection of webinars that define Walmart Vriddhi’s MSME business training programs Learn more about these webinars here";
  const banner = '/images/alumni_profile_banner.png';
  const url = 'https://www.walmartvriddhi.org/alumni-profiles/'; 


  const fetchMovies = async () => {
    setLoading(true);
    let url = "";
    const urlPage = `${page}`;
    url = `${configData.SERVER_URL}msme_speaks?_embed&production[]=${configData.SERVER}&status[]=publish&per_page=${urlPage}`; //Staging Enviroment
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNos = async () => {
    setLoading(true);
    let cat = "";
    cat = `${configData.SERVER_URL}categories/12`;

    try {
      const response = await fetch(cat);
      const cats = await response.json();
      //console.log(cats);
      setNext(cats);
      setLoading(false);

    } catch (error) {
      console.log(error);
    }
  };




  useEffect(() => {
    fetchMovies();
    fetchNos();
  }, [page], [next]);


  const loadMore = () => {
    setTotal(next.count)
    //console.log(total)
    const main = next.count;

    if (total == page) {
      setEnd(false);
    }

    setPage((oldPage) => {
      return oldPage + 2;
    })
  };




  return (
      <>
      <NextSeo
        noindex={true}
        nofollow={true}
      title={title}
      description={desc}
        canonical={pathname}
        openGraph={{
          url: pathname,
          title: title,
          description: desc,
          images: [
            {
              url:banner,
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url:banner,
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: banner },
            { url: banner },
          ],
          siteName: title,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
          />
          <Header />
          <Image
        src={banner}
        width="900"
        height="620"
        background='no-repeat'
        background-size='cover'
        className="banner-img w-100 h-auto"
        
      />
<Brand />
<Container className="text-center">
<p className="fs-1 bogle-medium " >Walmart Vriddhi Alumni</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<p className="fs-3">
Walmart Vriddhi supplier development program has assisted over 25,000 MSMEs in India to help them enhance their domestic capabilities and participate in the global economy.</p>
      </Container>
      <Container fluid className='wbg-gy pt-5'>
<Container className="text-center">
<p className="fs-1 bogle-medium " >Meet the Walmart Vriddhi Graduates</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<p className="fs-3">
Introducing our graduates who successfully finished the program.</p>    
      </Container> 
      <Container>
<Profile/> 
        </Container>   
        </Container>  
<Container>
</Container>
<Container className="text-center wbg-main" fluid>
<Container className='pt-5'>
<p className="fs-1 bogle-medium text-white" >Program Beneficiaries</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<Carousel/>
</Container>
</Container>
<Container className="text-center pt-5">
<p className="fs-1 bogle-medium walmart-default" >MSME Speaks</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<p className="fs-4">Hear from our graduates about their experience of the Walmart Vriddhi program and how it benefitted them.</p>
<Video/>
</Container> 

<Container fluid className='wbg-gy pt-5 pb-5 mt-5'>
<Container className="text-center">
<p className="fs-1 bogle-medium walmart-default" >Alumni Achievements</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<p className="fs-3">A collection of events that define the journey of Walmart Vriddhi graduates.</p>
</Container>        
<Container>
        <News /></Container>
      </Container> 
<Container className="text-center wbg-main " fluid>
<p className="fs-1 bogle-medium text-white mt-5" >Alumni Corner</p>
<Image src="/images/line-svg-png-1.png" width={100} height={20} alt="Walmart Vriddhi Alumni" />
<Share/>
</Container>        
<Popups/>
<Floating/> 
<NewsLetter/>
 <Footer/>     
      </>
  );
};

export default alumniProfiles;