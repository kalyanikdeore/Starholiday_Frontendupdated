import React, { useState, useEffect } from "react";

const StarResortvideo = () => {
  const [resortVideoData, setResortVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/resort-video");

        // Check content type first
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Non-JSON response:", text.substring(0, 200));
          throw new Error("Server returned non-JSON response");
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response:", result);

        // Check if the response has success property
        if (result.success === false) {
          throw new Error(result.message || "No resort video data available");
        }

        // Handle both data structures: direct data or {data: {...}}
        const videoData = result.data || result;

        if (!videoData) {
          throw new Error("No resort video data available");
        }

        setResortVideoData(videoData);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching resort video data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-33 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex justify-center items-center h-64">
          <div className="text-xl">Loading video content...</div>
        </div>
      </section>
    );
  }

  if (error || !resortVideoData) {
    return (
      <section className="bg-white py-33 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex justify-center items-center h-64">
          <div className="text-xl text-red-600">
            Error loading video content: {error || "No data available"}
          </div>
        </div>
      </section>
    );
  }

  // Build video parameters
  const videoParams = [];
  if (resortVideoData.autoplay) videoParams.push("autoplay=1");
  if (resortVideoData.mute) videoParams.push("mute=1");
  if (resortVideoData.loop) videoParams.push("loop=1");

  const getYoutubeVideoId = (url) => {
    if (!url) return "";
    const match = url.match(/embed\/([^?]+)/) || url.match(/v=([^&]+)/);
    return match ? match[1] : "";
  };

  const videoUrl =
    resortVideoData.use_uploaded_video && resortVideoData.video_url
      ? `${resortVideoData.video_url}?${videoParams.join("&")}`
      : `${resortVideoData.youtube_url}?${videoParams.join(
          "&"
        )}&playlist=${getYoutubeVideoId(resortVideoData.youtube_url)}`;

  return (
    <section className="bg-white py-33 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left side - Video Embed */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="w-full aspect-video">
            {resortVideoData.use_uploaded_video && resortVideoData.video_url ? (
              <video
                className="w-full h-full rounded-lg shadow-lg"
                src={videoUrl}
                title={resortVideoData.title}
                controls
                autoPlay={resortVideoData.autoplay}
                muted={resortVideoData.mute}
                loop={resortVideoData.loop}
              />
            ) : (
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={videoUrl}
                title={resortVideoData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className="md:w-1/2">
          <h3 className="text-lg text-yellow-700 font-semibold mb-1">
            {resortVideoData.welcome_text}
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 border-b-4 w-fit border-blue-950 pb-1">
            {resortVideoData.title}
          </h1>
          <div className="text-gray-700 leading-relaxed mt-4 whitespace-pre-line">
            {resortVideoData.description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarResortvideo;
