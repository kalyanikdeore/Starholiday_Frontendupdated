import React, { useState } from "react";

const PlanAVisit = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
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

    // Construct WhatsApp message
    const whatsappMessage = `Hello, I want to plan a visit.%0A
Name: ${formData.name}%0A
Company: ${formData.company}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Message: ${formData.message}`;

    // WhatsApp API link (use wa.me for mobile/desktop)
    const phoneNumber = "919850981210"; // ✅ remove "+" sign for wa.me links
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-4xl mb-6 text-blue-900 text-center font-semibold">
        PLAN A VISIT
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Write what do you want"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PlanAVisit;
