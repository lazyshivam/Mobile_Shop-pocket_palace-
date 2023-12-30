import React, { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import image1 from "../assets/Main-banner-1-1903x580.jpg";
import image2 from "../assets/Main-banner-2-1903x580.jpg";
import LandingPage from "./utitlityComponents/LandingPage";
import ProductPage from "./utitlityComponents/ProductPage";
import ServicesGrid from "./ServicesGrid";
import BlogCard from "./utitlityComponents/BlogCard";
import Company from "./Company";
import CompanyLogoSlider from "./CompanyLogoSlider";
import { useGetAllProductsQuery } from "../services/api";
import Slider from "react-slick";

const Home = () => {
  const { data: mobilesData, error, isLoading } = useGetAllProductsQuery();

  const mobiles = [
    {
      title: "Galaxy S13+ Ultra.",
      image: image1,
      discount: "50% off orders above $999.00",
      price: "From $999.00 or $41.62/mo per month",
    },
    {
      title: "Electronic Essentials",
      image: image2,
      discount: "50% off order above $999.00",
      price: "From $999.00 or $41.62/mo per month",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const CustomPrevArrow = (props) => (
    <div
      onClick={props.onClick}
      className="absolute  top-36 left-5 bg-gray-300 p-3 rounded-full cursor-pointer z-10"
    >
      {/* Your custom prev arrow content */}
      <GrPrevious />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      onClick={props.onClick}
      className="absolute top-36 right-5 bg-gray-300 p-3 rounded-full cursor-pointer z-10"
    >
      {/* Your custom next arrow content */}
      <GrNext />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Set slidesToShow to the number of logos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
    arrows: true,
    beforeChange: (next) => setCurrentPage(next),
    appendDots: (dots) => (
      <ul className="p-0 flex justify-center">
        {dots.map((dot, index) => (
          <li
            key={index}
            className={`dot ${
              index === currentPage ? "active text-blue-500" : "text-gray-200"
            }`}
          >
            {dot}
          </li>
        ))}
      </ul>
    ),
    customPaging: () => <FaCircle />,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  if (isLoading) {
    return <div className="text-center text-2xl h-screen">Loading...</div>;
  }

  console.log(mobilesData);
  return (
    <>
      <Slider
        {...settings}
        className="relative flex flex-col md:flex-row md:h-[333px]"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        {mobiles?.map((items, index) => (
          <div key={index} className="">
            <LandingPage PageInfo={items} />
          </div>
        ))}
      </Slider>

      <div className="container mx-auto p-6 md:p-12 ">
        <div className=" bg-gray-200  p-8 rounded-md">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">Our Products</h1>
            {/* Link to navigate to the all products page */}
            <a
              to="/all-products"
              className="text-blue-500 hover:cursor-pointer hover:underline"
            >
              View All Products
            </a>
          </div>
          <hr className="bg-gray-400 p-[0.5px] mb-12 mt-2" />
          <ProductPage />
        </div>
      </div>

      <div className="container mx-auto p-6 md:p-12 ">
        <div className=" bg-gray-200  p-8 rounded-md">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">Our Best Selling Products</h1>
            {/* Link to navigate to the all products page */}
            <a
              to="/all-products"
              className="text-blue-500 hover:cursor-pointer hover:underline"
            >
              View All Products
            </a>
          </div>
          <hr className="bg-gray-400 p-[0.5px] mb-12 mt-2" />
          <ProductPage />
        </div>
      </div>

      <div className="container mx-auto p-6 md:p-12 ">
        <div className=" bg-gray-200  p-8 rounded-md">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">Our New Products</h1>
            {/* Link to navigate to the all products page */}
            <a
              to="/all-products"
              className="text-blue-500 hover:cursor-pointer hover:underline"
            >
              View All Products
            </a>
          </div>
          <hr className="bg-gray-400 p-[0.5px] mb-12 mt-2" />
          <ProductPage />
        </div>
      </div>
      <div className="p-2 my-12  bg-gray-200">
        <ServicesGrid />
      </div>
      <div className="container mx-auto p-6 md:p-12 ">
        <div className=" p-8 rounded-md">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">From the Blogs</h1>
            {/* Link to navigate to the all products page */}
            <a
              href="/all-products"
              className="text-blue-500 hover:cursor-pointer hover:underline"
            >
              View Our Blogs
            </a>
          </div>
          <hr className="bg-gray-400 p-[0.5px] mb-12 mt-2" />
          {
            <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((items, index) => (
                <div key={index} className="">
                  <BlogCard />
                </div>
              ))}
            </div>
          }
        </div>
      </div>

      <div className="my-6  bg-white">
        <hr className="bg-gray-200 p-[0.5px] " />
        <CompanyLogoSlider />
      </div>
    </>
  );
};

export default Home;
