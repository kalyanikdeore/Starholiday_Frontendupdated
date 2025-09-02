import React from "react";

import restaurant from "../../assets/Images/restaurant.jpeg";

const ShilpiResort = () => {
  return (
    <section className="bg-white py-33 px-6 md:px-16">
      <div className="text-center mb-12">
        <h6 className="text-2xl text-yellow-700 font-semibold">
          Welcome to Hotels in Saputara
        </h6>
        <h3 className="text-4xl text-blue-900 font-semibold">
          Star Holiday Resort is the 1st & Only <br /> Government Approved
          saputara hotels.
        </h3>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Right Images */}
        <div className="md:w-1/  relative flex justify-center">
          <img
            src={restaurant}
            alt="Star Holiday Resort"
            className="w-full h-110 rounded-lg shadow-lg object-cover"
          />
        </div>
        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-gray-700 leading-relaxed mt-4">
            At Star Holiday Resort, we believe in creating unforgettable
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
          <p className="text-gray-700 leading-relaxed mt-4">
            Welcome to Star Holiday Resort- the Best Hotel in Saputara, where
            guests will find affordable luxury amenities and accommodations.
            Shilpi Hill Resport is heart of saputara hotel. Star Holiday Resort
            is best hotel in saputara with rates, well experienced & well known
            its services. Shilpi Hotel in saputara is Secure, Trusted and highly
            recommended. Star Holiday Resort has one of its kind and Unique
            Banqueting model in Saputara Hotels. Shilpi hotel in Saputara feels
            refreshed and connected outside of your room, giving you the freedom
            to work or relax your way in hotel shilpi at saputara.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShilpiResort;
