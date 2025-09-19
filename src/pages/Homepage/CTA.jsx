import React, { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/api";

const CTA = () => {
  const navigate = useNavigate();
  const [ctaData, setCtaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCtaData();
  }, []);

  const fetchCtaData = async () => {
    try {
      const response = await axiosInstance.get("/cta-section");
      setCtaData(response.data);
    } catch (error) {
      console.error("Error fetching CTA data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Static image URL
  const staticImageUrl =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";

  if (loading) {
    return (
      <div className="relative rounded-2xl shadow-2xl overflow-hidden max-w-7xl mx-auto mt-12 mb-22 h-64 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl shadow-2xl overflow-hidden max-w-7xl mx-auto mt-12 mb-22">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={staticImageUrl}
          alt="Saputara Nature"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 via-green-800/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between p-10 text-white">
        {/* Left Side */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-md">
            {ctaData?.title || "Explore the Beauty of Saputara"}
          </h2>
          <p className="mt-3 text-lg text-green-100">
            {ctaData?.description ||
              "Book your trip today and experience nature at its finest."}
          </p>
        </div>

        {/* Right Side Buttons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          {/* BOOK NOW → Navigate to 2nd page */}
          <button
            onClick={() => navigate("/bookform")}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            <Calendar size={18} /> BOOK NOW
          </button>
          {/* CALL NOW → Opens phone dialer */}
          <a
            href={`tel:${ctaData?.phone_number || "+1234567890"}`}
            className="flex items-center gap-2 bg-white text-green-700 border border-green-200 hover:bg-green-50 font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
          >
            <Phone size={18} /> CALL NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
