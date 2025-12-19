import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/api";

// ✅ Enhanced Image Carousel Component with responsive design
const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Function to extract image URL from different possible formats
  const getImageUrl = (image) => {
    if (typeof image === "string") return image;
    if (typeof image === "object") {
      // Try common property names for image URLs
      if (image.url) return image.url;
      if (image.image) return image.image;
      if (image.src) return image.src;
      if (image.path) return image.path;
    }
    return ""; // Return empty string if format is unknown
  };

  // Normalize images to ensure we're working with URLs
  const normalizedImages = images
    ? images.map(getImageUrl).filter((url) => url !== "")
    : [];

  const goToNext = () =>
    setCurrentIndex((prev) =>
      prev === normalizedImages.length - 1 ? 0 : prev + 1
    );

  const goToPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? normalizedImages.length - 1 : prev - 1
    );

  // Handle image loading
  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    if (normalizedImages.length <= 1) return; // No need for timer if only one image

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [interval, normalizedImages.length]);

  // If no images, show placeholder
  if (!normalizedImages || normalizedImages.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-200 flex items-center justify-center carousel-container">
        <div className="text-gray-500 text-lg">No images available</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl group carousel-container">
      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 text-gray-700 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:scale-110"
        style={{ zIndex: 1 }}
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
        style={{ zIndex: 1 }}
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
        className="flex transition-transform duration-700 ease-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {normalizedImages.map((image, i) => (
          <div key={i} className="w-full h-full flex-shrink-0">
            {!loadedImages[i] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="animate-pulse text-gray-500">
                  Loading image...
                </div>
              </div>
            )}
            <img
              src={image}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
              style={{
                display: loadedImages[i] ? "block" : "none",
              }}
              onLoad={() => handleImageLoad(i)}
              onError={(e) => {
                console.error(`Failed to load image: ${image}`);
                e.target.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {normalizedImages.map((_, i) => (
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

// ✅ Main Page with mobile-responsive design
const Familyroom = () => {
  const navigate = useNavigate();
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/four-bedroom-about");

        let data = response.data.data || response.data;

        // Normalize images array regardless of source format
        if (data.images) {
          // If images is an array of objects, extract URLs
          if (Array.isArray(data.images) && data.images.length > 0) {
            if (typeof data.images[0] === "object") {
              // Try to extract URL from common property names
              data.images = data.images.map((img) => {
                if (img.url) return img.url;
                if (img.image) return img.image;
                if (img.src) return img.src;
                if (img.path) return img.path;
                if (img.link) return img.link;

                // If no recognized property, try the first string property
                for (let key in img) {
                  if (
                    typeof img[key] === "string" &&
                    (img[key].startsWith("http") ||
                      img[key].startsWith("/") ||
                      img[key].startsWith("./"))
                  ) {
                    return img[key];
                  }
                }

                // Fallback to string representation
                return String(img);
              });
            }
          }
        } else {
          // If no images array, try to find images in other properties
          const possibleImageProperties = [
            "gallery",
            "photos",
            "pictures",
            "imageUrls",
            "media",
          ];
          for (const prop of possibleImageProperties) {
            if (data[prop] && Array.isArray(data[prop])) {
              data.images = data[prop];
              break;
            }
          }
        }

        setRoomData(data);
      } catch (err) {
        console.error("Error fetching room data:", err);
        setError("Failed to load room information");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, []);

  const handleBooking = () =>
    navigate(roomData?.booking_button?.url || "/bookform");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading room information...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  if (!roomData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">No room data available</div>
      </div>
    );
  }

  // Extract description texts from objects if needed
  const descriptionTexts = roomData.descriptions
    ? roomData.descriptions.map((item) =>
        typeof item === "object" && item.description ? item.description : item
      )
    : [];

  return (
    <div
      style={{
        minHeight: "70vh",
        background:
          roomData.styling?.background ||
          "linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6)",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          maxWidth: roomData.styling?.maxWidth || "1600px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start justify-center">
          {/* Left Side - Content */}
          <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl duration-300 flex flex-col w-full lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-3">
              {roomData.title || "6 Bedded super deluxe AC family Suite"}
            </h2>
            <p className="text-gray-600 mb-4 lg:mb-6 text-base lg:text-lg italic border-l-4 border-blue-500 pl-4">
              "
              {roomData.tagline ||
                "Perfect for group vacations, this suite brings everyone together while ensuring ample space and convenience for all."}
              "
            </p>

            {descriptionTexts.map((desc, index) => (
              <p
                key={index}
                className="text-gray-700 mb-3 leading-relaxed text-sm lg:text-base"
              >
                {desc}
              </p>
            ))}

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 my-6 lg:my-8">
              <div className="bg-blue-50/50 p-4 lg:p-5 rounded-xl border border-blue-100">
                <h4 className="text-gray-800 font-semibold mb-3 flex items-center text-base lg:text-lg">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Room Specs
                </h4>
                <ul className="space-y-2 text-gray-700 text-xs lg:text-sm">
                  {roomData.specs && typeof roomData.specs === "object" ? (
                    Object.entries(roomData.specs).map(
                      ([key, value], index) => (
                        <li key={index}>
                          ✔ {key}: {value}
                        </li>
                      )
                    )
                  ) : (
                    <li>No specifications available</li>
                  )}
                </ul>
              </div>

              <div className="bg-blue-50/50 p-4 lg:p-5 rounded-xl border border-blue-100">
                <h4 className="text-gray-800 font-semibold mb-3 flex items-center text-base lg:text-lg">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Amenities
                </h4>
                <ul className="space-y-2 text-gray-700 text-xs lg:text-sm">
                  {roomData.amenities && roomData.amenities.length > 0 ? (
                    roomData.amenities.map((amenity, index) => {
                      // Extract amenity text if it's an object
                      const amenityText =
                        typeof amenity === "object" ? amenity.amenity : amenity;
                      return <li key={index}>✔ {amenityText}</li>;
                    })
                  ) : (
                    <li>No amenities listed</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Book Now */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={handleBooking}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 lg:px-8 py-3 rounded-xl text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all w-full lg:w-auto"
              >
                {roomData.booking_button?.text || "Book Now"}
              </button>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="rounded-2xl duration-300 flex justify-center items-center w-full lg:w-auto">
            {roomData.images && roomData.images.length > 0 ? (
              <div className="w-full flex justify-center">
                <ImageCarousel images={roomData.images} interval={4000} />
              </div>
            ) : (
              <div className="flex items-center justify-center bg-gray-100 rounded-2xl carousel-container">
                <div className="text-gray-500">No images to display</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile-responsive CSS */}
      <style jsx>{`
        .carousel-container {
          width: 100%;
          max-width: 647px;
          height: 427px; /* Desktop height */
        }

        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .carousel-container {
            height: 350px;
          }
        }

        @media (max-width: 640px) {
          .carousel-container {
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            height: 250px;
          }
        }

        @media (max-width: 380px) {
          .carousel-container {
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Familyroom;
