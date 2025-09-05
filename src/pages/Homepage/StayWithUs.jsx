import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  // {
  //   title: "Concession Rates",
  //   url: "http://localhost:5173/src/assets/Images/saputara9.jpg",
  //   description:
  //     "Special discounted rates for extended stays and off-season bookings",
  // },
  {
    title: "Group Booking",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOyWni4q4nYQ1mDmbD-kRlRSpuJnB90rummQ&s",
    description:
      "Perfect accommodations for large groups with customized packages",
  },
  {
    title: "School Trips",
    url: "https://suryatara.com/wp-content/uploads/2025/06/converted_image-2025-06-15T152544.348-1024x576.webp",
    description:
      "Educational and fun packages for student groups with safety priority",
  },
  {
    title: "Corporate Meets",
    url: "https://amsimr.org/wp-content/uploads/industrial-visit-042024-1.jpg",
    description: "Professional settings for business meetings and conferences",
  },
  {
    title: "Multipurpose Hall",
    url: "https://content.jdmagicbox.com/comp/ichalkaranji/m4/9999px230.x230.220923114632.y8m4/catalogue/shubhankaroti-multipurpose-hall-ichalkaranji-ho-ichalkaranji-banquet-halls-swh5y8gb68.jpg",
    description: "Spacious venue suitable for various events and gatherings",
  },
  {
    title: "Get Together",
    url: "https://pix10.agoda.net/hotelImages/38712719/0/21c36edb9d91845ea13e6107c4aaa04a.jpg?ce=0&s=414x232&ar=16x9",
    description: "Ideal space for family reunions and friend gatherings",
  },
  {
    title: "Kitty Parties",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyRZ5hzdGdB0T5gomY_-Tm0ioW3Jm_Uvl8w&s",
    description:
      "Exclusive arrangements for social kitty parties and gatherings",
  },
  {
    title: "Birthday Parties",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGO48b6xhtGjxhjfzXl8b2Ok_vLICR-bT4cg&s",
    description: "Celebrate special days with our customized birthday packages",
  },
  {
    title: "Marriage Anniversary",
    description: "Romantic settings to celebrate your milestones in style",
    url: "https://shilpihillresort.com/images/celebrations.jpg",
  },
  {
    title: "Saputara",
    url: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRVgbgQSJ_7U_bEdsL0mWGphdkkFoBpSriFEmLfEOEpc2bxFqQ9THs2nuxiTv88Owdh_C5SxTmYroqkV7rXTTl2WRE5KhWp3Q_ndu51fg",
    description:
      "Experience the beauty of Saputara with our special tour packages",
  },
];

const StayWithUs = () => {
  const scrollRef = useRef(null);

  // ✅ Scroll Function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-10 px-4 bg-white text-gray-800 relative">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading Section */}
        <div className="text-left mb-8">
          <h4 className="text-xl text-yellow-700 font-serif">
            Top Most Reasons To
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 border-b-4 inline-block pb-2">
            Stay With Us
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Button - Fixed with proper positioning */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-blue-600 hover:text-white transition"
            aria-label="Scroll left"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Scrollable Images */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ margin: "0 20px" }}
          >
            {images.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative min-w-[300px] md:min-w-[350px] rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <motion.img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 w-full p-4 text-center">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {item.title}
                  </h3>
                  {/* <p className="text-gray-200 text-sm hidden group-hover:block">
                    {item.description}
                  </p> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Button - Fixed with proper positioning */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-0 hover:bg-blue-600 hover:text-white transition"
            aria-label="Scroll right"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayWithUs;
