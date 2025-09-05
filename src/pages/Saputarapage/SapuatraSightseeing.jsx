import React from "react";

import saputara1 from "../../assets/Images/saputara1.jpg";

const ShilpiResort = () => {
  return (
    <>
      {/* Section 1 - Image Left, Text Right */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Left */}
            <div className="lg:w-1/2 relative group">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <img
                  src={saputara1}
                  alt="Star Holiday Resort"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Text Right */}
            <div className="lg:w-1/2 space-y-6">
              <div className="mb-2">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                  Premium Amenities
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Sapuatra <span className="text-blue-600"> Sightseeing</span>
                </h2>
                <div className="w-20 h-1 bg-blue-500 mb-6"></div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Saputara's main attractions include the beautiful Saputara
                  Lake with boating facilities, the picturesque Sunset Point
                  with panoramic views, the historically rich Saputara Tribal
                  Museum, the lush Vansda National Park, and the captivating
                  Gira Falls. Visitors can also enjoy the unique terraced Step
                  Garden, the serene Lake Garden, and the thrilling Saputara
                  Ropeway.
                </p>
                <p className="text-lg leading-relaxed">
                  Sunset Point: A scenic tableland offering breathtaking views
                  of the sunset, perfect for photography and relaxation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShilpiResort;
