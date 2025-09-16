import React, { useState, useEffect } from 'react';
import { FiImage } from 'react-icons/fi';
import axiosInstance from '../../services/api';

const FestivalGallery = () => {
  const [categories, setCategories] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFestivalGalleryData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get('/festival-gallery');
        
        if (response.data.success) {
          const apiData = response.data.data;
          
          // Transform API data to match frontend structure
          const transformedCategories = [
            { id: "all", name: "All", icon: <FiImage /> }
          ];
          
          const transformedGalleryData = [];
          
          apiData.forEach(category => {
            // Add category to filter list
            transformedCategories.push({
              id: category.id.toString(),
              name: category.name
            });
            
            // Add gallery images
            category.galleries.forEach(gallery => {
              gallery.images.forEach(imageUrl => {
                transformedGalleryData.push({
                  id: `${category.id}-${gallery.id}-${Math.random().toString(36).substr(2, 9)}`,
                  url: imageUrl,
                  category: category.name,
                  categoryId: category.id.toString()
                });
              });
            });
          });
          
          setCategories(transformedCategories);
          setGalleryData(transformedGalleryData);
        } else {
          setError(response.data.message || 'Failed to load gallery data');
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching festival gallery data:', err);
        setError('Failed to load festival gallery');
        setLoading(false);
      }
    };

    fetchFestivalGalleryData();
  }, []);

  const getFilteredImages = () => {
    if (currentCategory === "all") return galleryData;
    return galleryData.filter(img => img.categoryId === currentCategory);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-yellow-50 py-12 px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
          Festival Gallery
        </h1>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-yellow-50 py-12 px-6">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">
          Festival Gallery
        </h1>
        <div className="text-center text-red-500">
          <p>{error}</p>
        </div>
      </div>
    );
  }

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
      {galleryData.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          <p>No festival images available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredImages().map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer group"
            >
              <img 
                src={img.url} 
                alt={img.category} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  console.error('Image failed to load:', img.url);
                  e.target.src = 'https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Image+Not+Found';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FestivalGallery;