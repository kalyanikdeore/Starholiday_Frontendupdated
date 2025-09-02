import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { number: 1000, label: "Guest Stay" },
  { number: 1000, label: "BOOK ROOM" },
  { number: 300, label: "MEMBER STAY" },
  { number: 50, label: "MEALS SERVED" },
];

const Impact = () => {
  return (
    <section className="py-20 bg-[#436f6e] text-[#e0dbdb]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Hotel statistics
          </motion.h2>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#d3a070] max-w-3xl mx-auto"
          >
            Empowered women create circles of prosperity that transform families
            and communities
          </motion.p> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.number} duration={3} />+
              </div>
              <div className="text-lg text-[#d3a070]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
