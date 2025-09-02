import React, { useState, useEffect } from "react";
import bed6 from "../../assets/Images/6bed.jpg";
import bed61 from "../../assets/Images/6bed1.jpg";
import bed62 from "../../assets/Images/6bed2.jpg";
import bedimge from "../../assets/Images/6bedimge.jpeg";

// Image Carousel Component
const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="flex items-center justify-center py-10">
      {/* Inline Style Tag */}
      <style>
        {`
          .carousel-container {
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
            border-radius: 12px;
          }
          .indicator-active {
            background-color: white;
            width: 12px;
            height: 12px;
          }
        `}
      </style>

      <div className="relative w-[1000px] h-[500px] overflow-hidden carousel-container">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
        </button>

        {/* Carousel Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 1000}px)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[1000px] h-[500px] flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "indicator-active" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const LFamilyRooms = () => {
  const carouselImages = [bedimge, bed6, bed61, bed62];

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <ImageCarousel images={carouselImages} interval={4000} />
    </section>
  );
};

export default LFamilyRooms;
