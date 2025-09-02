import React from "react";
import shbg from "../../assets/Images/shbg.jpg";
const InquiryHero = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      {/* Background Image */}
      <img
        src={shbg}
        alt="About Us Background"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide">
          Book Form
        </h1>
      </div>
    </div>
  );
};

export default InquiryHero;
