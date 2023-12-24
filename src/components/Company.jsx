import React, { useState } from 'react';
import { GoGift } from "react-icons/go";
import { FaTruckFast } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { LuBadgePercent } from "react-icons/lu";


const companies = [
  {
    icon: <FaTruckFast  className="w-12 text-blue-600 h-12 mb-2"/>, 
  },
  {
    icon: <BiSupport  className="w-12 h-12 text-blue-600 mb-2"/>, 
   
  },
  {
    icon: <GoGift  className="w-12 h-12 text-blue-600 mb-2"/>, 
   
  },
  {
    icon: <LuBadgePercent  className="w-12 h-12 text-blue-600 mb-2"t/>, 
   
  },
];

const Company = () => {


  return (
    <div>
      {/* Desktop View: Simple block for each service with vertical thin lines */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {companies.map((company, index) => (
          <div key={index} className={`flex flex-col items-center p-4 border-slate-400 max-sm:border-b md:border-r ${index===companies.length-1 && 'border-none'} border-gray-200`}>
            {company.icon}
            </div>
        ))}
      </div>

    </div>
  );
};

export default Company;
