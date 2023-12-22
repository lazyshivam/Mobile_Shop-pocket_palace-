import React, { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import image1 from "../assets/Main-banner-1-1903x580.jpg";
import image2 from "../assets/Main-banner-2-1903x580.jpg";
import LandingPage from "./utitlityComponents/LandingPage";
import ProductPage from "./utitlityComponents/ProductPage";
import ServicesGrid from "./ServicesGrid";

const Home = () => {
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

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % mobiles.length);
  };

  const prevPage = () => {
    setCurrentPage(
      (prevPage) => (prevPage - 1 + mobiles.length) % mobiles.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextPage, 5000); // Change page every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative flex flex-col md:flex-row md:h-[500px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LandingPage PageInfo={mobiles[currentPage]} />
        {isHovered && (
          <>
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-gray-300 hover:bg-gray-400 text-white rounded-full"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 md:p-4 bg-gray-300 hover:bg-gray-400 text-white rounded-full"
            >
              <GrNext />
            </button>
          </>
        )}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          {mobiles.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 md:h-3 md:w-3 bg-gray-400 rounded-full ${
                index === currentPage ? "bg-blue-400" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto p-6 md:p-12 ">
        <div className=" bg-gray-200  p-8 rounded-md">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">Our Products</h1>
            {/* Link to navigate to the all products page */}
            <a to="/all-products" className="text-blue-500 hover:cursor-pointer hover:underline">
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
            <a to="/all-products" className="text-blue-500 hover:cursor-pointer hover:underline">
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
            <a to="/all-products" className="text-blue-500 hover:cursor-pointer hover:underline">
              View All Products
            </a>
          </div>
          <hr className="bg-gray-400 p-[0.5px] mb-12 mt-2" />
          <ProductPage />
        </div>
      </div>
      <div className="py-8">
        <ServicesGrid/>
      </div>
      
    </>
  );
};

export default Home;
