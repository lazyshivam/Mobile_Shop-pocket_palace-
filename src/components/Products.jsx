import React, { useState } from "react";
import ProductCard from "./utitlityComponents/ProductCard";
import productsData from "../DummyData";
// import SearchFormComponent from "./utitlityComponents/SearchFormComponent";
import Filter from "./utitlityComponents/Filter";
import { IoFilterOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { GrNext, GrPrevious } from "react-icons/gr";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="min-h-screen relative ">
      {/* Top Section with Background Image and Text */}
      <div className="w-full h-32 bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          Welcome to Our Product Page
        </div>
      </div>
      <div className="absolute top-36 left-12 ">
        <div className="md:hidden mb-4  absolute left-0 top-70">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="p-3  text-2xl hover:cursor-pointer rounded-full bg-gray-200"
          >
            {showFilter ?<RxCross1/> : <IoFilterOutline/>}
          </button>
        </div>

        {showFilter && (
          <div className="rounded-xl border w-96 border-gray-200 bg-white shadow-lg absolute left-0 top-20">
            <Filter />
          </div>
        )}

        
        
      </div>
      {/* Product Display */}
      <div className="flex md:space-x-4 mt-20 justify-center flex-col md:flex-row flex-1">
        {/* Search Form for Medium and Large Devices */}
        <div
          className={`hidden md:block  `}
        >
          {/* ... (rest of the existing code for the filter form) ... */}
          <Filter />
        </div>
        <div className="w-full md:w-3/4">
          <div className="flex justify-center">
            <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            {Array.from(
              { length: Math.ceil(filteredProducts.length / productsPerPage) },
              (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                  {index + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
