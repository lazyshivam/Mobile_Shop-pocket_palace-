const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemSchema = new Schema({
  product: {
    type: String, // You might want to reference a Product model if you have one
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  // Add more fields related to the product if needed
});

const userCartSchema = new Schema({
  user: {
    type: String, // Assuming user is referenced from a User model
    ref: 'User',
    required: true,
  },
  cartItems: [cartItemSchema],
});

const UserCart = mongoose.model('UserCart', userCartSchema);

module.exports = UserCart;
