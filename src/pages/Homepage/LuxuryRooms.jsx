import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/api";

const LuxuryRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await axiosInstance.get("/Luxury-room");
      setRooms(response.data.data || response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setLoading(false);
    }
  };

  const handleRoomClick = (path) => {
    navigate(path);
  };

  const handleBookNow = () => {
    navigate("/bookform");
  };

  if (loading) {
    return (
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16">
        <div className="text-center">
          <p>Loading rooms...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16">
      {/* Background shape effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-transparent to-blue-200/20 blur-2xl -z-10"></div>

      {/* Section heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-900 tracking-wide"
        >
          Our Luxury Rooms
        </motion.h2>
        <div className="flex justify-center mt-4 items-center">
          <span className="h-[2px] w-16 bg-yellow-600"></span>
          <span className="mx-3 text-yellow-600 text-2xl">✦</span>
          <span className="h-[2px] w-16 bg-yellow-600"></span>
        </div>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Choose from our beautifully designed rooms that combine elegance,
          comfort, and style for the perfect stay.
        </p>
      </div>

      {/* Rooms cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 40px rgba(0,0,0,0.15)",
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden group transform transition-all duration-300"
          >
            {/* Image with overlay */}
            <div className="relative">
              <motion.img
                src={`${axiosInstance.defaults.fileURL}/${room.image}`}
                alt={room.title}
                className="w-full h-72 object-cover rounded-t-2xl"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 "></div>
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
                {room.title}
              </h3>
            </div>

            {/* Card body */}
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {room.title}
              </h4>

              {/* Buttons */}
              <div className="flex flex-row justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => handleRoomClick(room.path)}
                  className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-700 transition text-sm sm:text-base w-full"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleBookNow}
                  className="px-4 sm:px-5 py-2 sm:py-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium hover:opacity-90 transition text-sm sm:text-base w-full"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LuxuryRooms;
