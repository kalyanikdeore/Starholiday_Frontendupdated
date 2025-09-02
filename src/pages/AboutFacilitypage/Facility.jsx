import React from "react";

const ShilpiResort = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-16 relative z-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image with decorative elements */}
          <div className="lg:w-1/2 relative z-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl z-10">
              <img
                src="https://www.charleshotel.com/images/content/spafitnesscardsbg/Fitness_Room2.jpg?016454877122577072"
                alt="Star Holiday Resort Fitness Club"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105 z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-20"></div>
            </div>

            {/* Decorative elements */}
            {/* <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-amber-400 rounded-lg z-0 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 border-4 border-blue-900 rounded-full z-0 hidden md:block"></div> */}
          </div>

          {/* Content with proper z-index hierarchy */}
          <div className="lg:w-1/2 relative z-30">
            <div className="bg-white p-8 rounded-xl relative z-40">
              <h3 className="text-4xl font-bold text-blue-900 mb-3 relative z-50">
                <span className="text-blue-600">The</span> Fitness Club
              </h3>

              <div className="flex items-center mb-6 relative z-50">
                <div className="w-16 h-1 bg-blue-600 mr-4 z-50"></div>
                <p className="text-lg font-semibold text-blue-900 z-50">
                  Complimentary for our guests 24 hours a day
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4 text-lg relative z-50">
                At Star Holiday Resort, we believe in creating unforgettable
                memories through luxury, comfort, and exceptional service.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg relative z-50">
                Located in the heart of Saputara, our resort offers the perfect
                getaway with a blend of traditional hospitality and modern
                amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShilpiResort;
