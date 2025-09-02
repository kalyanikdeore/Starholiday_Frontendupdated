import React from "react";
import { motion } from "framer-motion";

import restaurant from "../../assets/Images/restaurant.jpeg";
import restaurant2 from "../../assets/Images/restaurant2.jpeg";

const images = [
  {
    title: "Corporate Events",
    url: restaurant,
  },
  {
    title: "Grand Functions",
    url: restaurant2,
  },
];

const StayWithUs = () => {
  return (
    <div className="py-10 px-4 bg-white text-gray-800">
      <div className="max-w-screen-lg mx-auto">
        {/* Heading Section */}
        <div className="text-left mb-8">
          <h4 className="text-xl text-yellow-700 font-serif">
            Top Most Reasons To
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 border-b-4 inline-block border-blue-700 pb-2">
            Stay With Us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {images.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <motion.img
                src={item.url}
                alt={item.title}
                className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0  bg-opacity-50 w-full text-center py-4">
                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StayWithUs;
