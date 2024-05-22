import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Brand from '../components/BrandLogo';
import Footer from '../components/Footer';
import configData from "../config.json";
import { NextSeo } from 'next-seo';
import date from 'date-and-time';
import News from '../utils/fetchNews'
import Banner from '../components/msmeSubmit/Banner'
import Submit from '../components/msmeSubmit/Summit2024'
import SubmitHight from '../components/msmeSubmit/SummitHighlights'
import Flipkart from '../components/msmeSubmit/InteractiveFlipkart'
import Gallery from '../components/msmeSubmit/MsmeGallery'
import Register from '../components/msmeSubmit/Register'
function Summit() {

  const title = "Walmart Vriddhi MSME Summit 2024: Unlocking Success with MSME Growth Program Benefits";
  const desc = "Join us to discover unparalleled opportunities at the Walmart Vriddhi MSME Summit 2024. Unleash the potential of your business with insights from MSME growth program.";
  const banner = '/images/msme.png';
  const url = 'https://www.walmartvriddhi.org/walmart-vriddhi-msme-summit-2024';

  return (
    <>
      <NextSeo
        noindex={false}
        nofollow={false}
        title={title}
        description={desc}
        canonical={url}
        openGraph={{
          url: url,
          title: title,
          description: desc,
          images: [
            {
              url: banner,
              width: 800,
              height: 600,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            {
              url: banner,
              width: 900,
              height: 800,
              alt: 'Walmart Vridhi',
              type: 'image/jpeg',
            },
            { url: banner },
            { url: banner },
          ],
          siteName: title,
          keywords: ['Walmart Vriddhi MSME Summit 2024', 'MSME growth program benefits', 'MSME growth mentors', 'MSME growth journey program in India', 'supplier development program'],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <Banner />
      <Brand />
      <Submit />
      <SubmitHight />
      <Flipkart />
      <Gallery />
      <Register />
      <Footer />
    </>
  )
}

export default Summit
