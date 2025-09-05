import React from "react";

const ShilpiResort = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-16 relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image with decorative elements (now on the right) */}
          <div className="lg:w-1/2 relative z-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl z-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg"
                alt="Star Holiday Resort Swimming Pool"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-20"></div>
            </div>
          </div>

          {/* Content (now on the left) - above decorative elements */}
          <div className="lg:w-1/2 relative z-30">
            <div className="bg-white p-8 rounded-xl relative z-40">
              <h3 className="text-4xl font-bold text-blue-900 mb-3">
                <span className="text-blue-600">Swimming</span> Pool
              </h3>

              <div className="flex items-center mb-6">
                <div className="w-16 h-1 bg-blue-600 mr-4 z-40"></div>
                <p className="text-lg font-semibold text-blue-900 z-40">
                  Open 24/7 — Complimentary for all our guests
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg z-40">
                Dive into relaxation at our crystal-clear{" "}
                <strong>swimming pool</strong>, designed to refresh and
                rejuvenate you at any time of the day. Whether you want to enjoy
                a morning swim, unwind after a busy day, or simply lounge by the
                poolside, we’ve created the perfect space for you.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg z-40">
                At <strong>Star Holiday Resort, Saputara</strong>, we combine
                modern amenities with traditional hospitality to give you a
                memorable stay. Our poolside ambience adds to the charm, making
                your getaway truly special and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShilpiResort;
