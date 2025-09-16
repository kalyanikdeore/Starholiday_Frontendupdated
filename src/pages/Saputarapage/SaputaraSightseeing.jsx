import React from "react";
import { useEffect,useState } from "react";

import saputara1 from "../../assets/Images/saputara1.jpg";
import axiosInstance from "../../services/api";

const ShilpiResort = () => {

  const [sightseeingData, setSightseeingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchSightseeingData = async () => {
        try {
          setLoading(true);
          // Fetch data from the API endpoint
          const response = await axiosInstance.get('/about-saputara/sightseeing');
          
          if (response.data.success) {
            setSightseeingData(response.data.data);
          } else {
            setError(response.data.message || 'Failed to load data');
          }
          setLoading(false);
        } catch (err) {
          console.error('Error fetching about data:', err);
          setError('Failed to load About Saputara data');
          setLoading(false);
        }
      };
  
      fetchSightseeingData();
    }, []);
  
    // Handle image loading errors
    const handleImageError = (e) => {
      console.error('Image failed to load, using fallback');
      e.target.src = saputara;
    };
  
    if (loading) {
      return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </section>
      );
    }
  
    if (error) {
      return (
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center h-64">
              <p className="text-red-500 text-lg">{error}</p>
            </div>
          </div>
        </section>
      );
    }
  return (
    <>
      {/* Section 1 - Image Left, Text Right */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Left */}
            <div className="lg:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img
                  src={sightseeingData.image || saputara1}
                  alt="Star Holiday Resort"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:w-1/2 space-y-6">
              <div className="mb-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Premium Amenities
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Saputara <span className="text-blue-600"> Sightseeing</span>
                </h2>
                <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              </div>

              <div className="space-y-4 text-gray-700">
                {sightseeingData && sightseeingData.content ? (
                <div 
                  className="text-lg leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: sightseeingData.content }}
                />
              ) : (
                <>
                <p className="text-lg leading-relaxed">
                  Saputara's main attractions include the beautiful Saputara
                  Lake with boating facilities, the picturesque Sunset Point
                  with panoramic views, the historically rich Saputara Tribal
                  Museum, the lush Vansda National Park, and the captivating
                  Gira Falls. Visitors can also enjoy the unique terraced Step
                  Garden, the serene Lake Garden, and the thrilling Saputara
                  Ropeway.
                </p>
                <p className="text-lg leading-relaxed">
                  Sunset Point: A scenic tableland offering breathtaking views
                  of the sunset, perfect for photography and relaxation.
                </p>
                </>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShilpiResort;
