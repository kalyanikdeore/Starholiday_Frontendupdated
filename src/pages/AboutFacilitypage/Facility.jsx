import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import axiosInstance from '../../services/api';

const Facility = () => {
  const location = useLocation();
  const [about, setAbout] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchFacilities();
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#section-", "");
      setActiveSection(parseInt(id));

      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          element.classList.add("highlighted");
          setTimeout(() => {
            element.classList.remove("highlighted");
          }, 2000);
        }
      }, 500);
    }
  }, [location, facilities]); // Added facilities to dependencies

  const fetchFacilities = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axiosInstance.get(`/facilities`);
      
      if (response.data.success) {
        setFacilities(response.data.data);
      } else {
        setError('Failed to fetch facilities');
      }
    } catch (err) {
      console.error('Error fetching facilities:', err);
      setError('Failed to load facilities. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans min-h-screen py-16">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-300 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          
          <div className="flex flex-col items-center w-full max-w-7xl gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-3xl p-8 w-full shadow-lg">
                <div className="md:w-2/5 w-full">
                  <div className="w-full h-72 bg-gray-300 rounded-2xl animate-pulse"></div>
                </div>
                <div className="md:w-3/5 w-full space-y-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-8 bg-gray-300 rounded w-48 ml-4 animate-pulse"></div>
                  </div>
                  <div className="h-6 bg-gray-300 rounded w-32 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-4/5 animate-pulse"></div>
                  <div className="flex gap-2 mt-8">
                    <div className="h-6 bg-gray-300 rounded-full w-20 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded-full w-24 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded-full w-16 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans min-h-screen py-16">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our exceptional amenities designed to enhance your stay
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <button
              onClick={fetchFacilities}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Empty state
  if (facilities.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans min-h-screen py-16">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our exceptional amenities designed to enhance your stay
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <p className="text-gray-500 text-lg">No facilities available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans min-h-screen">
      {/* Room Types */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center text-blue-900 mb-4"
          >
            Our Facilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12"
          >
            Discover our exceptional amenities designed to enhance your stay and
            create memorable experiences
          </motion.p>

          <div className="flex flex-col items-center w-full max-w-7xl gap-8 ">
            {facilities.map((item, index) => (
              <motion.div
                key={item.id}
                id={`section-${item.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 group rounded-3xl p-8 transition-all duration-500 overflow-hidden w-full
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl ring-2 ring-blue-300"
                      : "bg-white shadow-lg hover:shadow-xl"
                  } ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="md:w-2/5 w-full relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={item.image || '/placeholder-image.jpg'}
                      alt={item.name}
                      className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                      onError={(e) => {
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 w-full py-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-lg font-semibold text-blue-600 mb-5">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facility;