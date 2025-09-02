import React from "react";
import {
  FaHotel,
  FaStar,
  FaBed,
  FaUtensils,
  FaHotTub,
  FaWifi,
  FaVideo,
  FaParking,
  FaUsers,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaMoneyBillAlt,
  FaPhoneAlt,
  FaBolt,
} from "react-icons/fa";

const amenities = [
  { icon: <FaHotel size={40} />, label: "30 Rooms Hotel" },
  { icon: <FaStar size={40} />, label: "2 Star Amenities" },
  { icon: <FaBed size={40} />, label: "Family & Suite Rooms" },
  { icon: <FaUtensils size={40} />, label: "Pure Veg Restaurant" },
  { icon: <FaWifi size={40} />, label: "Free Wi-Fi" },
  { icon: <FaVideo size={40} />, label: "CCTV" },
  { icon: <FaParking size={40} />, label: "Ample Parking" },
  { icon: <FaUsers size={40} />, label: "Family Resort" },
  { icon: <FaMapMarkerAlt size={40} />, label: "Centrally Located" },
  { icon: <FaHotTub size={40} />, label: "Hot Running Water" },

  { icon: <FaBolt size={40} />, label: "EV Charging" },
];

const Amenities = () => {
  return (
    <section className="py-16 px-4 text-center bg-cover bg-center bg-no-repeat">
      <div className="bg-opacity-80 p-6 md:p-10 rounded-xl max-w-7xl mx-auto shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
          Amenities
        </h2>
        <div className="w-24 h-1 bg-blue-900 mx-auto mb-10"></div>

        {/* ✅ Grid with 1 row 6 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="text-yellow-700 mb-3">{item.icon}</div>
              <p className="text-sm font-semibold text-blue-900">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
