const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  specifications: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      data: Buffer,
      contentType: String,
    },
  ],
  type: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  OS: {
    type: String,
    required: true,
  },

  releaseDate: {
    type: Date,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
