// Add a new product to the database
const express = require("express");
const router = express.Router();
const Product = require('../models/Product');
const { isAdmin } = require("../middleware/IsAdmin");


router.post("/addProduct",isAdmin,async (req, res) => {
    try {
      const {
        brand,
        model,
        specifications,
        price,
        releaseDate,
        images,
        type,
        processor,
        memory,
        OS,
      } = req.body;
  
      const newProduct = new Product({
        brand,
        model,
        specifications,
        price,
        releaseDate,
        images,
        type,
        processor,
        memory,
        OS,
        
      });
  
      const savedProduct = await newProduct.save();
  
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error("Error adding new product:", error);
      res.status(500).json({ error: "Error adding new product" });
    }
  });
  
  router.get("/allProducts", async (req, res) => {
    try {
      const allProducts = await Product.find();
      res.json(allProducts);
    } catch (error) {
      console.error("Error getting all products:", error);
      res.status(500).json({ error: "Error getting all products" });
    }
  });
  module.exports = router;