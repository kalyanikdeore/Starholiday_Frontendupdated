import React from "react";

// Testimonial Video Data with YouTube embed links
const Saputaravideo = [
  {
    name: "Saputara Hill Station Video's",
    video:
      "https://www.youtube.com/embed/cUXa7jfI4Po?autoplay=1&mute=1&loop=1&playlist=cUXa7jfI4Po",
    review: "Great experience. Will come back again.",
  },
  {
    name: "Saputara Hill Station Video's",
    video:
      "https://www.youtube.com/embed/cUXa7jfI4Po?autoplay=1&mute=1&loop=1&playlist=cUXa7jfI4Po",
    review: "Very professional and efficient!",
  },
  {
    name: "Saputara Hill Station Video's",
    video:
      "https://www.youtube.com/embed/cUXa7jfI4Po?autoplay=1&mute=1&loop=1&playlist=cUXa7jfI4Po",
    review: "Excellent service! Highly recommend.",
  },
];

// Card Component (using iframe instead of video tag)
const Saputaravideocard = ({ name, review, video }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-[400px] md:w-[450px] flex flex-col items-center">
      <div className="w-full h-[300px] mb-4">
        <iframe
          className="w-full h-full rounded-lg"
          src={video}
          title={name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="font-semibold text-lg text-center">{name}</h3>
      <p className="text-gray-600 text-center text-lg my-2">{review}</p>
    </div>
  );
};

// Section Wrapper
const Saputaravideosection = () => {
  return (
    <section className="py-12 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        Saputara Hill Station Video's
      </h2>
      <p className="text-gray-600 text-xl max-w-xl mx-auto mb-10">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences visiting Saputara.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {Saputaravideo.map((t, index) => (
          <Saputaravideocard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Saputaravideosection;
