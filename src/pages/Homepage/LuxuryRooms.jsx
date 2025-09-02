import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import images (you'll need to adjust paths based on your project structure)
import cou2 from "../../assets/Images/cou2.jpg";
import bed6 from "../../assets/Images/6bed.jpg";
import bed4 from "../../assets/Images/4bed.jpg";

const rooms = [
  {
    id: "4_bedrooms_family_room",
    title: "4 Bedded Family Room",
    image: bed4,
    path: "/family_room",
  }, 
  {
    id: "6_bedrooms_family_room",
    title: "6 Bedded Family Room",
    image: bed6,
    path: "/6_bedrooms",
  },
  {
    id: "couple_room",
    title: "Couple Room",
    image: cou2,
    path: "/Coupleroom",
  },
];

const LuxuryRooms = () => {
  const navigate = useNavigate();

  const handleRoomClick = (path) => {
    navigate(path);
  };

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16">
      {/* Section heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl text-blue-900 font-semibold">
          Our Luxury Rooms
        </h2>
        <div className="flex justify-center mt-4">
          <span className="h-[1px] w-10 bg-yellow-600 mt-2 mr-2"></span>
          <span className="text-yellow-600 text-xl">✦</span>
          <span className="h-[1px] w-10 bg-yellow-600 mt-2 ml-2"></span>
        </div>
      </div>

      {/* Room cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300"
            onClick={() => handleRoomClick(room.path)}
          >
            <motion.div
              className="overflow-hidden"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={room.image}
                alt={room.title}
                className="w-full h-64 object-cover"
              />
            </motion.div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {room.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryRooms;
