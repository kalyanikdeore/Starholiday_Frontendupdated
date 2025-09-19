import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";

// Card Component
const CoupleRoomVideoCard = ({ name, review, videoUrl, videoFile }) => {
  // Determine which video source to use
  const videoSrc =
    videoUrl || (videoFile ? `${axiosInstance.fileURL}/${videoFile}` : null);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[400px] md:w-[450px] flex flex-col items-center">
      <div className="w-full h-[300px] mb-4">
        {videoSrc ? (
          <iframe
            className="w-full h-full rounded-lg"
            src={videoSrc}
            title={name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">No video available</span>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-lg text-center text-blue-800">
        {name}
      </h3>
      {/* {review && (
        <p className="text-gray-600 text-center text-base mt-2">{review}</p>
      )} */}
    </div>
  );
};

// Section Component
const CoupleRoomVideoSection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axiosInstance.get("/couple-room-videos");
        setVideos(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load videos");
        setLoading(false);
        console.error("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-4 text-center bg-gray-100">
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-600">Loading videos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-4 text-center bg-gray-100">
        <div className="flex justify-center items-center h-40">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Couple Room Video
      </h2>
      <p className="text-gray-700 text-lg max-w-xl mx-auto mb-10">
        Discover what our happy guests have to say about their comfortable and
        memorable stays in our Couple Room.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {videos.length > 0 ? (
          videos.map((video, index) => (
            <CoupleRoomVideoCard
              key={index}
              name={video.name}
              review={video.review}
              videoUrl={video.video_url}
              videoFile={video.video_file}
            />
          ))
        ) : (
          <p className="text-gray-600">No videos available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default CoupleRoomVideoSection;
