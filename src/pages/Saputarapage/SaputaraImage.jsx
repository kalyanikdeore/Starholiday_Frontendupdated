import React, { useState, useEffect } from 'react';
import axiosInstance from '../../services/api';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false); // Set to false initially to not show loader
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        // Fetch gallery data from the API endpoint
        const response = await axiosInstance.get('/about-saputara/gallery');
        
        if (response.data.success) {
          setImages(response.data.data);
        } else {
          setError(response.data.message || 'Failed to load gallery data');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching gallery data:', err);
        setError('Failed to load gallery images');
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // If loading, show the UI with empty state (no loader shown to maintain UI)
  if (loading) {
    return (
      <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Explore Saputara
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Discover the beauty of nature through our curated gallery
        </p>

        {/* Empty grid as placeholder while loading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
            >
              <div className="w-full h-56 bg-gray-200 rounded-xl shadow-lg animate-pulse"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
        Explore Saputara
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Discover the beauty of nature through our curated gallery
      </p>

      {/* Image Grid - Use fetched images or fallback to empty state */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Saputara ${index + 1}`}
                className="w-full h-56 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300"
                onError={(e) => {
                  console.error('Image failed to load:', img);
                  // If image fails to load, don't show anything (maintains UI layout)
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))
        ) : (
          // Show empty state if no images are available
          [...Array(4)].map((_, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
            >
              <div className="w-full h-56 bg-gray-100 rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-gray-400">No image</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal - Exact same as original */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-red-500 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-red-600 transition"
            >
              ✕
            </button>
            {/* Image */}
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl border-4 border-white"
              onError={(e) => {
                console.error('Modal image failed to load:', selectedImage);
                setSelectedImage(null); // Close modal if image fails to load
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;