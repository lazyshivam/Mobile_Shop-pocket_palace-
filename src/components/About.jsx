import React, { useState } from "react";
import { useAddFeedBackMutation } from "../services/api";
import Popover from "./utitlityComponents/Popover";

const About = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
    feedbackDate: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };
  

  const [addFeedback,result]=useAddFeedBackMutation();
  const [isSuccessPopupVisible, setSuccessPopupVisibility] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addFeedback(feedback);
      setSuccessPopupVisibility(true);
      // Reset the form after successful submission
      setFeedback({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Pocket Palace</h2>
        {/* ... Previous content ... */}
        <p className="text-gray-700 leading-relaxed max-w-3xl text-left mx-auto">
          Welcome to Pocket Palace, your ultimate destination for the latest and
          greatest mobile devices. At Pocket Palace, we are passionate about
          providing you with a curated selection of premium smartphones,
          ensuring that you stay connected in style.
        </p>
        <p className="text-gray-700 leading-relaxed max-w-3xl text-left mx-auto mt-4">
          Our mission is to offer a seamless shopping experience, where quality
          meets innovation. With a focus on customer satisfaction, we handpick
          every device to meet the highest standards of performance, design, and
          functionality.
        </p>
        <p className="text-gray-700 leading-relaxed max-w-3xl text-left mx-auto mt-4">
          Whether you're looking for the latest flagship models or
          budget-friendly options, Pocket Palace has something for everyone.
          Explore our collection, and discover the perfect mobile companion that
          suits your lifestyle.
        </p>
        <p className="text-gray-700 leading-relaxed max-w-3xl text-left mx-auto mt-4">
          Join us on this exciting journey, and let Pocket Palace redefine the
          way you experience mobile technology. Your satisfaction is our
          priority, and we look forward to serving you with excellence.
        </p>
        <div className="mt-12">
        {isSuccessPopupVisible && (
          <Popover
            isOpen={isSuccessPopupVisible}
            onClose={() => setSuccessPopupVisibility(false)}
          >
            <p className="text-green-800">Thank you for your feedback!</p>
          </Popover>
        )}
          <h3 className="text-2xl font-bold mb-6">Share Your Feedback</h3>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
             
              <input
                type="text"
                id="name"
                name="name"
                placeholder="your name here.."
                value={feedback.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your email here.."
                value={feedback.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
             
              <textarea
                id="message"
                name="message"
                placeholder="Give your feedback here..."
                value={feedback.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
           {
            !result.isLoading ?(
              <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit Feedback
            </button>
            ):(
              <button
              type="submit"
              disabled
              className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none"
            >
              Please wait..
            </button>
            )
           }
          </form>
        </div>
        <h1 className="mt-12 text-teal-600 mx-4">"Thank you for exploring our website. Your visit is greatly appreciated. We are grateful for the opportunity to share our products and services with you. If you have any questions or feedback, feel free to reach out. Your satisfaction is our priority, and we look forward to serving you with excellence."</h1>
      </div>
    </section>
  );
};

export default About;
