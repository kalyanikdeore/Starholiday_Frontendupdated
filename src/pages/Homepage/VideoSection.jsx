import React from "react";

export const VideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Container with full viewport size */}
      <div className="absolute inset-0 w-full h-full">
        {/* YouTube iframe with "cover" behavior */}
        <iframe
          className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://www.youtube.com/embed/cUXa7jfI4Po?autoplay=1&mute=1&loop=1&playlist=cUXa7jfI4Po&controls=0&modestbranding=1&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
