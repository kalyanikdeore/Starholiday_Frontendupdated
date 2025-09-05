import React, { useState } from "react";
import bed6 from "../../assets/Images/6bed.jpg";
import bed61 from "../../assets/Images/6bed1.jpg";
import bed62 from "../../assets/Images/6bed2.jpg";
import bedimge from "../../assets/Images/6bedimge.jpeg";
import sixbed from "../../assets/Images/sixbed.jpeg";
import six2 from "../../assets/Images/six2.jpg";
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { id: 1, src: sixbed, alt: "Course image 1" },
    { id: 2, src: bed61, alt: "Course image 2" },
    { id: 3, src: bed62, alt: "Course image 3" },
    { id: 4, src: bedimge, alt: "Course image 4" },
    { id: 5, src: six2, alt: "Course image 4" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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

      {/* Image Grid - Updated for wider desktop view */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-9xl mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
        ))}
      </div>

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
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
