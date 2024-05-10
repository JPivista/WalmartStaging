import React from 'react';
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    loop: true,
    margin: 10,
    nav: false,
      dots:false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

function AlumniCarousel() {

  return (
<OwlCarousel
          // className="owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          {...options}
          className="pt-4 pb-4"
        >
          <div class="item">
            <img
              alt="img1"
              src="/images/chetanya_program.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/program_2.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/spi_program.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/shakti_program.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/shatakshee_program.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/spi_program.png"
              className="partners"
            />
            
          </div>
          
        </OwlCarousel>
  )
}

export default AlumniCarousel
