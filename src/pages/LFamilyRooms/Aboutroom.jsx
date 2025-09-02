import React from "react";
import { useNavigate } from "react-router-dom";

const Sixbedroom = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/bookform"); // Replace with your desired route
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start bg-white p-10 rounded-3xl shadow-2xl">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-extrabold text-blue-900 uppercase tracking-wide">
            4 Bedded Family Room
          </h2>
          <h3 className="text-xl font-semibold text-blue-700">
            Simplicity combined with luxury characterizing the whole resort
          </h3>
          <p className="text-gray-600 leading-relaxed">
            The rooms reflect the same philosophy as the hotel — "Simplicity
            combined with luxury characterizing the whole resort".
          </p>
          <p className="text-gray-600 leading-relaxed">
            Featuring modern flooring, deep walnut furniture, and specially
            commissioned oil paintings. Every detail is thoughtfully curated
            with high-end cotton sheets.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The resort certainly lives up to the high standards expected by its
            elite patrons.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="text-blue-900 font-semibold uppercase text-sm mb-2">
                Special Room
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Size: 35 m² / 376 ft²</li>
                <li>View: Ocean</li>
                <li>Bed: King-size or twin beds</li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-900 font-semibold uppercase text-sm mb-2">
                Service Room
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Oversized work desk</li>
                <li>Hairdryer</li>
                <li>Iron on request</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="flex justify-center md:justify-end items-start pt-4">
          <button
            onClick={handleBooking}
            className="bg-blue-900 hover:bg-blue-700 text-white px-10 py-6 rounded-xl text-sm font-bold uppercase shadow-lg transform hover:scale-105 transition duration-300 ease-in-out w-full md:w-52"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sixbedroom;
