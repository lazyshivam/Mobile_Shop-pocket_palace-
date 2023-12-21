import { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const AddProducts = () => {
  const [productData, setProductData] = useState({
    brand: "",
    model: "",
    specifications: "",
    price: 0,
    releaseDate: new Date(),
    images: [],
    type: "",
    processor: "",
    memory: "",
    OS: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    const newImages = Array.from(files).map((file) => ({
      data: file,
      contentType: file.type,
    }));
    setProductData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...newImages],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic to save productData to the database or API
    console.log("Product Data:", productData);
    // Reset form or navigate to another page as needed
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-8 p-8 bg-white rounded-md shadow-md"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Product Information
          </h2>
          <div className="mt-4 grid md:grid-cols-2 grid-cols-1 gap-4">
            <div>
              <label
                htmlFor="brand"
                className="block text-sm font-medium text-gray-900"
              >
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id="brand"
                value={productData.brand}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-900"
              >
                Model
              </label>
              <input
                type="text"
                name="model"
                id="model"
                value={productData.model}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-900"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={productData.price}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-900"
              >
                Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                value={productData.type}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="processor"
                className="block text-sm font-medium text-gray-900"
              >
                Processor
              </label>
              <input
                type="text"
                name="processor"
                id="processor"
                value={productData.processor}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="memory"
                className="block text-sm font-medium text-gray-900"
              >
                Memory
              </label>
              <input
                type="text"
                name="memory"
                id="memory"
                value={productData.memory}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="OS"
                className="block text-sm font-medium text-gray-900"
              >
                OS
              </label>
              <input
                type="text"
                name="OS"
                id="OS"
                value={productData.OS}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>

            {/* Add more input fields for other product attributes as needed */}
          </div>
        </div>
        <div className="">
          <div>
            <label
              htmlFor="specifications"
              className="block text-sm font-medium text-gray-900"
            >
              Specifications
            </label>
            <textarea
              type="text"
              rows={5}
              name="specifications"
              id="specifications"
              value={productData.specifications}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Images</h2>
          <div className="mt-4">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-900"
            >
              Product Images
            </label>
            <div className="mt-2 flex flex-col items-center gap-4">
              <div className="relative flex items-center">
                <MdOutlineAddPhotoAlternate
                  className="h-8 w-8 text-gray-300"
                  aria-hidden="true"
                />
                <label
                  htmlFor="file-upload"
                  className="ml-2 cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Upload
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*"
                  />
                </label>
              </div>
              {productData.images.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {productData.images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image.data)}
                      alt={`Product Image ${index + 1}`}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProducts;
