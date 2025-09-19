import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import axiosInstance from "../../services/api";
// Import axios to use its isCancel method directly
import axios from "axios";

const Impact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/impact-stats", {
          signal,
        });

        const data = response.data;

        if (Array.isArray(data)) {
          setStats(data);
        } else if (data && data.data && Array.isArray(data.data)) {
          setStats(data.data);
        } else {
          throw new Error("Invalid data format received from API");
        }

        setError(null);
      } catch (error) {
        // Use axios.isCancel instead of axiosInstance.isCancel
        if (!axios.isCancel(error)) {
          console.error("Error fetching impact stats:", error);
          setError(error.message);
          setStats([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    return () => {
      abortController.abort();
    };
  }, []);

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Item variants for individual stat cards
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-[#2c5554] to-[#436f6e] text-[#e0dbdb] relative overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Subtle background pattern with proper z-index */}
      <div className="absolute inset-0 opacity-10" style={{ zIndex: 2 }}>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')]"></div>
      </div>

      {/* Decorative elements with proper z-index */}
      <div
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#3a6362] opacity-20 mix-blend-soft-light"
        style={{ zIndex: 2 }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-[#d3a070] opacity-15 mix-blend-soft-light"
        style={{ zIndex: 2 }}
      ></div>

      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
        style={{ zIndex: 3 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Hotel Statistics
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="text-lg max-w-2xl mx-auto opacity-90"
          >
            Our commitment to excellence is reflected in these numbers
          </motion.p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Show loading placeholders */}
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center 
                         border border-white/20 flex flex-col justify-center items-center"
                style={{ zIndex: 5, height: "150px" }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                  --
                </div>
                <div className="text-sm md:text-base font-medium text-[#d3a070] uppercase tracking-wider">
                  Loading...
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-lg opacity-80 text-red-200">
              Error loading impact data: {error}
            </p>
          </div>
        ) : stats.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8"
            style={{ position: "relative", zIndex: 4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center 
                         border border-white/20 hover:bg-white/15 transition-all 
                         duration-300 ease-in-out transform hover:-translate-y-1 
                         shadow-lg hover:shadow-xl flex flex-col justify-center items-center"
                style={{ zIndex: 5 }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">
                  {isInView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix || ""}
                      delay={index * 0.2}
                    />
                  )}
                </div>
                <div className="text-sm md:text-base font-medium text-[#d3a070] uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg opacity-80">
              No impact data available at this time.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Impact;
