import React, { useEffect, useState } from "react";
import Facilitydetail from "./Facilitydetail";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Facility = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#section-", "");
      setActiveSection(parseInt(id));

      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          element.classList.add("highlighted");
          setTimeout(() => {
            element.classList.remove("highlighted");
          }, 2000);
        }
      }, 500);
    }
  }, [location]);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans min-h-screen">
      {/* Room Types */}
      <section className="py-16 md:py-20 relative">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-center text-blue-900 mb-4"
          >
            Our Facilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12"
          >
            Discover our exceptional amenities designed to enhance your stay and
            create memorable experiences
          </motion.p>

          <div className="flex flex-col items-center w-full max-w-7xl gap-8 ">
            {Facilitydetail.roomTypes?.map((item, index) => (
              <motion.div
                key={item.id}
                id={`section-${item.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 group rounded-3xl p-8 transition-all duration-500 overflow-hidden w-full
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl ring-2 ring-blue-300"
                      : "bg-white shadow-lg hover:shadow-xl"
                  } ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div className="md:w-2/5 w-full relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-w-16 aspect-h-12">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Floating icon */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white opacity-80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-3/5 w-full py-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-lg font-semibold text-blue-600 mb-5">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-8">
                    {item.features?.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facility;
