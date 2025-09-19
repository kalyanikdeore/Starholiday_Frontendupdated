import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axiosInstance from "../../services/api";

const Resortimage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [sectionData, setSectionData] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from Laravel API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axiosInstance.get("/restaurant-section");

        if (
          response.data &&
          response.data.images &&
          response.data.images.length > 0
        ) {
          setSectionData(response.data);
          setImages(response.data.images);
        } else {
          setSectionData(null);
          setImages([]);
        }
      } catch (error) {
        console.error("Error fetching restaurant section data:", error);
        setError("Failed to load restaurant section data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const nextSlide = () => {
    if (images.length <= 1) return;

    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (images.length <= 1) return;

    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  if (loading) {
    return (
      <div className="py-8 md:py-16 px-4 bg-gradient-to-br from-blue-50 to-white text-gray-800 flex items-center justify-center">
        <div className="max-w-9xl mx-auto w-full text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto mb-8"></div>
            <div className="h-96 bg-gray-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8 z-0 md:py-16 px-4 bg-gradient-to-br from-blue-50 to-white text-gray-800 flex items-center justify-center">
        <div className="max-w-9xl mx-auto w-full text-center">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        </div>
      </div>
    );
  }

  if (!sectionData || images.length === 0) {
    return (
      <div className="py-8 md:py-16 px-4 bg-gradient-to-br from-blue-50 to-white text-gray-800 flex items-center justify-center">
        <div className="max-w-9xl mx-auto w-full text-center">
          <div
            className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Notice: </strong>
            <span className="block sm:inline">
              No restaurant section data available. Please add content in the
              admin panel.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-16 px-4 bg-gradient-to-br from-blue-50 to-white text-gray-800 flex items-center justify-center">
      <div className="max-w-9xl mx-auto w-full">
        {/* Heading Section */}
        <div className="text-center mb-6 md:mb-8">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 md:mb-6 relative pb-2 md:pb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sectionData.heading}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-amber-500 rounded-full"></span>
          </motion.h2>

          <motion.p
            className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6 px-2 md:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sectionData.description}
          </motion.p>
        </div>

        {/* Carousel Container */}
        <motion.div
          className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl mx-auto"
          style={{
            maxWidth: "1139px",
            height: "50vh",
            minHeight: "540px",
            maxHeight: "568px",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Image Slides */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) nextSlide();
                else if (swipe > swipeConfidenceThreshold) prevSlide();
              }}
              className="absolute w-full h-full"
            >
              <img
                src={images[currentIndex].image_path}
                alt={`Restaurant image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Only show if multiple images */}
          {images.length > 1 && (
            <>
              <motion.button
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 md:p-3 z-10 shadow-lg hover:bg-amber-500 hover:text-white transition-colors duration-300"
                style={{ zIndex: 1 }}
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.button>

              <motion.button
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 md:p-3 z-10 shadow-lg hover:bg-amber-500 hover:text-white transition-colors duration-300"
                style={{ zIndex: 1 }}
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </>
          )}

          {/* Dots Indicator - Only show if multiple images */}
          {images.length > 1 && (
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 "
              style={{ zIndex: 1 }}
            >
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-amber-500 scale-110"
                      : "bg-white bg-opacity-70"
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Resortimage;
