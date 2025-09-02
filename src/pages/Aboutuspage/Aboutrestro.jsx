import React from "react";

import restaurant2 from "../../assets/Images/restaurant2.jpeg";

const ShilpiResort = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">About Us</h1>
        <p className="font-bold text-blue-600">
          ABOUT Star Holiday Resort - SAPUTARA, GUJARAT, INDIA.
        </p>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        <p className="text-lg text-center text-gray-700 mb-4">
          star holiday hotel in saputara feels privileged to offer our guest's
          comfortable couches, tables and lounge spaces, creating a warm
          environment to just relax and cherish memorable time. Hotel Shilpi
          offers a full array of services to create a simple and pleasurable
          environment for your stay. Whether it is board meetings, training
          program, team buildings exercises seminars; Hotel Shilpi can cater to
          all your requirements in saputara.
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
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg shadow-md transition duration-300">
          Online Book
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Rooms
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Packages
        </button> */}
      </div>
    </div>
  );
};

export default ShilpiResort;
