import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Users,
  BookOpen,
  Utensils,
  Hotel,
  Star,
  MapPin,
} from "lucide-react";

// Import your local images
import restaurant22 from "../../assets/Images/restaurant22.jpeg";
import restaurant23 from "../../assets/Images/restaurant23.jpeg";
import saputara10 from "../../assets/Images/saputara10.jpg";
import saputara from "../../assets/Images/saputara.jpg";
import saputara12 from "../../assets/Images/saputara12.jpg";
// import restaurant24 from "../../assets/Images/restaurant24.jpg";

const HeroSection = () => {
  const heroContent = [
    {
      id: 1,
      image_url: restaurant23,
      title: "Welcome to Star Holiday Home Hill Resort",
      subtitle: "Luxury Amidst Nature's Splendor",
      description:
        "Experience premium hospitality at Gujarat's only hill station, nestled in the Sahyadri range of Western Ghats at 3,500 feet elevation.",
      ctaText: "Book Your Stay",
      ctaLink: "#booking",
      icon: <Leaf className="w-8 h-8 md:w-12 md:h-12 text-green-300" />,
    },
    {
      id: 2,
      image_url: restaurant22,
      title: "Star Restaurant - Culinary Excellence",
      subtitle: "Delicious Food in Welcoming Ambiance",
      description:
        "Dine in comfort and style at our in-house restaurant, featuring local Gujarati cuisine and panoramic views of Saputara.",
      ctaText: "View Menu",
      ctaLink: "#restaurant",
      icon: <Utensils className="w-8 h-8 md:w-12 md:h-12 text-green-300" />,
    },
    {
      id: 3,
      image_url: saputara,
      title: "Group Bookings & Corporate Events",
      subtitle: "Specialized Packages Available",
      description:
        "Exclusive discounts for schools, colleges, family groups, and corporate meetings with customized packages to suit your needs.",
      ctaText: "Inquire About Groups",
      ctaLink: "#group-booking",
      icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-green-300" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || heroContent.length === 0) return;
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  const selectImage = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const currentItem = heroContent[currentIndex] || {};

  return (
    <div className="relative z-0 w-full overflow-hidden">
      {/* Welcome Banner */}
      {/* <div className="absolute top-0 left-0 w-full z-30 bg-gradient-to-r from-green-800 to-green-600 py-3 px-4 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-300 animate-pulse" />
          <span className="text-white font-semibold text-lg tracking-wide">
            Welcome to Star Holiday Homes
          </span>
          <MapPin className="w-5 h-5 text-yellow-300" />
        </div>
      </div> */}

      {/* Main Hero Slider */}
      <div
        className="relative w-full h-[100vh] flex items-center"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={currentItem.image_url}
              alt={currentItem.title}
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 "></div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
        </button>

        {/* Content Container */}
        <div
          className="relative z-10 container mx-auto px-4 md:px-6 text-white"
          style={{ marginBottom: isMobile ? "-100px" : "-148px" }}
        >
          <div
            className="max-w-2xl bg-black/10  rounded-2xl p-6 md:p-8 shadow-xl"
            style={{ marginLeft: isMobile ? "20px" : "60px" }}
          >
            <motion.div
              className="flex items-center mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {currentItem.icon}
              <span className="ml-3 text-green-300 font-semibold text-lg md:text-xl tracking-wide">
                {currentItem.subtitle}
              </span>
            </motion.div>

            <motion.h3
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                fontFamily: "Playfair Display, serif",
              }}
            >
              {currentItem.title}
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl font-medium mb-8 md:mb-10 max-w-lg leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {currentItem.description}
            </motion.p>

            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => (window.location.href = currentItem.ctaLink)}
            >
              {currentItem.ctaText}
            </motion.button>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
