import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";

const CoupleRoomImagesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/couple-room-images");
      if (response.data.success) {
        setImages(response.data.data);
      } else {
        setError("Failed to fetch images");
      }
    } catch (err) {
      setError("Error fetching images: " + err.message);
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
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button
            onClick={fetchImages}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
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
      {images.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No images available at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-9xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={`${axiosInstance.defaults.fileURL}/${image.image_path}`}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <h3 className="text-white font-semibold">{image.title}</h3> */}
                {image.description && (
                  <p className="text-gray-200 text-sm mt-1 truncate">
                    {/* {image.description} */}
                  </p>
                )}
              </div>
            </div>
          ))}
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
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
            <div className="mt-4 text-center text-white">
              {/* <h3 className="text-xl font-semibold">{selectedImage.title}</h3> */}
              {/* {selectedImage.description && (
                <p className="mt-2">{selectedImage.description}</p>
              )} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoupleRoomImagesGallery;
