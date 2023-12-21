import React, { useState, useEffect } from "react";

const MobilePage = ({ mobileInfo }) => {
  const { image, title, discount, price } = mobileInfo;

  return (
    <div className="flex-shrink-0 w-screen p-8">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-2">{discount}</p>
          <p className="mb-6 text-gray-500">{price}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded mr-4">
            Buy Now
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded">
            Learn More
          </button>
        </div>
        <div className="w-1/2 text-right">
          <img src={image} alt={title} className="h-64" />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const mobiles = [
    {
      title: "Mobile 1",
      image: "/path-to-mobile-1-image",
      discount: "50% off orders above $999.00",
      price: "From $999.00 or $41.62/mo per month",
    },
    {
        title: "Mobile 2",
        image: "/path-to-mobile-1-image",
        discount: "50% off orders above $999.00",
        price: "From $999.00 or $41.62/mo per month",
      },
      {
        title: "Mobile 3",
        image: "/path-to-mobile-1-image",
        discount: "50% off orders above $999.00",
        price: "From $999.00 or $41.62/mo per month",
      },
    // Add more mobile entries as needed
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % mobiles.length);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + mobiles.length) % mobiles.length);
  };

  useEffect(() => {
    const interval = setInterval(nextPage, 5000); // Change page every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex overflow-x-auto">
      <MobilePage mobileInfo={mobiles[currentPage]} />
      <button onClick={prevPage} className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded">
        Previous
      </button>
      <button onClick={nextPage} className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded">
        Next
      </button>
    </div>
  );
};

export default Home;
