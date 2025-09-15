import React, { useState, useEffect } from "react";

function VideoSection() {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/video-section");

        if (response.status === 404) {
          throw new Error("API endpoint not found. Check your routes.");
        }

        if (!response.ok) {
          throw new Error(
            `Failed to fetch video: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        // Check if there's an active video section
        if (!data.is_active) {
          setError("No active video section found");
          setLoading(false);
          return;
        }

        setVideo(data);
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
              // title={video.title || "Featured Video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : video.video_type === "upload" && video.uploaded_video_url ? (
            <video
              className="w-full h-full"
              // controls={video.show_controls}
              // autoPlay={video.autoplay}
              // muted={video.muted}
              // loop={video.loop}
            >
              <source src={video.uploaded_video_url} type="video/mp4" />
              <source src={video.uploaded_video_url} type="video/webm" />
              <source src={video.uploaded_video_url} type="video/ogg" />
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
            {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {video.video_type === "youtube" ? "YouTube" : "Uploaded Video"}
            </span> */}
            {video.title && (
              <span className="ml-2 text-sm text-gray-700 font-medium">
                {/* {video.title} */}
              </span>
            )}
          </div>

          {/* {video.video_type === "youtube" && video.youtube_url && (
            <a
              href={video.youtube_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-500 hover:text-blue-700"
            >
              Watch on YouTube
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
