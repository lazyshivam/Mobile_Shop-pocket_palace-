import React, { useEffect } from "react";
import Navbar from "./components/Narbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import Footer from "./components/Footer";
import BestSellingProducts from "./components/BestSellingProducts";
import NewProducts from "./components/NewProducts";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileQuery } from "./services/api";
import {  selectUserType, setLoggedIn, setUser, setUserType } from "./services/userSlice";
// import ProductDetailsPopup from "./components/utitlityComponents/ProductDetailsPopup";

const App = () => {
  const dispatch = useDispatch();
  const { data: userProfile, error, isLoading } = useGetProfileQuery();
  
  // selectLoggedInState
  useEffect(() => {
    if (userProfile) {
      console.log(userProfile?.user?.role);
      dispatch(setUser(userProfile?.user));
      dispatch(setUserType(userProfile?.user?.role));
      dispatch(setLoggedIn(true));
    }
   
  }, [userProfile, error, isLoading]);
 
  // const userRole=selectUserType()
     const userType=useSelector(selectUserType)
  return (
    <div>
      <Navbar />
      {/* <ProductDetailsPopup/> */}
      <Routes>
        {userType==='admin'&&<Route exact path="/user_admin" element={<Admin />} />}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/bestSelling" element={<BestSellingProducts />} />
        <Route exact path="/newProducts" element={<NewProducts />} />

        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
