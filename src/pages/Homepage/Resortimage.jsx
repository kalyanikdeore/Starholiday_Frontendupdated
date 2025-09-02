import React from "react";
import { useNavigate } from "react-router-dom";
import about2 from "../../assets/Images/restaurant2.jpeg";

function VideoSection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
      {/* Heading & Description */}
      <div className="max-w-4xl mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Experience Authentic Flavors
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Step into a world of culinary diversity where every dish reflects
          tradition, culture, and taste. Our restaurant brings you an exquisite
          journey through <span className="font-semibold">Maharashtrian</span>,{" "}
          <span className="font-semibold">Gujarati</span>,{" "}
          <span className="font-semibold">Rajasthani</span>, and{" "}
          <span className="font-semibold">Chinese</span> cuisines, crafted to
          delight your senses and create a memorable dining experience.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-7xl">
        <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
          <img
            src={about2}
            alt="Hotel Restaurant"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
