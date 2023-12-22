import React from 'react';

const services = [
  {
    icon: 'delivery-truck-icon', // Replace with actual icon path
    title: 'Fast Shipping',
    description: 'Free delivery for order over $99.00',
  },
  {
    icon: 'headset-icon', // Replace with actual icon path
    title: 'Online Support',
    description: 'Feel free to call us & get best support',
  },
  {
    icon: 'gift-box-icon', // Replace with actual icon path
    title: 'Gift Voucher',
    description: 'Refer a friend & get surprise gifts',
  },
  {
    icon: 'secure-payment-icon', // Replace with actual icon path
    title: 'Secure Payment',
    description: 'Safe & more secure way to pay online',
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg">
    <img src={icon} alt={title} className="w-12 h-12 mb-2" />
    <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
    <p className="text-sm text-blue-900">{description}</p>
  </div>
);

const ServicesGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {services.map((service, index) => (
      <ServiceCard key={index} {...service} />
    ))}
  </div>
);

export default ServicesGrid;
