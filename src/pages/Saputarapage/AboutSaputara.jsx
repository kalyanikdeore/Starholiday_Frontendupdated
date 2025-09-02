import React from "react";

import saputara from "../../assets/Images/saputara.jpg";

const ShilpiResort = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content - Text */}
          <div className="lg:w-1/2 space-y-6 order-2 lg:order-1">
            <div className="mb-2">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                Premium Amenities
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-blue-600">Saputara</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-6"></div>
            </div>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                At Star Holiday Resort, we believe in creating unforgettable
                memories through luxury, comfort, and exceptional service.
                Located in the heart of Saputara, our resort offers the perfect
                getaway with a blend of traditional hospitality and modern
                amenities.
              </p>
              <p className="text-lg leading-relaxed">
                With years of experience in hosting families, solo travelers,
                and corporate guests, we take pride in our secure and peaceful
                environment. Our team is committed to ensuring your stay is not
                only comfortable but truly memorable.
              </p>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative group">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src={saputara}
                alt="Star Holiday Resort"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-blue-300 opacity-50 hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 border-4 border-blue-200 rounded-full opacity-50 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShilpiResort;
