import React from "react";

const StarResort = () => {
  return (
    <section className="bg-white py-33 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left side - YouTube Embed */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/cUXa7jfI4Po?autoplay=1&mute=1&loop=1&playlist=cUXa7jfI4Po"
              title="Saputara - Star Holiday Resort"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className="md:w-1/2">
          <h3 className="text-lg text-yellow-700 font-semibold mb-1">
            Welcome to
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4 border-b-4 w-fit border-blue-950 pb-1">
            Star Holiday Resort
          </h1>
          <p className="text-gray-700 leading-relaxed mt-4">
            At Star Holiday Resort, we believe in creating unforgettable
            memories through luxury, comfort, and exceptional service. Located
            in the heart of Saputara, our resort offers the perfect getaway with
            a blend of traditional hospitality and modern amenities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            With years of experience in hosting families, solo travelers, and
            corporate guests, we take pride in our secure and peaceful
            environment. Our team is committed to ensuring your stay is not only
            comfortable but truly memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StarResort;
