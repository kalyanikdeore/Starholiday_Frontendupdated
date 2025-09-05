import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bed4 from "../../assets/Images/4bed.jpg";
import bed41 from "../../assets/Images/4bed1.jpg";
import bed42 from "../../assets/Images/4bed3.jpg";
import bed44 from "../../assets/Images/4bed4.jpg";

// ✅ Image Carousel Component
const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const goToPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-xl group"
      style={{ width: "100%", height: "60%", minHeight: "300px" }}
    >
      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-gray-700 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110"
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

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-gray-700 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110"
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

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          height: "100%",
        }}
      >
        {images.map((image, i) => (
          <div key={i} style={{ width: "100%", height: "100%", flexShrink: 0 }}>
            <img
              src={image}
              alt={`Slide ${i}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === i
                ? "bg-white scale-125 shadow-md"
                : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ✅ Main Page
const CoupleRoomPage = () => {
  const navigate = useNavigate();
  const carouselImages = [bed4, bed41, bed44, bed42];

  const handleBooking = () => navigate("/bookform");

  return (
    <div
      style={{
        height: "60%",
        minHeight: "7vh",
        background:
          "linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6)",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1600px",
          height: "60%",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Side - Content */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl  duration-300 flex flex-col">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
              2 Bedded super deluxe AC couple rooms
            </h2>
            <p className="text-gray-600 mb-6 text-lg italic border-l-4 border-blue-500 pl-4">
              "Blending elegance with modern comfort, these rooms ensure a truly
              memorable stay."
            </p>

            <p className="text-gray-700 mb-3 leading-relaxed">
              Our 2-Bedded Super Deluxe AC Couple Rooms are ideal for couples
              seeking comfort, privacy, and scenic beauty. Enjoy a peaceful
              retreat in our well-furnished rooms , premium amenities, and
              stunning views of nature.
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              Room comes with air-conditioning, cozy interiors, fresh linens,
              and a private sit-out area, creating the perfect setting for a
              relaxing and memorable getaway.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                <h4 className="text-gray-800 font-semibold mb-3 flex items-center text-lg">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Room Specs
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✔ Size: 35 m² / 376 ft²</li>

                  <li>✔ twin size bed</li>
                </ul>
              </div>

              <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                <h4 className="text-gray-800 font-semibold mb-3 flex items-center text-lg">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Amenities
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✔ Hot Running Water</li>

                  <li>✔ Wi-Fi</li>
                </ul>
              </div>
            </div>

            {/* Book Now */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleBooking}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="rounded-2xl duration-300 p-4 flex">
            <ImageCarousel images={carouselImages} interval={4000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoupleRoomPage;
