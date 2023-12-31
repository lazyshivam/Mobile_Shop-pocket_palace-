import React, { useState, useEffect } from "react";

import LandingPage from "./utitlityComponents/LandingPage";
import ProductPage from "./utitlityComponents/ProductPage";
import ServicesGrid from "./ServicesGrid";
import BlogCard from "./utitlityComponents/BlogCard";
import Company from "./Company";
import CompanyLogoSlider from "./CompanyLogoSlider";
import { useGetAllProductsQuery } from "../services/api";
import Slider from "react-slick";

const Home = () => {
  const { data: productsData, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div className="text-center text-2xl h-screen">Loading...</div>;
  }

  console.log(productsData);
  return (
    <>
      <LandingPage />

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
          <ProductPage productsData={productsData} />
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
          <ProductPage productsData={productsData} />
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
          <ProductPage productsData={productsData} />
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
