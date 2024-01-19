import React, { useState, useMemo } from "react";
import Modal from "react-modal";

import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";

const ProductDetailsPopup = ({ product, onClose, isPopupOpen }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const [isHovered, setIsHovered] = useState(false);
  // console.log(isHovered);
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

  const settings1 = useMemo(
    () => ({
      dots: false,
      infinite: true,
     
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      // responsive: [
      //   {
      //     breakpoint: 1300,
      //     settings: {
      //       slidesToShow: 1,
      //     },
      //   },
      // ],
    }),
    [isHovered]
  );

  return (
    <Modal
      isOpen={isPopupOpen} // Set to true to make the modal visible
      onRequestClose={onClose}
      contentLabel="Product Details Modal"
      className="fixed w-4/6 h-fit   max-h-[633px] inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 overflow-auto md:overflow-hidden min-w-md rounded-md"
      overlayClassName="fixed inset-0 z-20 bg-black bg-opacity-50"
    >
      <button
        className="absolute top-2 right-2 p-2 rounded-lg hover:bg-teal-600 bg-teal-500 text-gray-100"
        onClick={onClose}
      >
        Close
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Image Gallery */}
        <div className="flex-shrink-0 flex md:flex-col flex-row md:w-1/3 ">
          <img
            src={`data:${product.images[0].contentType};base64,${product.images[0].data}`}
            alt={product.model}
            className="w-full hover:cursor-pointer transition hover:scale-150 z-50 hover:ease-in-out  h-auto mb-4"
          />

          <div className="">
            <Slider {...settings1} className="relative ">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={`data:${image.contentType};base64,${image.data}`}
                  alt={`Thumbnail ${index}`}
                  className="w-full  hover:h-full  mb-2 hover:cursor-pointer transition hover:scale-150 z-50 hover:ease-in-out"
                />
              ))}
            </Slider>
          </div>
        </div>

        {/* Product Details */}
        <div className="ml-4 flex-1">
          <h2 className="text-2xl font-bold mb-4">{product.model}</h2>

          <p className="text-gray-700 mb-4">{product.specifications}</p>

          <div className="mb-4">
            <strong>Price:</strong> ${product.price}
          </div>

          <div className="mb-4">
            <strong>Memory:</strong> {product.memory}
          </div>

          <div className="mb-4">
            <strong>Processor:</strong> {product.processor}
          </div>

          <div className="mb-4">
            <strong>Release Date:</strong>{" "}
            {new Date(product.releaseDate).toLocaleDateString()}
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-2 mb-4">
            <button
              onClick={handleDecrement}
              className="px-2 w-7 py-1 bg-gray-300 hover:bg-gray-400  rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrement}
              className="px-2 w-7 py-1 bg-gray-300 hover:bg-gray-400 rounded"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4">
            Add to Cart
          </button>

          {/* Additional Product Information */}
          <div className="text-sm text-gray-500">
            <p>
              Note: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam lacinia quam id lectus finibus, in congue dolor tincidunt.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDetailsPopup;
