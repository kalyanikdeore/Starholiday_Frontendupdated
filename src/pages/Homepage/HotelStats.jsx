import React from "react";

const stats = [
  { number: 768, label: "GUEST STAY" },
  { number: 632, label: "BOOK ROOM" },
  { number: 1024, label: "MEMBER STAY" },
  { number: 256, label: "MEALS SERVED" },
];

const HotelStats = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full py-10">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">
          HOTEL STATISTICS
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-center px-4">
          {stats.map((item, index) => (
            <div key={index} className="text-white px-6">
              <h3 className="text-4xl font-bold">{item.number}</h3>
              <p className="mt-2 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelStats;
