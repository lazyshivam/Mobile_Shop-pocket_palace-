import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Apple,
  Samsung,
  Panasonic,
  Realme,
  OnePlus,
  Poco,
} from "../assets/company_logo/Logo";

const logos = [Panasonic, Samsung, Apple, Realme, OnePlus, Poco];

const CompanyLogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Set slidesToShow to the number of logos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    arrows: false, 
    responsive: [
       
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="mx-4 my-4 hover:cursor-pointer">
      {logos.map((logo, index) => (
        <div key={index} className="py-6 px-2">
          <img
            src={logo}
            className="h-20 w-auto mx-auto"
            alt={`Company Logo ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CompanyLogoSlider;
