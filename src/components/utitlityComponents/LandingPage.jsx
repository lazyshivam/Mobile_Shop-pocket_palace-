import Slider from "react-slick";
import image1 from "../../assets/Main-banner-1-1903x580.jpg";
import image2 from "../../assets/Main-banner-2-1903x580.jpg";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";

const LandingPage = () => {
  // const { title, discount, price } = PageInfo;
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
      className={`absolute top-[50%] hover:bg-gray-300 ${
        isHovered ? "visible" : "invisible"
      } left-5 bg-gray-200 p-3 rounded-full cursor-pointer z-10`}
    >
      {/* Your custom prev arrow content */}
      <GrPrevious />
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      onClick={props.onClick}
      className={`absolute  top-[50%] hover:bg-gray-300 ${
        isHovered ? "visible" : "invisible"
      } right-5 bg-gray-200 p-3 rounded-full cursor-pointer z-10`}
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
      <div className="p-0 inline-block ">
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`dot inline-block   ${
              index === currentPage ? "active text-blue-500" : "text-gray-200"
            }`}
          >
            {dot}
          </div>
        ))}
      </div>
    ),
    customPaging: () => <FaCircle />,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className=""
    >
      <Slider
        {...settings}
        className="relative hover:cursor-pointer flex flex-col md:flex-row md:h-[333px]"
      >
        {mobiles.map((items, index) => (
          <div key={index} className="">
            <div
              className="flex-shrink-0 w-full  p-4 md:p-8 flex flex-col md:flex-row md:items-center justify-between"
              style={{
                backgroundImage: `url(${items.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-72  border  md:w-1/2 md:bg-white p-4 md:p-8 rounded-lg">
                <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                  {items.title}
                </h1>
                <p className="text-sm hidden md:flex md:text-xl mb-2">
                  {items.discount}
                </p>
                <p className="mb-4 md:mb-6 md:flex hidden text-gray-500">
                  {items.price}
                </p>
                <div className="flex flex-col  md:flex-row gap-2">
                  <button className="bg-blue-500  text-white px-2 md:px-6 py-2 rounded mb-2 md:mb-0">
                    Buy Now
                  </button>
                  <button className="border border-blue-500 text-blue-500 px-2 md:px-6 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LandingPage;
