import React from 'react';
import AddProducts from './AddProducts';

const Admin = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-8">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
        <AddProducts />
      </section>

    </div>
  );
};

export default Admin;
