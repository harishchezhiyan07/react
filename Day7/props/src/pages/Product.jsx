import React from "react";

const Product = ({ array }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Our Products
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {array.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {product.ProductName}
            </h2>

            <p className="text-lg text-gray-600 mb-2">
              <span className="font-semibold">Price:</span> ₹{product.Price}
            </p>

            <p
              className={`font-semibold ${
                product.StockStatus === "In Stock"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product.StockStatus}
            </p>

            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;