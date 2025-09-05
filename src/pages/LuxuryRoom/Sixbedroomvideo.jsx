import React from "react";

// Testimonial Video Data with YouTube embed links
const Saputaravideo = [
  {
    name: "Super Deluxe 6 Beded AC Rooms",
    video: "https://www.youtube.com/embed/wThS43_ZGY0?si=J5ik11opvS3lTRou",
    review:
      "The Family Room was spacious, clean, and perfect for our weekend getaway. ",
  },
  {
    name: "Super Deluxe 6 Beded AC Rooms",
    video: "https://www.youtube.com/embed/AXS0TruTUj4?si=qbn4qIfy15T1_Vuh",
    review:
      "Our stay in the Family Room exceeded expectations. Beautiful view, comfy beds, and friendly staff.",
  },
  {
    name: "Super Deluxe 6 Beded AC Rooms",
    video: "https://www.youtube.com/embed/cUXa7jfI4Po",
    review:
      "Highly recommend the Family Room for families! The kids had a great time and everything was well-maintained.",
  },
];

// Card Component
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
      <h3 className="font-semibold text-lg text-center text-blue-800">
        {name}
      </h3>
      {/* <p className="text-gray-600 text-center text-base mt-2">{review}</p> */}
    </div>
  );
};

// Section Component
const Saputaravideosection = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        6 Bedded Video's
      </h2>
      <p className="text-gray-700 text-lg max-w-xl mx-auto mb-10">
        Discover what our happy guests have to say about their comfortable and
        memorable stays in our Family Room.
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
