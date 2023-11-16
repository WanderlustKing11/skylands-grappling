import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useMediaQuery } from "usehooks-ts";

import bjj_one from "../../resources/images/bjj_one.jpg";
import bjj_two from "../../resources/images/bjj_two.jpg";
import bjj_three from "../../resources/images/bjj_three.jpg";

const Carousel: React.FC = () => {
  // Props from Slick, settings for the Slider
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2800,
  };

  // Mobile Friendly
  const matches = useMediaQuery("(max-width: 767px)");

  return (
    <div
      className='carousel_wrapper'
      style={{
        height: `${window.innerHeight}px`,
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className='carousel_image'
            id='img_1'
            style={{
              background: `url(${bjj_one})`,
              height: `${window.innerHeight}px`,
              backgroundPositionX: `${matches ? "-34rem" : "null"}`
            }}
          ></div>
        </div>
        <div>
          <div
            className='carousel_image'
            style={{
              background: `url(${bjj_two})`,
              height: `${window.innerHeight}px`,
              backgroundPositionX: `${matches ? "-7rem" : "null"}`,
              backgroundPositionY: `${matches ? "null" : "-15rem"}`
            }}
          ></div>
        </div>
        <div>
          <div
            className='carousel_image'
            style={{
              background: `url(${bjj_three})`,
              height: `${window.innerHeight}px`,
              backgroundPositionX: `${matches ? "-34rem" : "null"}`
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
