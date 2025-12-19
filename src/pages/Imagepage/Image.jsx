import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";

const Photos = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching gallery data...");

      // Fetch images and videos concurrently
      const [imagesResponse, videosResponse] = await Promise.all([
        axiosInstance.get("/gallery-images"),
        axiosInstance.get("/gallery-videos"),
      ]);

      console.log("Images response:", imagesResponse);
      console.log("Videos response:", videosResponse);

      setImages(imagesResponse.data || []);
      setVideos(videosResponse.data || []);
    } catch (err) {
      console.error("Error fetching gallery data:", err);
      console.error("Error details:", err.response?.data);
      setError(
        `Failed to load gallery data: ${err.message}. Please try again later.`
      );
    } finally {
      setLoading(false);
    }
  };

  const getMediaUrl = (src) => {
    if (!src) {
      console.warn("Empty src provided");
      return "https://via.placeholder.com/400x300?text=Image+Not+Found";
    }

    if (src.startsWith("http")) {
      return src; // External URL
    }

    // For uploaded files, construct the full URL
    const fullUrl = `${axiosInstance.defaults.fileURL}/${src}`;
    console.log("Constructed media URL:", fullUrl);
    return fullUrl;
  };

  if (loading) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-lg">{error}</p>
          <button
            onClick={fetchGalleryData}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen pt-20">
      {/* Photos Section */}
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Images
      </h2>

      {images.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No photos available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((item, index) => (
            <div
              key={item.id || index}
              className="text-center bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={getMediaUrl(item.src)}
                  alt={item.caption || `Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.src}`);
                    e.target.src =
                      "https://via.placeholder.com/400x300?text=Image+Not+Found";
                  }}
                  onLoad={() => console.log(`Image loaded: ${item.src}`)}
                />
              </div>
              <p className="mt-4 p-4 text-lg font-bold text-gray-800 border-t border-gray-200">
                {item.caption || `Image ${index + 1}`}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Videos Section */}
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Videos
      </h2>

      {videos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No videos available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id || index}
              className="text-center bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-80 overflow-hidden">
                {video.type === "external" || video.src.startsWith("http") ? (
                  // External video (YouTube, Vimeo, etc.)
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <iframe
                      src={video.src}
                      className="w-full h-full"
                      title={video.caption || `Video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  // Uploaded video file
                  <video
                    controls
                    className="w-full h-full object-cover"
                    poster="https://via.placeholder.com/400x300?text=Video+Thumbnail"
                    onError={() =>
                      console.error(`Failed to load video: ${video.src}`)
                    }
                  >
                    <source src={getMediaUrl(video.src)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <p className="mt-4 p-4 text-lg font-bold text-gray-800 border-t border-gray-200">
                {video.caption || `Video ${index + 1}`}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photos;
