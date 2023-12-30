const LandingPage = ({ PageInfo }) => {
    const { title, discount, price } = PageInfo;
   console.log(title, discount, price,"hii from landing page");
    return (
      <div
        className="flex-shrink-0 w-full  p-4 md:p-8 flex flex-col md:flex-row md:items-center justify-between"
        style={{ backgroundImage: `url(${PageInfo.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="w-72  border  md:w-1/2 md:bg-white p-4 md:p-8 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{title}</h1>
          <p className="text-sm hidden md:flex md:text-xl mb-2">{discount}</p>
          <p className="mb-4 md:mb-6 md:flex hidden text-gray-500">{price}</p>
          <div className="flex flex-col  md:flex-row gap-2">
            <button className="bg-blue-500  text-white px-2 md:px-6 py-2 rounded mb-2 md:mb-0">
              Buy Now
            </button>
            <button className="border border-blue-500 text-blue-500 px-2 md:px-6 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default LandingPage;