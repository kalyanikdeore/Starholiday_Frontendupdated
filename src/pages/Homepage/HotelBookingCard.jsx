import React from "react";
import { useNavigate } from "react-router-dom";

function HotelBookingCard() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center text-center mt-20 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
        3 STAR GOVERNMENT APPROVED HOTEL IN SAPUTARA
      </h2>

      <div className="pt-4">
        <button
          onClick={() => navigate("/bookform")}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 mb-8 rounded-full text-sm shadow-md transition-colors duration-300"
        >
          BOOK NOW
        </button>
      </div>

      {/* YouTube Embed */}
      <div className="relative w-full max-w-6xl aspect-video rounded-lg shadow-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/cUXa7jfI4Po?autoplay=1&mute=1&loop=1&playlist=cUXa7jfI4Po"
          title="Hotel Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default HotelBookingCard;
