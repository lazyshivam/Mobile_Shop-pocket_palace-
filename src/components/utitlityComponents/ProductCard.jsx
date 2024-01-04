import { IoIosExpand } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import ProductDetailsPopup from "./ProductDetailsPopup";
const ProductCard = ({product}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

   const {images,type,brand,model,price}=product;
   const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
    {/* <div className=""> */}
    <ProductDetailsPopup product={product} isPopupOpen={isPopupOpen} onClose={closePopup} />
    {/* </div> */}
         
     
      <div className="max-w-xs  bg-white rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          
          src={`data:${images[1].contentType};base64,${images[0].data}`}
          alt="Apple iPhone 13"
        />
        <div className="px-6 py-2">
          <hr className="pb-2" />
          <div className="font-bold text-lg text-teal-400 mb-2">
            {model}
          </div>
          <p className="text-gray-500 text-base">{type}</p>
          <p className="text-gray-500 text-base">
            Brand: <span className="font-bold">{brand}</span>
          </p>
          <p className="text-gray-900 font-bold text-xl">${price}.00</p>
        </div>
        <div className="px-6 flex justify-between flex-nowrap pt-4 pb-3">
          <button className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white ">
            {" "}
            Add To Cart
          </button>
          <button onClick={openPopup} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-md font-semibold text-gray-700">
            <IoIosExpand />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
