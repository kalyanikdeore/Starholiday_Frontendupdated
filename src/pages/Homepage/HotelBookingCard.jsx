import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/api";

function HotelBookingCard() {
  const navigate = useNavigate();
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelSection = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get("/hotel-booking-section", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = response.data;

        if (data && Object.keys(data).length > 0) {
          setSection(data);
        } else {
          setSection(null);
        }
      } catch (error) {
        console.error("Error fetching hotel booking section:", error);
        setError(error.message);
        setSection(null);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelSection();
  }, []);

  // Function to extract YouTube video ID from any URL format
  const getYouTubeVideoId = (url) => {
    if (!url) return null;

    // Match YouTube ID from various URL patterns
    const patterns = [
      /(?:youtube\.com\/watch\?v=|\/embed\/|youtu\.be\/)([^&?#]+)/,
      /(?:youtube\.com\/embed\/)([^&?#]+)/,
      /(?:youtube\.com\/v\/)([^&?#]+)/,
      /(?:youtube\.com\/watch\?.*v=)([^&?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  };

  // Function to create proper embed URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&rel=0&modestbranding=1`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500">Error loading content: {error}</p>
      </div>
    );
  }

  if (!section) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">No hotel booking information available</p>
      </div>
    );
  }

  const embedUrl =
    section.video_type === "url" ? getYouTubeEmbedUrl(section.video_url) : null;

  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
        {section.title}
      </h2>

      {/* Button */}
      <div className="pt-4">
        <button
          onClick={() => navigate(section.button_link || "/bookform")}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 px-10 mb-8 rounded-full text-sm shadow-md hover:from-orange-600 hover:to-yellow-600 transition-colors duration-300"
        >
          {section.button_text || "BOOK NOW"}
        </button>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="aspect-video rounded-lg shadow-lg overflow-hidden bg-gray-200">
          {section.video_type === "url" && embedUrl ? (
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title="Hotel Video Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : section.video_type === "upload" && section.uploaded_video ? (
            <video
              className="w-full h-full object-cover"
              src={`${axiosInstance.defaults.fileURL}/${section.uploaded_video}`}
              autoPlay
              muted
              loop
              controls={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
              <p className="text-gray-500 text-lg">No video available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotelBookingCard;
