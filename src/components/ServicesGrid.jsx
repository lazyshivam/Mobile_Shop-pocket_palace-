import React, { useState } from 'react';
import { GoGift } from "react-icons/go";
import { FaTruckFast } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { LuBadgePercent } from "react-icons/lu";


const services = [
  {
    icon: <FaTruckFast  className="w-12 text-blue-600 h-12 mb-2"/>, 
    title: 'Fast Shipping',
    description: 'Free delivery for orders over $99.00',
  },
  {
    icon: <BiSupport  className="w-12 h-12 text-blue-600 mb-2"/>, 
    title: 'Online Support',
    description: 'Feel free to call us & get the best support',
  },
  {
    icon: <GoGift  className="w-12 h-12 text-blue-600 mb-2"/>, 
    title: 'Gift Voucher',
    description: 'Refer a friend & get surprise gifts',
  },
  {
    icon: <LuBadgePercent  className="w-12 h-12 text-blue-600 mb-2"t/>, 
    title: 'Secure Payment',
    description: 'Safe & more secure way to pay online',
  },
];

const ServicesGrid = () => {


  return (
    <div>
      {/* Desktop View: Simple block for each service with vertical thin lines */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {services.map((service, index) => (
          <div key={index} className={`flex flex-col items-center p-4 border-slate-400 max-sm:border-b md:border-r ${index===services.length-1 && 'border-none'} border-gray-200`}>
            {service.icon}
            <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
            <p className="text-sm text-center text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServicesGrid;
