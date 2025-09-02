import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/919850981210?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Form */}
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium  mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc] transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc] transition-all"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc] transition-all"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md"
            >
              Send Message via WhatsApp
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div variants={fadeIn} className="space-y-8">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-[#155dfc] mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-[#155dfc] p-3 rounded-full text-white flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600 mt-1">9850981210</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#155dfc] p-3 rounded-full text-white flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600 mt-1">starholiday@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#155dfc] p-3 rounded-full text-white flex-shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 mt-1">+91 98509 81210</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#155dfc] p-3 rounded-full text-white flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Working Hours
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Monday - Friday: 9AM to 6PM
                  </p>
                  <p className="text-gray-600">Saturday: 9AM to 1PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-[#155dfc] p-3 rounded-full text-white">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Manufacturing Unit
              </h3>
            </div>
            <address className="text-gray-600 not-italic pl-14 space-y-2">
              <p>Star Holiday Restro Saputara</p>
            </address>
          </div>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <motion.section
        variants={fadeIn}
        className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold text-[#155dfc] mb-3">
            Our Location
          </h2>
          <p className="text-gray-600 text-lg">
            Visit our resort to experience comfort and nature
          </p>
        </div>
        <div className="h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.620485225672!2d72.8533!3d19.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf02794b92b50b30e!2sSTAR%20HOLIDAY%20HOME%20HILL%20RESORT!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Star Holiday Home Hill Resort Location"
          ></iframe>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ContactUsPage;
