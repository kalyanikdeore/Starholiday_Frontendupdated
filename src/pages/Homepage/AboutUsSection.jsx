import React from "react";
import p1 from "../../assets/Images/p1.jpg";
import saputara from "../../assets/Images/saputara.jpg";
import about3 from "../../assets/Images/restaurant3.jpeg";
import { useNavigate } from "react-router-dom";

const AboutUsSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about_hill"); // Navigate to the About Us page
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h3 className="text-lg text-yellow-700 font-semibold mb-1">
            Welcome to
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4  pb-1">
            Star Holiday Home Hill Resort
          </h1>
          <p className="text-gray-700 leading-relaxed mt-4">
            At Star Holiday Home Resort, we believe in creating unforgettable
            memories through luxury, comfort, and exceptional service. Located
            in the heart of Saputara, our resort offers the perfect getaway with
            a blend of traditional hospitality and modern amenities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            With years of experience in hosting families, solo travelers, and
            corporate guests, we take pride in our secure and peaceful
            environment. Our team is committed to ensuring your stay is not only
            comfortable but truly memorable.
          </p>
          <button
            onClick={handleLearnMore}
            className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded hover:bg-orange-700 transition"
          >
            LEARN MORE
          </button>
        </div>

        {/* Right Images - Improved Layout */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src={p1}
                alt="Resort Exterior"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-8">
              <img
                src={saputara}
                alt="Resort Interior"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg col-span-2">
              <img
                src={about3}
                alt="Hotel Room"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
