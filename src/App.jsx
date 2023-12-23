import React from "react";
import Navbar from "./components/Narbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import {Route, Routes } from 'react-router-dom'
import Admin from "./admin/Admin";
import Footer from "./components/Footer";
import BestSellingProducts from "./components/BestSellingProducts";
import NewProducts from "./components/NewProducts";


const App = () => {
  return (
    <div>
      <Navbar />
       
      <Routes>
       <Route exact path="/user_admin" element={<Admin/>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/bestSelling" element={<BestSellingProducts/>} />
        <Route exact path="/newProducts" element={<NewProducts/>} />
        
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
