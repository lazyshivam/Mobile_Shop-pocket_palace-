import React from "react";

const Filter = () => {
  return (
    <div className="max-w-80 border border-gray-200 bg-white p-6 shadow-lg">
      <form className="flex flex-col">
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
            name="search"
            className="h-12 w-full  rounded-md border border-gray-100 bg-gray-100 px-2  pl-10 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Search by name, type, manufacturer, etc"
          />
        </div>

        <div className="flex flex-col space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-stone-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
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
              className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Apple</option>
              <option>Samsung</option>
              <option>MI</option>
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
              className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Android</option>
              <option>IOS</option>
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
              className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>M1</option>
              <option>M2</option>
              <option>Snap dragon</option>
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
              className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>ABCD</option>
              <option>ABCD</option>
              <option>ABCD</option>
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
              className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>2GB</option>
              <option>12GB</option>
              <option>128GB</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="price"
              className="text-sm font-medium text-stone-600"
            >
              Enter the price range
            </label>
            <input
              type="number"
              id="price"
              className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        {/* Users can search for the mobile by filters like price, name, type, processor, memory, OS.
         */}
        <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
          <button className="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
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
