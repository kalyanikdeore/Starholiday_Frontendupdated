import React from "react";

import restaurant2 from "../../assets/Images/restaurant2.jpeg";

const ShilpiResort = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">About Us</h1>
        <h5 className="font-bold text-1xl text-blue-600">
          About Star Holiday Home Resort - SAPUTARA, GUJARAT, INDIA.
        </h5>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        <p className="text-lg text-center text-gray-700 mb-4">
          At <strong>Star Holiday Home Hotel, Saputara</strong>,Step into a
          world of culinary diversity where every dish reflects tradition,
          culture, and taste. Our restaurant brings you an exquisite journey
          through Maharashtrian, Gujarati, Rajasthani, and Chinese cuisines,
          crafted to delight your senses.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-6xl mx-auto mb-8">
        <img
          src={restaurant2}
          alt="Star Holiday Resort"
          className="w-full h-110 rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Button Group */}
      <div className="flex flex-wrap justify-center gap-4 mt-6"></div>
    </div>
  );
};

export default ShilpiResort;
