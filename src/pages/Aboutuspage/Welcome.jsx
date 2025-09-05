import React from "react";

import restaurant from "../../assets/Images/restaurant.jpeg";

const StarResort = () => {
  return (
    <section className="bg-white py-33 px-6 md:px-16">
      <div className="text-center mb-12">
        <h6 className="text-2xl text-yellow-700 font-semibold">
          Welcome to Hotel in Saputara
        </h6>
        <h3 className="text-4xl text-blue-900 font-semibold">
          Star Holiday Home Resort is the One & Only <br /> Government Approved
          saputara hotel.
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
            Welcome to <strong>Star Holiday Home Resort</strong> – your perfect
            destination for luxury, comfort, and warm hospitality. Nestled in
            the heart of Saputara, our resort combines modern amenities with
            traditional charm, offering an ideal getaway for families, couples,
            and business travelers.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            With years of experience in hosting guests from around the world, we
            take pride in providing a safe, peaceful, and refreshing
            environment. Our dedicated team ensures that every moment of your
            stay is memorable, whether you are here to relax, celebrate, or
            work.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Recognized as one of the <strong>best hotels in Saputara</strong>,
            Star Holiday Resort is known for affordable luxury, personalized
            service, and unique facilities. From comfortable accommodations to
            our exclusive banquet spaces, we bring you a stay experience that
            blends elegance with convenience. Discover the joy of unwinding,
            connecting, and creating unforgettable memories with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StarResort;
