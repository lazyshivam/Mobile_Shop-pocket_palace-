import { IoIosExpand } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";

const ProductCard = () => {
    return (
      <div className="max-w-72 bg-white rounded overflow-hidden shadow-lg">
        <img className="w-full" src="https://opc.webdigify.com/OPC03/OPC090_quickstore/image/cache/catalog/07-1000x1000.jpg" alt="Apple iPhone 13" />
        <div className="px-6 py-2">
        <hr className="pb-2"/>
          <div className="font-bold text-lg text-teal-400 mb-2">Apple iPhone 13 (128GB) - Starlight Light Blue</div>
          <p className="text-gray-500 text-base">
            Smart Phone
          </p>
          <p className="text-gray-500 text-base">
            Availability: <span className="font-bold">49</span>
          </p>
          <p className="text-gray-900 font-bold text-xl">
            $122.00
          </p>
        </div>
        <div className="px-6 flex justify-between flex-nowrap pt-4 pb-3">
          <button className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white "> Add To Cart</button>
          <button className="inline-block bg-gray-300 rounded-full px-3 py-1 text-md font-semibold text-gray-700"><IoIosExpand/></button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  