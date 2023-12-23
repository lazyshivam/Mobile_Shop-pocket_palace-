import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { GrNext, GrPrevious } from "react-icons/gr";

import products  from "../../DummyData"


const ProductPage = () => {
  

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + products.length) % products.length
    );
  };

  return (
    <div className="relative  overflow-hidden"
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    
    >
      <div className="flex transition-transform ease-in-out duration-300 transform -translate-x-100">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="flex-shrink-0"
            style={{
              transform: `translateX(${10 * (index - currentSlide)}%)`,
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {isHovered &&(<><button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-gray-300 text-white rounded-full"
      >
        <GrPrevious/>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4  bg-gray-300 text-white rounded-full"
      >
       <GrNext/>
      </button></>)}
    </div>
  );
};

export default ProductPage;