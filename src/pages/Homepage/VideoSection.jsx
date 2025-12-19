import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";

function VideoSection() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axiosInstance.get("/video-section");

        if (response.status === 404) {
          throw new Error("API endpoint not found. Check your routes.");
        }

        // Check if there's an active video section
        if (!response.data.is_active) {
          setError("No active video section found");
          setLoading(false);
          return;
        }

        setVideo(response.data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching video:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
        <div className="w-full max-w-7xl">
          <div className="aspect-video rounded-lg shadow-lg overflow-hidden flex items-center justify-center bg-gray-200">
            <div className="animate-pulse text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <p>Loading video...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
        <div className="w-full max-w-7xl">
          <div className="aspect-video rounded-lg shadow-lg overflow-hidden flex items-center justify-center bg-gray-200">
            <div className="text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>{error || "Video not available"}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Build YouTube embed URL
  const youtubeEmbedUrl =
    video.video_type === "youtube" && video.youtube_id
      ? `https://www.youtube.com/embed/${video.youtube_id}?autoplay=${
          video.autoplay ? 1 : 0
        }&mute=${video.muted ? 1 : 0}&loop=${video.loop ? 1 : 0}&controls=${
          video.show_controls ? 1 : 0
        }`
      : null;

  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
      <div className="w-full max-w-7xl">
        <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
          {video.video_type === "youtube" && youtubeEmbedUrl ? (
            <iframe
              className="w-full h-full"
              src={youtubeEmbedUrl}
              title={video.title || "Featured Video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : video.video_type === "upload" && video.uploaded_video_url ? (
            <video
              className="w-full h-full"
              controls={video.show_controls}
              autoPlay={video.autoplay}
              muted={video.muted}
              loop={video.loop}
            >
              <source
                src={`${axiosInstance.defaults.fileURL}${video.uploaded_video_url}`}
                type="video/mp4"
              />
              <source
                src={`${axiosInstance.defaults.fileURL}${video.uploaded_video_url}`}
                type="video/webm"
              />
              <source
                src={`${axiosInstance.defaults.fileURL}${video.uploaded_video_url}`}
                type="video/ogg"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">Video not available</p>
            </div>
          )}
        </div>

        {/* Video Information */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            {video.title && (
              <h3 className="text-xl font-semibold text-gray-800">
                {/* {video.title} */}
              </h3>
            )}
          </div>
          {video.description && (
            <p className="text-gray-600">{video.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
