import React from "react";
import Navbar from "./components/Narbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import {Route, Routes } from 'react-router-dom'
import Admin from "./admin/Admin";

const App = () => {
  return (
    <div>
      <Navbar />
       
      <Routes>
       <Route exact path="/user_admin" element={<Admin/>} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
