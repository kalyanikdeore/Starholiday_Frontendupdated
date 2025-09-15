import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StayWithUs = () => {
  const scrollRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Laravel API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/stay-reasons");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching stay reasons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ Scroll Function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="py-10 px-4 bg-white text-gray-800 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

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
          {/* Left Button - Only show if there are items to scroll */}
          {images.length > 0 && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-10 hover:bg-blue-600 hover:text-white transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Scrollable Images */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ margin: "0 20px" }}
          >
            {images.length > 0 ? (
              images.map((item, index) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative min-w-[300px] md:min-w-[350px] rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                >
                  <motion.img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/350x250/3B82F6/FFFFFF?text=" +
                        encodeURIComponent(item.title);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 w-full p-4 text-center">
                    <h3 className="text-white text-xl font-bold mb-1">
                      {item.title}
                    </h3>
                    {/* <p className="text-white text-sm hidden group-hover:block">
                      {item.description}
                    </p> */}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="w-full text-center py-10">
                <p className="text-gray-500">No stay reasons available</p>
              </div>
            )}
          </div>

          {/* Right Button - Only show if there are items to scroll */}
          {images.length > 0 && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-0 hover:bg-blue-600 hover:text-white transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={28} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StayWithUs;
