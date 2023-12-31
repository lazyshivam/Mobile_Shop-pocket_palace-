import React, { useState } from "react";

const Filter = ({ setFilteredProducts, Products }) => {
  const [filters, setFilters] = useState({
    model: "",
    brand: "",
    type: "",
    processor: "",
    osType: "",
    memory: "",
    price: 100,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      model: "",
      brand: "",
      type: "",
      processor: "",
      osType: "",
      memory: "",
      price: 100,
    });
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleOnChangeSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredProducts = Products.filter((product) =>
      Object.values(product).some((value) =>
      typeof value === 'string'&& value.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      )
    );
    setFilteredProducts(filteredProducts);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(Products);
    const filteredProducts = Products.filter((product) => {
      return (
        product.model.toLowerCase().includes(filters.model.toLowerCase()) &&
        product.brand.toLowerCase().includes(filters.brand.toLowerCase()) &&
        product.type.toLowerCase().includes(filters.type.toLowerCase()) &&
        product.processor
          .toLowerCase()
          .includes(filters.processor.toLowerCase()) &&
        product.OS.toLowerCase().includes(filters.osType.toLowerCase()) &&
        product.memory.toLowerCase().includes(filters.memory.toLowerCase()) &&
        product.price <= parseInt(filters.price || 999999, 10)
      );
    });

    setFilteredProducts(filteredProducts);

    // You should replace the console.log with the actual filtering logic
    // using setFilteredProducts function
  };
  return (
    <div className="max-w-80 border border-gray-200 bg-white p-6 shadow-lg">
      <form onSubmit={handleSearch} className="flex flex-col">
        <div className="relative mb-10 w-full flex items-center justify-between rounded-md">
          <svg
            className="absolute left-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" className=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
          </svg>
          <input
            type="name"
            name="searchTerm"
            value={searchTerm}
            onChange={handleOnChangeSearch}
            className="h-12 w-full  rounded-md border border-gray-100 bg-gray-100 px-2  pl-10 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Search by name, type, manufacturer, etc"
          />
        </div>

        <div className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="model"
              className="text-sm font-medium text-stone-600"
            >
              Model
            </label>
            <input
              type="text"
              id="model"
              name="model"
              value={filters.model}
              onChange={handleInputChange}
              placeholder="Raspberry juice"
              className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="brand"
              className="text-sm font-medium text-stone-600"
            >
              Brand
            </label>

            <select
              id="brand"
              name="brand"
              className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              onChange={handleInputChange}
              value={filters.brand}
            >
              <option value="">Select Brand</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="MI">MI</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="type"
              className="text-sm font-medium text-stone-600"
            >
              Type
            </label>

            <select
              id="type"
              name="type"
              className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              onChange={handleInputChange}
              value={filters.type}
            >
              <option value="">Select Type</option>
              <option value="Android">Android</option>
              <option vallue="iOS">iOS</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="processor"
              className="text-sm font-medium text-stone-600"
            >
              Processor
            </label>

            <select
              id="processor"
              name="processor"
              className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              onChange={handleInputChange}
              value={filters.processor}
            >
              <option value="">Select Processor</option>
              <option value="M1">M1</option>
              <option value="M2">M2</option>
              <option value="Snap dragon">Snap dragon</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="os-type"
              className="text-sm font-medium text-stone-600"
            >
              OS
            </label>

            <select
              id="os-type"
              name="osType"
              className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              onChange={handleInputChange}
              value={filters.osType}
            >
              <option value="">Select OS</option>
              <option value="ABCD">ABCD</option>
              <option value="ABCD">ABCD</option>
              <option value="ABCD">ABCD</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="memory"
              className="text-sm font-medium text-stone-600"
            >
              Memory
            </label>

            <select
              id="memory"
              name="memory"
              className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              onChange={handleInputChange}
              value={filters.memory}
            >
              <option value="">Select Memory</option>

              <option value="16GB">16GB</option>
              <option value="32GB">32GB</option>
              <option value="64GB">64GB</option>
              <option value="128GB">128GB</option>
              <option value="256GB">256GB</option>
              <option value="512GB">512GB</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="price"
              className="text-sm font-medium text-stone-600"
            >
              Enter the price range from 0 to $ <span>{filters.price}</span>
            </label>
            <input
              type="range"
              id="price"
              name="price"
              value={filters.price}
              onChange={handleInputChange}
              min={0}
              max={1000}
              className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        {/* Users can search for the mobile by filters like price, name, type, processor, memory, OS.
         */}
        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
          <button
            onClick={handleReset}
            className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring"
          >
            Reset
          </button>
          <button className="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
