import React from "react";
import restaurant from "../../assets/Images/restaurant.jpeg";

const HotelCard = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
        {/* Right Column: Image (now moved to left) */}
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={restaurant}
            alt="Star Holiday Resort"
            className="rounded-lg shadow-lg object-cover h-120 w-full max-w-md"
          />
        </div>

        {/* Left Column: Text Content (now moved to right) */}
        <div className="order-2 md:order-1">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">
            Why?
          </div>
          <h2 className="text-2xl font-bold text-black mb-4">
            Star Holiday Saputara
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-base">
            <li>Very Spacious Room in Star Holiday Saputara.</li>
            <li>
              A.C Restaurant Serving Maharashtrian, Gujarati, Rajasthani, and
              Chinese cuisines Food.
            </li>
            <li>Vast Hotel industry Experience.</li>
            <li>Well trained & experienced Team.</li>
            <li>
              Our Hotel location is very prime to visit surrounding the
              Saputara.
            </li>
            <li>Best recommended hotel in Saputara.</li>
            <li>Handling Any Business Events in our hotel at Saputara.</li>
            <li>More than 75% returning booking.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
