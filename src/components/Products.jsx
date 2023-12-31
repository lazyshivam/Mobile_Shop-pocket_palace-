import React, { useEffect, useState } from "react";
import ProductCard from "./utitlityComponents/ProductCard";
import Filter from "./utitlityComponents/Filter";
import { IoFilterOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useGetAllProductsQuery } from "../services/api";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { data: ProductsData, error, isLoading } = useGetAllProductsQuery();

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
     if(!isLoading){
      setFilteredProducts(ProductsData);
     }
  },[isLoading,ProductsData])
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const [showFilter, setShowFilter] = useState(false);

  if (isLoading) {
    return <div className="text-center h-screen">Loading...</div>;
  }

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
            {showFilter ? <RxCross1 /> : <IoFilterOutline />}
          </button>
        </div>

        {showFilter && (
          <div className="w-96 absolute left-0 top-20">
            <Filter />
          </div>
        )}
      </div>
      {/* Product Display */}
      <div className="flex md:space-x-4 mt-20 justify-center flex-col md:flex-row flex-1">
        {/* Search Form for Medium and Large Devices */}
        <div className={`hidden md:block  `}>
          {/* ... (rest of the existing code for the filter form) ... */}
          <Filter setFilteredProducts={setFilteredProducts} Products={ProductsData} />
        </div>
        <div className="w-full md:w-3/4">
          <div className="flex justify-center">
            <div className="grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="my-4 flex justify-between">
            {/* Previous Page Button */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="mx-2 p-3  bg-gray-300 text-white rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-400"
            >
              <GrPrevious />
            </button>

            {/* Next Page Button */}
            <button
              onClick={handleNextPage}
              disabled={indexOfLastProduct >= filteredProducts?.length}
              className="mx-2 p-3 bg-gray-300 text-white rounded-full hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-400"
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
