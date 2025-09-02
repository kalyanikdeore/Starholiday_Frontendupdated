import { useState } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaPhoneAlt,
  FaBed,
  FaCalendarDay,
  FaWhatsapp,
} from "react-icons/fa";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    checkInDate: "",
    phoneNumber: "",
    roomType: "",
    selectedDay: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Format the message for WhatsApp
    const message = `New Booking Request:%0A%0A
Name: ${formData.firstName} ${formData.lastName}%0A
Check-in Date: ${formData.checkInDate}%0A
Phone: ${formData.phoneNumber}%0A
Room Type: ${formData.roomType}%0A
Selected Day: ${formData.selectedDay}`;

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/9850981210?text=${message}`, "_blank");
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const roomTypes = ["2 Beded", "4 Beded", "6 Beded"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-3xl mt-33 w-full mx-auto p-8 bg-white rounded-3xl shadow-2xl border border-indigo-100">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-2 tracking-tight">
          Book Your Stay
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Complete the form to reserve your room.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Section */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaUser /> Full Name*
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Check-in Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <FaCalendarAlt /> Check-in Date*
            </label>
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
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
              value={formData.phoneNumber}
              onChange={handleChange}
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
              value={formData.roomType}
              onChange={handleChange}
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
              value={formData.selectedDay}
              onChange={handleChange}
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
              className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-xl hover:from-green-600 hover:to-green-800 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
