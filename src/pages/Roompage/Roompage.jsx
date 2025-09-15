import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bed61 from "../../assets/Images/6bed1.jpg";
import bed62 from "../../assets/Images/6bed2.jpg";
import bedimge from "../../assets/Images/6bedimge.jpeg";
import sixbed from "../../assets/Images/sixbed.jpeg";
import six2 from "../../assets/Images/six2.jpg";

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
      className=" relative overflow-hidden rounded-2xl shadow-xl group"
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

// ✅ Image Gallery Component
const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { id: 1, src: sixbed, alt: "6 Bedded Room 1" },
    { id: 2, src: bed61, alt: "6 Bedded Room 2" },
    { id: 3, src: bed62, alt: "6 Bedded Room 3" },
    { id: 4, src: bedimge, alt: "6 Bedded Room 4" },
    { id: 5, src: six2, alt: "6 Bedded Room 5" },
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
          Explore our collection of stunning images showcasing our spacious
          6-bedded super deluxe AC family suite.
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Image Grid */}
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

// ✅ Video Testimonials Component
const VideoTestimonials = () => {
  const testimonials = [
    {
      name: "Super Deluxe 6 Bedded AC Rooms",
      video: "https://www.youtube.com/embed/wThS43_ZGY0?si=J5ik11opvS3lTRou",
      review:
        "Perfect for large families or groups, our spacious 6-bedded suite offers comfort and luxury for everyone.",
    },
    {
      name: "Super Deluxe 6 Bedded AC Rooms",
      video: "https://www.youtube.com/embed/AXS0TruTUj4?si=qbn4qIfy15T1_Vuh",
      review:
        "Experience the perfect blend of modern amenities and homely comfort in our family suite.",
    },
    {
      name: "Super Deluxe 6 Bedded AC Rooms",
      video: "https://www.youtube.com/embed/cUXa7jfI4Po",
      review:
        "Ideal for extended stays, our suite provides all the conveniences you need for a memorable family vacation.",
    },
  ];

  return (
    <section className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        6 Bedded Room Videos
      </h2>
      <p className="text-gray-700 text-lg max-w-xl mx-auto mb-10">
        Take a virtual tour of our spacious 6-bedded super deluxe AC family
        suite through these videos.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[400px] md:w-[450px] flex flex-col items-center"
          >
            <div className="w-full h-[300px] mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src={t.video}
                title={t.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg text-center text-blue-800">
              {t.name}
            </h3>
            <p className="text-gray-600 text-center text-base mt-2">
              {t.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ Main Page
const SixBedRoomPage = () => {
  const navigate = useNavigate();
  const carouselImages = [sixbed, bed61, bed62, bedimge];

  const handleBooking = () => navigate("/bookform");

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          minHeight: "70vh",
          background:
            "linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6)",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* Left Side - Content */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl duration-300 flex flex-col">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
                6 Bedded Super Deluxe AC Family Suite
              </h2>
              <p className="text-gray-600 mb-6 text-lg italic border-l-4 border-blue-500 pl-4">
                "Perfect for group vacations, this suite brings everyone
                together while ensuring ample space and convenience for all."
              </p>

              <p className="text-gray-700 mb-3 leading-relaxed">
                Traveling with family or a large group? Our 6-Bedded Super
                Deluxe AC Suite offers the perfect combination of space,
                privacy, and comfort. With options of twin size beds, this large
                suite includes a common area, ideal for relaxing or socializing
                after a day of sightseeing.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Designed with modern interiors, the suite also features
                air-conditioning, cozy seating, fresh linens, and essential
                amenities to make your stay comfortable and memorable.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                  <h4 className="text-gray-800 font-semibold mb-3 flex items-center text-lg">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    Room Specs
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✔ Size: 450 ft²</li>
                    <li>✔ 6 comfortable beds with premium mattresses</li>
                    <li>✔ Separate living area</li>
                    <li>✔ Capacity: Up to 12 guests</li>
                  </ul>
                </div>

                <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                  <h4 className="text-gray-800 font-semibold mb-3 flex items-center text-lg">
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                    Amenities
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✔ Central Air Conditioning</li>
                    <li>✔ Ensuite Bathrooms</li>
                    <li>✔ Flat-screen TV</li>
                    <li>✔ Mini Refrigerator</li>
                    <li>✔ Tea/Coffee Maker</li>
                    <li>✔ Free WiFi</li>
                    <li>✔ 24/7 Room Service</li>
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

      {/* Image Gallery Section */}
      <ImageGallery />

      {/* Video Testimonials Section */}
      <VideoTestimonials />
    </div>
  );
};

export default SixBedRoomPage;
    