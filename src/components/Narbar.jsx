import { useState } from "react";
import { Link } from "react-router-dom";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
// import CartComponent from "./CartComponent";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../assets/mobile-shop-high-resolution-logo-white-transparent.png";
import { useDispatch, useSelector } from "react-redux";
import { selectUserType , selectUser, selectLoggedInState} from "../services/userSlice";
import ShoppingCart from "./ShoppingCart";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
 
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(!open);
  };
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const baseUrl='http://localhost:8080';

  // const [data:User,error,isLoading]=
  const userType=useSelector(selectUserType);
 const userProfile=useSelector(selectUser);
 const isLoggedIn=useSelector(selectLoggedInState)
  
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
            {userType==='admin'&&<Link to="/user_admin" className=" hover:text-yellow-500">
              Admin Panel
            </Link>}
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/products" className="hover:text-yellow-500">
              Products
            </Link>{" "}
            <Link to="/bestSelling" className="hover:text-yellow-500">
              BestSelling
            </Link>
            <Link to="/newProducts" className="hover:text-yellow-500">
              NewProducts
            </Link>
            <Link to="/about" className="hover:text-yellow-500">
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
            {isLoggedIn ?<img className="w-8 h-8 rounded-full" src={userProfile.picture}/>:<CgProfile className="  w-8  h-8" />}
          </button>
          <button>
            <CiShoppingCart
              onClick={() => {
                setOpen(!open);
              }}
              className="  w-8  h-8"
            />
          </button>
        </div>
      </div>
      {/* menu items for small devices */}
      {isOpen && (
        <div className="z-20 fixed md:hidden w-44  top-0  left-0 bottom-0 rounded-sm  bg-slate-100 shadow-lg flex items-center justify-start flex-col text-black ">
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
           {userType==='admin'&& <Link to="/user_admin" className="hover:text-yellow-500">
              Admin Panel
            </Link>}
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/products" className="hover:text-yellow-500">
              Products
            </Link>{" "}
            <Link to="/bestSelling" className="hover:text-yellow-500">
              BestSelling
            </Link>
            <Link to="/newProducts" className="hover:text-yellow-500">
              NewProducts
            </Link>
            <Link to="/about" className="hover:text-yellow-500">
              About
            </Link>
            {/* ... other links */}
          </div>
        </div>
      )}
      {/* search bar for small devices */}
      {isSearchOpen && (
        <div className="fixed md:hidden w-96 h-20 top-20 z-10  right-12 bottom-0 rounded-sm bg-slate-200 bg-opacity-85 flex items-center justify-center">
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
        <div className="absolute max-w-80 h-80 top-20 z-10  right-12 bottom-0 rounded-lg bg-white shadow-lg  flex items-center justify-center">
          <div className="flex text-center   flex-col p-2 text-gray-700  relative">
            <img
              src={isLoggedIn?userProfile?.picture:'https://picsum.photos/200'}
              className="w-16 mb-6 mx-auto rounded-full"
              alt="profile_image"
            />
            <h1 className="font-semibold text-xl">Hello {" "}{isLoggedIn?userProfile?.username:"Guest User"}!</h1>
            <div className="text-wrap">{isLoggedIn?userProfile?.email:"Please !, sign in to add and see you cart items."}</div>
            <div className="mt-4">
              {isLoggedIn ? (
                <button
                  onClick={()=>{
                    window.location.href = `${baseUrl}/auth/logout`;
                  }}
                  className="p-2  px-3 text-white rounded-full hover:bg-blue-600 shadow-md  bg-blue-500 "
                >
                  Sign out
                </button>
              ) : (
                <button
                onClick={()=>{
                  window.location.href = `${baseUrl}/auth/google`;
                }}
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
     
        {/* <div className="absolute top-20  md:h-[600px] shadow-md right-12 bottom-0 p-4 rounded-lg z-10 bg-gray-100   text-black flex  justify-center"> */} 
          <ShoppingCart open={open} closeModal={closeModal} setOpen={setOpen}/>
          
        {/* </div> */}
      {/* )} */}
    </nav>
  );
};

export default Navbar;
