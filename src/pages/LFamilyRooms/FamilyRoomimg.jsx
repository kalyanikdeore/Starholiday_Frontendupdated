import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";

const FamilyRoomImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/family-room-images");
      // Filter only active images and sort by sort_order
      const activeImages = response.data.data
        .filter((image) => image.is_active)
        .sort((a, b) => a.sort_order - b.sort_order);
      setImages(activeImages);
    } catch (err) {
      setError("Failed to load images. Please try again later.");
      console.error("Error fetching images:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="container-fluid mx-auto px-4 py-8 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading images...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid mx-auto px-4 py-8 bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchImages}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Gallery</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our collection of stunning images. Click on any image to view
          it in full size.
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Image Grid */}
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-9xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={`${axiosInstance.defaults.fileURL}/${image.image_path}`}
                alt={`Family room image ${image.id}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No images available at the moment.
          </p>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full max-h-screen">
            <button
              className="absolute -top-12 right-0 text-white text-3xl z-10 hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={`${axiosInstance.defaults.fileURL}/${selectedImage.image_path}`}
              alt={`Family room image ${selectedImage.id}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FamilyRoomImageGallery;
