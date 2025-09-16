import React from "react";
import { useEffect, useState } from "react";
import axiosInstance from "../../services/api";

const Aboutfac = () => {
  const [about, setAbout] = useState(null);

  const fetchAbout = async () => {
  try {
    const response = await axiosInstance.get(`/about-facilities-content`);
    if (response.data.success) {
      setAbout(response.data.data); // since we made controller return only text
    }
  } catch (err) {
    console.error('Error fetching about content:', err);
  }
};

useEffect(() => {
  fetchAbout();
}, []);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg ">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          About Facility
        </h1>
        <p className="font-bold text-blue-600">
          ABOUT Star Holiday Home Resort - SAPUTARA, GUJARAT, INDIA.
        </p>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        <div className="text-lg text-center text-gray-700 mb-4">
          {about && (
          <p dangerouslySetInnerHTML={{ __html: about.about_facility_content}}/>
          )}
        </div>
      </div>

      {/* Image Section */}
      {/* <div className="relative w-full max-w-6xl mx-auto mb-8">
        <img
          src={shbg}
          alt="Star Holiday Resort"
          className="w-full h-110 rounded-lg shadow-lg object-cover"
        />
      </div> */}

      {/* Button Group */}
      {/* <div className="flex flex-wrap justify-center gap-4 mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg shadow-md transition duration-300">
          Online Book
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Rooms
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Packages
        </button>
      </div> */}
    </div>
  );
};

export default Aboutfac;
