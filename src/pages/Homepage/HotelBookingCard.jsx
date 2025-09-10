import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

        const response = await fetch(
          "http://localhost:8000/api/hotel-booking-section",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Server returned ${response.status}: ${response.statusText}`
          );
        }

        const data = await response.json();

        if (data && typeof data === "object") {
          setSection(data);
        } else {
          throw new Error("Invalid data format received from server");
        }
      } catch (error) {
        console.error("Error fetching hotel booking section:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelSection();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading hotel info...</p>
      </div>
    );
  }

  if (error && !section) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-red-500">Failed to load content: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
        {section.title}
      </h2>

      {/* Description */}
      {section.description && (
        <p className="max-w-3xl text-gray-700 mb-6">{section.description}</p>
      )}

      {/* Button */}
      <div className="pt-4">
        <button
          onClick={() => navigate(section.button_link || "/bookform")}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-2 px-8 mb-8 rounded-full text-sm shadow-md transition-colors duration-300"
        >
          {section.button_text || "BOOK NOW"}
        </button>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-7xl">
        <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
          {section.video_type === "url" && section.video_url ? (
            <iframe
              className="w-full h-full"
              src={`${section.video_url}?autoplay=1&mute=1&loop=1&playlist=${
                section.video_url.split("embed/")[1] || ""
              }`}
              title="Hotel Video Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : section.video_type === "upload" && section.uploaded_video ? (
            <video
              className="w-full h-full"
              src={`http://localhost:8000/storage/${section.uploaded_video}`}
              autoPlay
              muted
              loop
              controls={false}
            />
          ) : (
            <p className="text-gray-500">No video available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotelBookingCard;
