import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX, FiImage } from "react-icons/fi";
import {
  FaSwimmingPool,
  FaBed,
  FaUtensils,
  FaTree,
  FaHiking,
  FaMountain,
  FaUmbrellaBeach,
  FaParking,
  FaWifi,
  FaTv,
  FaSnowflake,
  FaShower,
  FaCocktail,
  FaConciergeBell,
} from "react-icons/fa";
import axiosInstance from "../../services/api";

const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState({
    gallery_images: [],
    amenities_highlights: []
  });
  const [currentCategory, setCurrentCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAmenityImages, setSelectedAmenityImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: "all", name: "All", icon: <FiImage /> },
    { id: "restaurant", name: "Restaurant", icon: <FaUtensils /> },
    { id: "rooms", name: "Rooms", icon: <FaBed /> },
    { id: "activities", name: "Activities", icon: <FaHiking /> },
  ];

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axiosInstance.get('/gallery');
        
        if (response.data.data) {
          setGalleryData(response.data.data);
        } else {
          setError('Failed to fetch gallery data');
        }
      } catch (err) {
        console.error('Error fetching gallery:', err);
        setError('Failed to load gallery. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "restaurant":
        return <FaUtensils className="text-4xl text-blue-600 mb-4" />;
      case "rooms":
        return <FaBed className="text-4xl text-blue-600 mb-4" />;
      case "activities":
        return <FaHiking className="text-4xl text-blue-600 mb-4" />;
      case "tree":
        return <FaTree className="text-4xl text-blue-600 mb-4" />;
      case "swimming-pool":
        return <FaSwimmingPool className="text-4xl text-blue-600 mb-4" />;
      case "mountain":
        return <FaMountain className="text-4xl text-blue-600 mb-4" />;
      case "beach":
        return <FaUmbrellaBeach className="text-4xl text-blue-600 mb-4" />;
      case "parking":
        return <FaParking className="text-4xl text-blue-600 mb-4" />;
      case "wifi":
        return <FaWifi className="text-4xl text-blue-600 mb-4" />;
      case "tv":
        return <FaTv className="text-4xl text-blue-600 mb-4" />;
      case "snowflake":
        return <FaSnowflake className="text-4xl text-blue-600 mb-4" />;
      case "shower":
        return <FaShower className="text-4xl text-blue-600 mb-4" />;
      case "cocktail":
        return <FaCocktail className="text-4xl text-blue-600 mb-4" />;
      case "concierge":
        return <FaConciergeBell className="text-4xl text-blue-600 mb-4" />;
      default:
        return <FiImage className="text-4xl text-blue-600 mb-4" />;
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-yellow-50 py-12 px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
          Gallery
        </h1>
        
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <div key={cat.id} className="w-24 h-10 bg-gray-300 rounded-full animate-pulse"></div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-gray-300 rounded-lg h-64 animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-yellow-50 py-12 px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
          Gallery
        </h1>
        
        <div className="text-center bg-white rounded-lg p-8 shadow-md">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
        Gallery
      </h1>

      {/* 1. Filter Buttons - Only show if we have gallery images */}
      {galleryData.gallery_images.length > 0 && (
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCurrentCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 ${
                currentCategory === cat.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-blue-600 border-blue-600 hover:bg-blue-100"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* 2. Gallery Section - Only show if we have gallery images */}
      {galleryData.gallery_images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryData.gallery_images
            .filter(img => currentCategory === "all" || img.category === currentCategory)
            .map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.category}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium capitalize">
                    {img.category}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* 3. Amenities Highlights */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
          Amenities Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {galleryData.amenities_highlights.map((amenity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                {amenity.images && amenity.images[0] && (
                  <img
                    src={amenity.images[0]}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-xl text-white font-bold">
                    {amenity.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 text-center">
                {getIcon(amenity.icon)}
                <p className="text-gray-600 mb-4">{amenity.description}</p>
                <div className="flex gap-2 justify-center flex-wrap">
                  {amenity.images.slice(0, 4).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedAmenityImages(amenity.images);
                        setSelectedImage({ url: img });
                      }}
                      className="w-16 h-16 rounded overflow-hidden border-2 border-white hover:border-blue-400 transition-colors"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                  {amenity.images.length > 4 && (
                    <div 
                      className="w-16 h-16 rounded bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
                      onClick={() => {
                        setSelectedAmenityImages(amenity.images);
                        setSelectedImage({ url: amenity.images[0] });
                      }}
                    >
                      <span className="text-blue-600 font-bold">
                        +{amenity.images.length - 4}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => {
            setSelectedImage(null);
            setSelectedAmenityImages(null);
          }}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedImage(null);
                setSelectedAmenityImages(null);
              }}
              className="absolute -top-12 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10"
            >
              <FiX size={24} />
            </button>

            <img
              src={selectedImage.url}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain"
            />

            {selectedAmenityImages && selectedAmenityImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
                <button
                  onClick={() => {
                    const currentIndex = selectedAmenityImages.findIndex(
                      (img) => img === selectedImage.url
                    );
                    const prevIndex =
                      currentIndex === 0
                        ? selectedAmenityImages.length - 1
                        : currentIndex - 1;
                    setSelectedImage({ url: selectedAmenityImages[prevIndex] });
                  }}
                  className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100"
                >
                  <FiChevronLeft size={24} />
                </button>

                <button
                  onClick={() => {
                    const currentIndex = selectedAmenityImages.findIndex(
                      (img) => img === selectedImage.url
                    );
                    const nextIndex =
                      currentIndex === selectedAmenityImages.length - 1
                        ? 0
                        : currentIndex + 1;
                    setSelectedImage({ url: selectedAmenityImages[nextIndex] });
                  }}
                  className="bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;