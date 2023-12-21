const express = require("express");
const router = express.Router();
const ensureAuthenticated = require("../middleware/ensureAuthenticated");
const UserCart = require("../models/UserCart");
const Product = require('../models/Product');


// Get all API links for the authenticated user
router.get("/userProducts",ensureAuthenticated, async (req, res) => {
  try {
    const data = await UserCart.find({ user: req.user.id });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching in fetching cart data:", error);
    res.status(500).json({ error: "Error fetching in fetching cart data" });
  }
});

// Add a new API link for the authenticated user
router.post("/userProducts", ensureAuthenticated, async (req, res) => {
  try {
    const { title, url, method } = req.body;
    const userId = req.user.id;

    // Find the user's cart or create a new one if it doesn't exist
    let userCart = await UserCart.findOne({ user: userId });

    if (!userCart) {
      userCart = new UserCart({
        user: userId,
        cartItems: [],
      });
    }

    // Check if the product is already in the cart
    const existingCartItem = userCart.cartItems.find(item => item.title === title);

    if (existingCartItem) {
      // If the product already exists, increment the quantity
      existingCartItem.quantity += 1;
    } else {
      // If the product is not in the cart, add it as a new cart item
      userCart.cartItems.push({
        title,
        url,
        method,
        quantity: 1,
      });
    }

    // Save the updated user cart
    const savedUserCart = await userCart.save();

    res.status(201).json(savedUserCart);
  } catch (error) {
    console.error("Error in adding cart data:", error);
    res.status(500).json({ error: "Error in adding cart data" });
  }
});


// Add a new product to the database
router.post("/addProduct",async (req, res) => {
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


// Endpoint to get all products
router.get("/allProducts", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    console.error("Error getting all products:", error);
    res.status(500).json({ error: "Error getting all products" });
  }
});

// Endpoint to get best-selling products
router.get("/bestSellingProducts", async (req, res) => {
  try {
   
    const bestSellingProducts = await Product.find().sort({ sales: -1 }).limit(5);
    res.json(bestSellingProducts);
  } catch (error) {
    console.error("Error getting best-selling products:", error);
    res.status(500).json({ error: "Error getting best-selling products" });
  }
});

// Endpoint to get new products
router.get("/newProducts", async (req, res) => {
  try {
  
    const newProducts = await Product.find({ createdAt: { $gte: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) } });
    res.json(newProducts);
  } catch (error) {
    console.error("Error getting new products:", error);
    res.status(500).json({ error: "Error getting new products" });
  }
});



module.exports = router;