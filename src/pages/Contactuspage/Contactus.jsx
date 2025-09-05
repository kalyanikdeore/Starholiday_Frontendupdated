import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Clock } from "lucide-react";
import {
  FaUser,
  FaCalendarAlt,
  FaPhoneAlt,
  FaBed,
  FaCalendarDay,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socials = [
  {
    Icon: FaFacebookF,
    color: "#8b9ec6",
    url: "https://www.facebook.com/starholidayhomeandhillresort",
  },
  {
    Icon: FaYoutube,
    color: "#8b9ec6",
    url: "https://www.youtube.com/results?search_query=star+holiday+home+saputara",
  },
  {
    Icon: FaInstagram,
    color: "#8b9ec6",
    url: "https://www.instagram.com/starholidayhome/",
  },
];

const ContactUsPage = () => {
  // Contact form state
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Booking form state
  const [bookingFormData, setBookingFormData] = useState({
    firstName: "",
    lastName: "",
    checkInDate: "",
    phoneNumber: "",
    roomType: "",
    selectedDay: "",
  });

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const roomTypes = [
    "2 Bedded super deluxe AC couple rooms",
    "4 Bedded super deluxe AC family rooms",
    "6 Bedded super deluxe AC family Suite",
  ];

  const handleContactChange = (e) => {
    const { id, value } = e.target;
    setContactFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Contact Form Submission:%0A%0A
Name: ${contactFormData.name}%0A
Email: ${contactFormData.email}%0A
Phone: ${contactFormData.phone}%0A
Message: ${contactFormData.message}`;
    const whatsappUrl = `https://wa.me/919850981210?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    setContactFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const message = `New Booking Request:%0A%0A
Name: ${bookingFormData.firstName} ${bookingFormData.lastName}%0A
Check-in Date: ${bookingFormData.checkInDate}%0A
Phone: ${bookingFormData.phoneNumber}%0A
Room Type: ${bookingFormData.roomType}%0A
Selected Day: ${bookingFormData.selectedDay}`;
    window.open(`https://wa.me/9850981210?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Booking Form */}
        <motion.div
          variants={fadeIn}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Book Your Stay
          </h2>
          <form onSubmit={handleBookingSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaUser /> Full Name*
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={bookingFormData.firstName}
                  onChange={handleBookingChange}
                  required
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={bookingFormData.lastName}
                  onChange={handleBookingChange}
                  required
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Check-in Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarAlt /> Date*
              </label>
              <input
                type="date"
                name="checkInDate"
                value={bookingFormData.checkInDate}
                onChange={handleBookingChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaPhoneAlt /> Phone Number*
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={bookingFormData.phoneNumber}
                onChange={handleBookingChange}
                placeholder="+91 XXXXXXXXXX"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaBed /> Room Type*
              </label>
              <select
                name="roomType"
                value={bookingFormData.roomType}
                onChange={handleBookingChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Room Type</option>
                {roomTypes.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </select>
            </div>

            {/* Day Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarDay /> Choose Any Day*
              </label>
              <select
                name="selectedDay"
                value={bookingFormData.selectedDay}
                onChange={handleBookingChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select Day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-xl" />
                Send Booking
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div variants={fadeIn} className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-full text-white flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Booking Contact Number
                  </h3>
                  <p className="text-gray-600 mt-1">9850981210</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-full text-white flex-shrink-0">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Whatsapp Contact Number
                  </h3>
                  <p className="text-gray-600 mt-1">9850981210</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-full text-white flex-shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Reception Contact
                  </h3>
                  <p className="text-gray-600 mt-1">+91 98509 81400</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-full text-white flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600 mt-1">starholiday@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-full text-white flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Booking Hours
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Monday - Friday: 9AM to 6PM
                  </p>
                  <p className="text-gray-600">Saturday: 9AM to 1PM</p>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-5">
                {socials.map(({ Icon, color, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full shadow-md transition-transform transform hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="text-white text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Google Map Section */}
      <motion.section
        variants={fadeIn}
        className="mt-16 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-3">
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
