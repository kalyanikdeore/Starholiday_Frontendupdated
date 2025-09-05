import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Images
import saputara2 from "../../assets/Images/saputara2.jpg";
import saputara3 from "../../assets/Images/saputara3.jpg";
import sixbed from "../../assets/Images/sixbed.jpeg";
import market from "../../assets/Images/market.jpg";
import restaurant2 from "../../assets/Images/restaurant2.jpeg";
import room from "../../assets/Images/room.jpeg";
import saputara10 from "../../assets/Images/saputara10.jpg";
import restaurant23 from "../../assets/Images/restaurant23.jpeg";
import saputara from "../../assets/Images/saputara.jpg";
import online from "../../assets/Images/online.jpg";
import parking from "../../assets/Images/parking.jpeg";
import cctv from "../../assets/Images/cctv.jpeg";
import ev from "../../assets/Images/ev.jpg";

const amenities = [
  {
    id: 1,
    img: room,
    title: "30 Rooms Hotel",
    subtitle: "Spacious & Comfortable",
  },
  {
    id: 2,
    img: saputara3,
    title: "2 Star Modern Amenities",
    subtitle: "Best in Class",
  },
  {
    id: 3,
    img: sixbed,
    title: "Types of Rooms",
    subtitle: "Couple, 4 Bed & 6 Bed Suits",
  },
  {
    id: 4,
    img: market,
    title: "Near Market & Points",
    subtitle: "Easy Accessibility",
  },
  {
    id: 5,
    img: restaurant2,
    title: "Pure Veg Restaurant",
    subtitle: "Healthy & Delicious",
  },
  {
    id: 6,
    img: saputara10,
    title: "Hot Running Water",
    subtitle: "24/7 Availability",
  },
  {
    id: 7,
    img: cctv,
    title: "Wi-Fi & CCTV",
    subtitle: "Stay Connected & Secure",
  },
  {
    id: 8,
    img: parking,
    title: "Ample Parking",
    subtitle: "Safe & Convenient",
  },
  {
    id: 9,
    img: restaurant23,
    title: "Fully Family Resort",
    subtitle: "Relax Together",
  },
  {
    id: 10,
    img: saputara,
    title: "Centrally Located",
    subtitle: "Prime Location",
  },
  {
    id: 11,
    img: ev,
    title: "EV Charging Station",
    subtitle: "Hospitality Guaranteed",
  },
  {
    id: 12,
    img: saputara2,
    title: "Reasonable Rates",
    subtitle: "Budget Friendly",
  },
  {
    id: 13,
    img: online,
    title: "Online/Phone Booking",
    subtitle: "Easy Reservations",
  },
];

const Amenities = () => {
  const navigate = useNavigate();

  const handleAmenityClick = (id) => {
    // Navigate to the AboutFacilitypage with the specific section ID
    navigate(`/about_facility#section-${id}`);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
            Our Amenities
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Experience comfort, convenience, and world-class hospitality.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-5 rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden relative">
                <div
                  className="w-full h-48 overflow-hidden relative cursor-pointer"
                  onClick={() => handleAmenityClick(item.id)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.subtitle}</p>

                {/* Arrow Button */}
                <div
                  onClick={() => handleAmenityClick(item.id)}
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition cursor-pointer"
                >
                  <span className="text-sm">View Details</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
