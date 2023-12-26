import React, { useEffect, useState } from "react";
import { useGetUserCartProductsQuery } from "../services/api";

const CartComponent = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Air Max 2019",
      size: "36EU - 4US",
      quantity: 2,
      price: 259000,
    },
    {
      id: 2,
      name: "Nike Air Max 2019",
      size: "36EU - 4US",
      quantity: 2,
      price: 259000,
    },
    {
      id: 3,
      name: "Nike Air Max 2019",
      size: "36EU - 4US",
      quantity: 2,
      price: 259000,
    },
    {
      id: 4,
      name: "Nike Air Max 2019",
      size: "36EU - 4US",
      quantity: 2,
      price: 259000,
    },
  ]);
  const {
    data: useCartItems,
    error,
    isLoading,
  } = useGetUserCartProductsQuery();

  useEffect(() => {
     if(!isLoading){
      console.log(useCartItems);
     }
  }, [useCartItems, error, isLoading]);

  const isLoadingChange = (itemId, newQuantity) => {
    // Update the quantity of the specified item in the cart
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    // Remove the specified item from the cart
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Calculate subtotal and total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shippingCost = 4.99;
  const total = subtotal + shippingCost;

  return (
    <div className="pt-10 ">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg overflow-y-scroll h-96   p-3 bg-gray-300 md:w-2/3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={item.image}
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">{item.size}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                    <span
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{item.price} ₭</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">${shippingCost.toFixed(2)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${total.toFixed(2)} USD</p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
