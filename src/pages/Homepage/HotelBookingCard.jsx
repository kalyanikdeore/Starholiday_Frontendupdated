import React from "react";
import { useNavigate } from "react-router-dom";

function HotelBookingCard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-4">
        2 STAR GOVERNMENT APPROVED HOTEL IN SAPUTARA
      </h2>

      <div className="pt-4">
        <button
          onClick={() => navigate("/bookform")}
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-2 px-8 mb-8 rounded-full text-sm shadow-md transition-colors duration-300"
        >
          BOOK NOW
        </button>
      </div>

      {/* Single YouTube Embed */}
      <div className="w-full max-w-7xl">
        <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/elM2c0nnMxE?autoplay=1&mute=1&loop=1&playlist=elM2c0nnMxE"
            title="Hotel Video Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HotelBookingCard;
