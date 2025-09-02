import React from "react";
import { useNavigate } from "react-router-dom";
import service from "../../assets/Images/service.jpg";

function Serviceimage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
      {/* Heading & Description */}
      <div className="max-w-4xl mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Premium Services & Facilities
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We go beyond hospitality to ensure your comfort and convenience. Our
          resort offers <span className="font-semibold">luxury rooms</span> with
          modern amenities,{" "}
          <span className="font-semibold">multi-cuisine dining</span> options,
          and <span className="font-semibold">dedicated event spaces</span> for
          special occasions. Guests can also enjoy{" "}
          <span className="font-semibold">swimming pool access</span>,
          <span className="font-semibold">wellness & spa services</span>, and
          <span className="font-semibold">24/7 customer assistance</span>—making
          every stay truly relaxing and memorable.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-7xl">
        <div className=" overflow-hidden">
          <img
            src={service}
            alt="Resort Services"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Serviceimage;
