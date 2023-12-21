import { useState } from "react";
import { Link } from "react-router-dom";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import CartComponent from "./CartComponent";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/mobile-shop-high-resolution-logo-white-transparent.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsCartOpen(false);
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
    setIsProfileOpen(false);
  };

  const ToggleSign = () => {
    if (isLoggedIn) {
      setIsLoggedIn(!isLoggedIn);
    } else {
      setIsLoggedIn(!isLoggedIn);
    }
  };

  return (
    <nav className="bg-[#1C1B1B] text-white p-4">
      <div className="flex justify-between">
        <div className="flex ">
          {/* Menu button for small screens */}
          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden px-2 py-1  border rounded"
            >
              <CiMenuBurger className="w-8 h-8"/>
            </button>
          </div>
          <div className="hidden  md:flex">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-4 ml-8">
            {/* Navigation links for large screens */}
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/" className="hover:text-yellow-500">
              Products
            </Link>{" "}
            <Link to="/" className="hover:text-yellow-500">
              About
            </Link>
            {/* ... other links */}
          </div>
        </div>

        {/* Search bar and icon for large screens */}
        <div className="flex max-lg:hidden space-x-2 relative">
          <input
            type="text"
            placeholder="Search Product Here..."
            className="p-2 px-3 text-gray-700 rounded-full w-72 outline-none "
          />
          <button className="text-center">
            <PiMagnifyingGlassLight className="absolute right-4 bottom-1 text-black w-8  h-8" />
          </button>
        </div>
        <div className="text-white space-x-3 mr-4">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <PiMagnifyingGlassLight className="md:hidden  w-8  h-8" />
          </button>
          <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <CgProfile className="  w-8  h-8" />
          </button>
          <button>
            <CiShoppingCart
              onClick={() => {
                setIsCartOpen(!isCartOpen);
              }}
              className="  w-8  h-8"
            />
          </button>
        </div>
      </div>
      {/* menu items for small devices */}
      {isOpen && (
        <div className=" fixed md:hidden w-44  top-0  left-0 bottom-0 rounded-sm  bg-slate-100 shadow-lg flex items-center justify-start flex-col text-black ">
          {/* Menu button for small screens */}
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="text-white bg-gray-500 hover:bg-gray-600 p-1  absolute top-0 right-0"
          >
            <IoCloseOutline className="w-8 h-8"/>
          </button>
          <div className="mt-24  ">
            <img src={logo} alt="Logo" className="h-10 filtern brightness-0  w-auto" />
          </div>
          <div className="flex mt-10 flex-col space-y-4 ">
            {/* Navigation links for large screens */}
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/products" className="hover:text-yellow-500">
              Products
            </Link>{" "}
            <Link to="/about" className="hover:text-yellow-500">
              About
            </Link>
            {/* ... other links */}
          </div>
        </div>
      )}
      {/* search bar for small devices */}
      {isSearchOpen && (
        <div className="fixed md:hidden w-96 h-20 top-20 z-50  right-12 bottom-0 rounded-sm bg-slate-200 bg-opacity-75 flex items-center justify-center">
          <div className="flex   space-x-2 relative">
            <input
              type="text"
              placeholder="Search Product Here..."
              className="p-2 px-3 text-gray-700 rounded-full w-64 outline-none "
            />
            <button className="text-center">
              <PiMagnifyingGlassLight className="absolute right-4 bottom-1 text-black w-8  h-8" />
            </button>
          </div>
          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
            }}
            className="text-white bg-gray-500 hover:bg-gray-600 p-1  absolute top-0 right-0"
          >
           <IoCloseOutline className="w-5 h-5"/>
          </button>
        </div>
      )}

      {/* Profile section  */}
      {isProfileOpen && (
        <div className="fixed  h-80 top-20 z-10  right-12 bottom-0 rounded-sm bg-white shadow-lg  flex items-center justify-center">
          <div className="flex text-center   flex-col p-2 text-gray-700  relative">
            <img
              src="https://picsum.photos/200"
              className="w-16 mb-6 mx-auto rounded-full"
              alt="profile_image"
            />
            <h1 className="font-semibold text-xl">Hello Shivam !</h1>
            <div>shivamgoswami.ss.pp@gmail.com</div>
            <div className="mt-4">
              {isLoggedIn ? (
                <button
                  onClick={{}}
                  className="p-2  px-3 text-white rounded-full hover:bg-blue-600 shadow-md  bg-blue-500 "
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={{}}
                  className="p-2  px-3 text-white rounded-full hover:bg-blue-600 shadow-md  bg-blue-500 "
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
          <button
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
            }}
            className="text-white rounded-full bg-gray-500 hover:bg-gray-600 p-1  absolute top-0 right-0"
          >
          <IoCloseOutline className="w-8 h-8"/>
          </button>
        </div>
      )}

      {/* Cart section for small screens */}
      {isCartOpen && (
        <div className="fixed top-20  md:h-[600px] shadow-md right-12 bottom-0 p-4 rounded-lg bg-gray-200  bg-opacity-90 text-black flex  justify-center">
          <CartComponent />
          <button
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
            className="text-white bg-gray-500 hover:bg-gray-600 p-2 absolute top-0 right-0 "
          >
           <IoCloseOutline className="w-8 h-8"/>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
