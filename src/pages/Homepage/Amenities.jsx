import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import axiosInstance from '../../services/api';

const Amenities = () => {
  const navigate = useNavigate();
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchAmenities();
  }, []);

  const fetchAmenities = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axiosInstance.get(`/facilities`);
      
      if (response.data.success) {
        setAmenities(response.data.data);
      } else {
        setError('Failed to fetch amenities');
      }
    } catch (err) {
      console.error('Error fetching amenities:', err);
      setError('Failed to load amenities. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAmenityClick = (id) => {
    navigate(`/about_facility#section-${id}`);
  };

  // Loading state
  if (loading) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
              Our Amenities
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Experience comfort, convenience, and world-class hospitality.
            </p>
            <div className="w-24 h-1 bg-orange-400 mx-auto mt-5 rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
              Our Amenities
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Experience comfort, convenience, and world-class hospitality.
            </p>
            <div className="w-24 h-1 bg-orange-400 mx-auto mt-5 rounded"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-red-500 text-lg mb-4">{error}</p>
            <button
              onClick={fetchAmenities}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (amenities.length === 0) {
    return (
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
              Our Amenities
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Experience comfort, convenience, and world-class hospitality.
            </p>
            <div className="w-24 h-1 bg-orange-400 mx-auto mt-5 rounded"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-500 text-lg">No amenities available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight">
            Our Amenities
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Experience comfort, convenience, and world-class hospitality.
          </p>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-5 rounded"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden relative">
                <div
                  className="w-full h-48 overflow-hidden relative cursor-pointer"
                  onClick={() => handleAmenityClick(item.id)}
                >
                  <img
                    src={item.image || '/placeholder-image.jpg'}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-80 transition duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-700 transition">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.subtitle}</p>

                {/* Arrow Button */}
                <div
                  onClick={() => handleAmenityClick(item.id)}
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition cursor-pointer"
                >
                  <span className="text-sm">View Details</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;