import React, { useState } from "react";

// Import Saputara Images
import saputara1 from "../../assets/Images/saputara1.jpg";
import saputara2 from "../../assets/Images/saputara2.jpg";
import saputara3 from "../../assets/Images/saputara3.jpg";
import saputara4 from "../../assets/Images/saputara4.jpg";
import saputara5 from "../../assets/Images/saputara5.jpg";
import saputara8 from "../../assets/Images/saputara8.jpg";
import saputara9 from "../../assets/Images/saputara9.jpg";
import saputara10 from "../../assets/Images/saputara10.jpg";
import saputara11 from "../../assets/Images/saputara11.jpg";
import saputara12 from "../../assets/Images/saputara12.jpg";
import saputara13 from "../../assets/Images/saputara13.jpg";
import saputara15 from "../../assets/Images/saputara15.jpg";
import saputara16 from "../../assets/Images/saputara16.jpg";
import saputara17 from "../../assets/Images/saputara17.jpg";
import saputara18 from "../../assets/Images/saputara18.jpg";
import saputara19 from "../../assets/Images/saputara19.jpg";
import saputara20 from "../../assets/Images/saputara20.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    saputara1,
    saputara2,
    saputara3,
    saputara4,
    saputara5,
    saputara8,
    saputara9,
    saputara10,
    saputara11,
    saputara12,
    saputara13,
    saputara15,
    saputara16,
    saputara17,
    saputara18,
    saputara19,
    saputara20,
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
        Explore Saputara
      </h2>
      <p className="text-gray-600 text-lg mb-10">
        Discover the beauty of nature through our curated gallery
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Saputara ${index + 1}`}
              className="w-full h-56 object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
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
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
