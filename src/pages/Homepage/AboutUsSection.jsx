import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const navigate = useNavigate();
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAboutData();
  }, []);
  
  const fetchAboutData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/about-us");
      const data = await response.json();
      setAboutData(data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLearnMore = () => {
    navigate("/about_hill");
  };

  // Helper function to construct the correct image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "/placeholder.jpg";

    // Check if the path is already a full URL
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // For local storage paths, prepend the storage URL
    return `http://localhost:8000/storage/${imagePath}`;
  };

  if (loading) {
    return (
      <section className="bg-white py-16 px-6 md:px-16" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">Loading...</div>
        </div>
      </section>
    );
  }

  if (!aboutData) {
    return (
      <section className="bg-white py-16 px-6 md:px-16" id="about">
        <div className="max-w-7xl mx-auto">
          <div>Failed to load content</div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-lg text-yellow-700 font-semibold mb-1">
            {aboutData.welcome_title}
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 pb-1">
            {aboutData.main_title}
          </h1>
          <p className="text-gray-700 leading-relaxed mt-4">
            {aboutData.description_1}
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            {aboutData.description_2}
          </p>
          <button
            onClick={handleLearnMore}
            className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
          >
            {aboutData.button_text}
          </button>
        </div>

        {/* Right Images - Improved Layout */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={getImageUrl(aboutData.image_1)}
                alt="Resort Exterior"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-8">
              <img
                src={getImageUrl(aboutData.image_2)}
                alt="Resort Interior"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg col-span-2">
              <img
                src={getImageUrl(aboutData.image_3)}
                alt="Hotel Room"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src = "/placeholder.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
