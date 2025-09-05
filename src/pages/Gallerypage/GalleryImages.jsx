import React, { useState } from "react";
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

// ✅ Import images properly
import familyroom from "../../assets/Images/familyroom.jpg";
import familyroom2 from "../../assets/Images/familyroom2.jpg";
import familyroom3 from "../../assets/Images/familyroom3.jpg";

// Restaurant images
import restaurant from "../../assets/Images/restaurant.jpeg";
import restaurant2 from "../../assets/Images/restaurant2.jpeg";
import restaurant3 from "../../assets/Images/restaurant3.jpeg";
import restaurant4 from "../../assets/Images/restaurant4.jpeg";

// Saputara images (Activities)
import saputara1 from "../../assets/Images/saputara1.jpg";
import saputara2 from "../../assets/Images/saputara2.jpg";
import saputara3 from "../../assets/Images/saputara3.jpg";
import saputara4 from "../../assets/Images/saputara4.jpg";
import saputara5 from "../../assets/Images/saputara5.jpg";
import saputara6 from "../../assets/Images/saputara6.webp";
import saputara7 from "../../assets/Images/saputara7.webp";
import saputara8 from "../../assets/Images/saputara8.jpg";
import saputara9 from "../../assets/Images/saputara9.jpg";
import saputara10 from "../../assets/Images/saputara10.jpg";
import saputara11 from "../../assets/Images/saputara11.jpg";
import saputara12 from "../../assets/Images/saputara12.jpg";
import saputara13 from "../../assets/Images/saputara13.jpg";
import saputara14 from "../../assets/Images/saputara14.webp";
import saputara15 from "../../assets/Images/saputara15.jpg";
import saputara16 from "../../assets/Images/saputara16.jpg";
import saputara17 from "../../assets/Images/saputara17.jpg";
import saputara18 from "../../assets/Images/saputara18.jpg";
import saputara19 from "../../assets/Images/saputara19.jpg";
import saputara20 from "../../assets/Images/saputara20.jpg";

// Room images
import bed4 from "../../assets/Images/4bed.jpg";
import bed41 from "../../assets/Images/4bed1.jpg";
import bed42 from "../../assets/Images/4bed3.jpg";
import bed43 from "../../assets/Images/4bed3.jpg";
import bed44 from "../../assets/Images/4bed4.jpg";
import bed6 from "../../assets/Images/6bed.jpg";
import bed61 from "../../assets/Images/6bed1.jpg";
import bed62 from "../../assets/Images/6bed2.jpg";
import img20210928 from "../../assets/Images/2021-09-28.jpg";
import about from "../../assets/Images/about.jpg";
import cou1 from "../../assets/Images/cou1.jpg";
import cou2 from "../../assets/Images/cou2.jpg";
import cou3 from "../../assets/Images/cou-3.jpg";
import cou4 from "../../assets/Images/cou-4.jpg";
import cou5 from "../../assets/Images/cou5.jpg";
import restro1 from "../../assets/Images/restro1.jpeg";
import restro2 from "../../assets/Images/restro2.jpg";
import restro3 from "../../assets/Images/restro3.jpg";
import restro4 from "../../assets/Images/restro4.jpg";
import restro5 from "../../assets/Images/restro5.jpg";
import restro6 from "../../assets/Images/restro6.jpg";
import restro7 from "../../assets/Images/restro7.jpg";
import restro8 from "../../assets/Images/restro8.jpg";
import restro9 from "../../assets/Images/restro9.jpg";
import restro10 from "../../assets/Images/restro10.jpg";
import restro11 from "../../assets/Images/restro11.jpg";

// ✅ Use imported variables instead of string names
const staticGalleryImages = [
  // Restaurant images
  { id: 1, url: restaurant, category: "Restaurant" },
  { id: 2, url: restaurant2, category: "Restaurant" },
  { id: 3, url: restaurant3, category: "Restaurant" },
  { id: 4, url: restaurant4, category: "Restaurant" },
  { id: 43, url: restro1, category: "Restaurant" },
  { id: 44, url: restro2, category: "Restaurant" },
  { id: 45, url: restro3, category: "Restaurant" },
  { id: 46, url: restro4, category: "Restaurant" },
  { id: 47, url: restro5, category: "Restaurant" },
  // { id: 48, url: restro6, category: "Restaurant" },
  // { id: 49, url: restro7, category: "Restaurant" },
  // { id: 50, url: restro8, category: "Restaurant" },
  { id: 51, url: restro9, category: "Restaurant" },
  { id: 52, url: restro10, category: "Restaurant" },
  { id: 53, url: restro11, category: "Restaurant" },

  // Room images
  { id: 5, url: bed4, category: "rooms" },
  { id: 6, url: bed41, category: "rooms" },
  { id: 7, url: bed42, category: "rooms" },
  { id: 8, url: bed43, category: "rooms" },
  { id: 9, url: bed44, category: "rooms" },
  { id: 10, url: bed6, category: "rooms" },
  { id: 11, url: bed61, category: "rooms" },
  { id: 12, url: bed62, category: "rooms" },
  // { id: 13, url: img20210928, category: "rooms" },
  // { id: 14, url: about, category: "rooms" },
  { id: 15, url: cou1, category: "rooms" },
  { id: 16, url: cou2, category: "rooms" },
  { id: 17, url: cou3, category: "rooms" },
  { id: 18, url: cou4, category: "rooms" },
  { id: 19, url: cou5, category: "rooms" },
  { id: 20, url: familyroom, category: "rooms" },
  // { id: 21, url: familyroom2, category: "rooms" },
  { id: 22, url: familyroom3, category: "rooms" },

  // Activities images (Saputara)
  { id: 23, url: saputara1, category: "activities" },
  { id: 24, url: saputara2, category: "activities" },
  { id: 25, url: saputara3, category: "activities" },
  { id: 26, url: saputara4, category: "activities" },
  { id: 27, url: saputara5, category: "activities" },
  { id: 28, url: saputara6, category: "activities" },
  { id: 29, url: saputara7, category: "activities" },
  { id: 30, url: saputara8, category: "activities" },
  { id: 31, url: saputara9, category: "activities" },
  { id: 32, url: saputara10, category: "activities" },
  { id: 33, url: saputara11, category: "activities" },
  { id: 34, url: saputara12, category: "activities" },
  { id: 35, url: saputara13, category: "activities" },
  { id: 36, url: saputara14, category: "activities" },
  { id: 37, url: saputara15, category: "activities" },
  { id: 38, url: saputara16, category: "activities" },
  { id: 39, url: saputara17, category: "activities" },
  { id: 40, url: saputara18, category: "activities" },
  { id: 41, url: saputara19, category: "activities" },
  { id: 42, url: saputara20, category: "activities" },
];

const staticAmenities = [
  {
    title: "Luxury Rooms",
    description:
      "Experience comfort in our beautifully designed rooms with premium amenities.",
    icon: "bed",
    images: [familyroom, familyroom3, bed4, bed41, bed42],
  },
  {
    title: "Restaurant",
    description:
      "Savor gourmet meals prepared by our top chefs in a delightful ambiance.",
    icon: "utensils",
    images: [
      restaurant,
      restaurant2,
      restaurant3,
      restaurant4,
      restro1,
      restro2,
    ],
  },
  {
    title: "Saputara",
    description:
      "Relax and unwind in our temperature-controlled pool with stunning views.",
    icon: "pool",
    images: [saputara1, saputara2, saputara3],
  },
  // {
  //   title: "Mountain Views",
  //   description:
  //     "Enjoy breathtaking views of the surrounding mountains from our property.",
  //   icon: "mountain",
  //   images: [saputara4, saputara5, saputara6, saputara7],
  // },
  // {
  //   title: "Free WiFi",
  //   description:
  //     "Stay connected with high-speed internet access throughout the property.",
  //   icon: "wifi",
  //   images: [cou1, cou2, cou3],
  // },
  // {
  //   title: "Air Conditioning",
  //   description:
  //     "All rooms are equipped with climate control for your comfort.",
  //   icon: "ac",
  //   images: [bed6, bed61, bed62],
  // },
  // {
  //   title: "Parking",
  //   description: "Complimentary secure parking available for all guests.",
  //   icon: "parking",
  //   images: [saputara8, saputara9],
  // },
  // {
  //   title: "Entertainment",
  //   description: "Flat-screen TVs with satellite channels in all rooms.",
  //   icon: "tv",
  //   images: [cou4, cou5],
  // },
  // {
  //   title: "Bar & Lounge",
  //   description: "Unwind with refreshing drinks and cocktails at our bar.",
  //   icon: "bar",
  //   images: [restro3, restro4, restro5],
  // },
];

const staticGuestExperiences = [
  { url: familyroom2 },
  { url: familyroom },
  { url: familyroom3 },
];

const GalleryPage = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAmenityImages, setSelectedAmenityImages] = useState(null);
  const [showGuestExpSlider, setShowGuestExpSlider] = useState(false);
  const [currentGuestExpIndex, setCurrentGuestExpIndex] = useState(0);

  const categories = [
    { id: "all", name: "All", icon: <FiImage /> },
    { id: "Restaurant", name: "Restaurant", icon: <FaUtensils /> },
    { id: "rooms", name: "Rooms", icon: <FaBed /> },
    { id: "activities", name: "Activities", icon: <FaHiking /> },
  ];

  const getFilteredImages = () => {
    if (currentCategory === "all") return staticGalleryImages;
    return staticGalleryImages.filter(
      (img) => img.category === currentCategory
    );
  };

  const getIcon = (icon) => {
    switch (icon) {
      case "pool":
        return <FaSwimmingPool className="text-4xl text-blue-600 mb-4" />;
      case "bed":
        return <FaBed className="text-4xl text-blue-600 mb-4" />;
        // case "utensils":
        //   return <FaUtensils className="text-4xl text-blue-600 mb-4" />;
        // case "mountain":
        //   return <FaMountain className="text-4xl text-blue-600 mb-4" />;
        // case "wifi":
        //   return <FaWifi className="text-4xl text-blue-600 mb-4" />;
        // case "ac":
        //   return <FaSnowflake className="text-4xl text-blue-600 mb-4" />;
        // case "parking":
        //   return <FaParking className="text-4xl text-blue-600 mb-4" />;
        // case "tv":
        //   return <FaTv className="text-4xl text-blue-600 mb-4" />;
        // case "bar":
        return <FaCocktail className="text-4xl text-blue-600 mb-4" />;
      default:
        return <FaTree className="text-4xl text-blue-600 mb-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
        Gallery
      </h1>

      {/* 1. Filter Buttons */}
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

      {/* 2. Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredImages().map((img) => (
          <div
            key={img.id}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setSelectedImage({ url: img.url })}
          >
            <img src={img.url} alt="" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-medium">View Details</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Amenities Highlights */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
          Amenities Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {staticAmenities.map((amenity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={amenity.images[0]}
                  alt={amenity.title}
                  className="w-full h-full object-cover"
                />
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
                      className="w-16 h-16 rounded overflow-hidden"
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                  {amenity.images.length > 4 && (
                    <div className="w-16 h-16 rounded bg-blue-100 flex items-center justify-center">
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
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div
            className="relative max-w-4xl w-full"
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
              alt=""
              className="w-full max-h-[80vh] object-contain"
            />

            {selectedAmenityImages && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 mt-4">
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
                  className="bg-white bg-opacity-80 p-2 rounded-full"
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
                  className="bg-white bg-opacity-80 p-2 rounded-full"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Guest Experience Slider */}
      {showGuestExpSlider && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGuestExpSlider(false)}
              className="absolute -top-12 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <FiX size={24} />
            </button>
            <img
              src={staticGuestExperiences[currentGuestExpIndex].url}
              alt=""
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button
                onClick={() =>
                  setCurrentGuestExpIndex((prev) =>
                    prev === 0 ? staticGuestExperiences.length - 1 : prev - 1
                  )
                }
                className="bg-white bg-opacity-80 p-2 rounded-full"
              >
                <FiChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button
                onClick={() =>
                  setCurrentGuestExpIndex((prev) =>
                    prev === staticGuestExperiences.length - 1 ? 0 : prev + 1
                  )
                }
                className="bg-white bg-opacity-80 p-2 rounded-full"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
