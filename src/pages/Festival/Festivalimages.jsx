import React, { useState } from "react";
import { FiImage } from "react-icons/fi";

// ✅ Example images (replace with your actual festival images)
import saputara5 from "../../assets/Images/saputara5.jpg";
import saputara13 from "../../assets/Images/saputara13.jpg";
import saputara14 from "../../assets/Images/saputara14.webp";
import saputara19 from "../../assets/Images/saputara19.jpg";

// ✅ Static images for gallery
const staticGalleryImages = [
  { id: 1, url: saputara5, category: "Megh Malhar Parv" },
  { id: 2, url: saputara13, category: "Megh Malhar Parv" },
  { id: 3, url: saputara14, category: "Basant Panchami" },
  { id: 4, url: saputara19, category: "Lohri" },
];

const FestivalGallery = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: <FiImage /> },
    { id: "Megh Malhar Parv", name: "Megh Malhar Parv" },
    { id: "Basant Panchami", name: "Basant Panchami" },
    { id: "Lohri", name: "Lohri" },
  ];

  const getFilteredImages = () => {
    if (currentCategory === "all") return staticGalleryImages;
    return staticGalleryImages.filter(
      (img) => img.category === currentCategory
    );
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
        Festival Gallery
      </h1>

      {/* Filter Buttons */}
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredImages().map((img) => (
          <div
            key={img.id}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer"
          >
            <img src={img.url} alt="" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-medium">{img.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FestivalGallery;
