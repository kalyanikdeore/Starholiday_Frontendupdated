import React from "react";
import { useNavigate } from "react-router-dom";

function VideoSection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center text-center mt-10 px-4">
      {/* Single YouTube Embed */}
      <div className="w-full max-w-7xl">
        <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/_mo_OUwrWNE?si=JIUe2YNUYasbXODe"
            title="Hotel Video Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
