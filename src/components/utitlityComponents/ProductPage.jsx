import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";

const ProductPage = ({ productsData }) => {
  const Top10Products = productsData?.slice(0, 10);

  
  const [isHovered, setIsHovered] = useState(false);
  // console.log(isHovered)
  const CustomPrevArrow = (props) => (
    <div
      onClick={props.onClick}
      className={`absolute top-[50%] left-0 z-10  hover:bg-gray-400 bg-gray-300 p-3 rounded-full cursor-pointer  ${
        isHovered ? "visible" : "invisible"
      }`}
    >
      <GrPrevious />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      onClick={props.onClick}
      className={`absolute hover:bg-gray-400 z-10 top-[50%] right-0 bg-gray-300 p-3 rounded-full cursor-pointer  ${
        isHovered ? "visible" : "invisible"
      }`}
    >
      <GrNext />
    </div>
  );

  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      // arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
          },
        },
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
    }),
    [isHovered]
  );

  return (
    <div className="" onMouseEnter={() => {setIsHovered(true)}}
    onMouseLeave={() => setIsHovered(false)}>
      <Slider
      {...settings}
      className="relative  hover:cursor-pointer  overflow-hidden"
      
    >
      {Top10Products?.map((product, index) => (
        <div
          key={index}
          className="p-2 "
          // onMouseEnter={()=>console.log("Hovered")}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ProductPage;
