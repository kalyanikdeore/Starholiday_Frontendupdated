import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";

const AboutResort = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axiosInstance.get("/about-resort");
        setAboutData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Function to get the full image URL
  const getImageUrl = (path) => {
    if (!path) return "";
    // If it's already a full URL, return it
    if (path.startsWith("http")) return path;
    // Otherwise, construct the URL from the uploads path
    return `/uploads/${path}`;
  };

  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error)
    return <div className="text-center p-6 text-red-500">Error: {error}</div>;
  if (!aboutData) return <div className="text-center p-6">No data found</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {aboutData.title}
        </h1>
        <h5 className="font-bold text-1xl text-blue-600">
          {aboutData.subtitle}
        </h5>
      </div>

      {/* Main Content */}
      <div className="mb-8">
        <p className="text-lg text-center text-gray-700 mb-4">
          {aboutData.description}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative w-full max-w-6xl mx-auto mb-8">
        <img
          src={getImageUrl(aboutData.image_path)}
          alt="Star Holiday Resort"
          className="w-full h-96 rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Button Group */}
      <div className="flex flex-wrap justify-center gap-4 mt-6"></div>
    </div>
  );
};

export default AboutResort;
