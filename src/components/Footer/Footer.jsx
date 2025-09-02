import React, { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const pageLinks = [
    { name: "About Us", path: "/about_hill" },
    { name: "Facilities", path: "/about_facility" },
    { name: "Saputara", path: "/Saputara" },
    { name: "Book Now", path: "/bookform" },
    { name: "Contact Us", path: "/contact_us" },
  ];

  const socials = [
    {
      Icon: FaFacebookF,
      color: "#3b5998",
      url: "https://www.facebook.com/starholidayhomeandhillresort",
    },
    {
      Icon: FaYoutube,
      color: "#FF0000",
      url: "https://www.youtube.com/results?search_query=star+holiday+home+saputara",
    },
    {
      Icon: FaInstagram,
      color: "#E1306C",
      url: "https://www.instagram.com/starholidayhome/",
    },
    { Icon: FaTwitter, color: "#0077B5", url: "#" },
  ];

  // Set consistent icon size
  const iconSize = 16;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubscriptionStatus(null);

    // Replace with your Web App URL from Apps Script deployment
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbwCeVAV7ou4QekjgeehwXR3ET3B0YXm2BZEtGEJx4C0zZePIdrVyiu_lWhl_fFxhPTg/exec";

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          Email: email,
          Timestamp: new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
          }),
        }),
      });

      // Since we're using no-cors mode, we can't read the response
      // But we assume it was successful if no error is thrown
      setSubscriptionStatus("success");
      setEmail("");

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setSubscriptionStatus("error");

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus(null);
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#00486c] to-[#003553] text-white w-full py-12 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff9d00] via-[#ff6b00] to-[#ff9d00]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start py-8 gap-8">
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/4 px-6 py-4">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-[#ff9d00] inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4 text-[16px]">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-[#ff9d00] transition-all duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-[#ff9d00] rounded-full mr-3 group-hover:mr-4 transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="w-full lg:w-1/4 px-6 py-4">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-[#ff9d00] inline-block">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt
                  className="mt-1 mr-3 text-[#ff9d00]"
                  size={iconSize}
                />
                <p>
                  STAR HOLIDAY HOME HILL RESORT, Sr No. 121, Sunrise Point Road,
                  Dang, Saputara, Gujarat 394720
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-[#ff9d00]" size={iconSize} />
                <p>+91 9850981210</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-[#ff9d00]" size={iconSize} />
                <p>info@starholidayresort.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-2/4 px-6 py-4">
            <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#ff9d00] to-[#ff6b00]">
              STAR HOLIDAY RESORT
            </h2>
            <p className="text-lg mb-6 text-white-300 font-medium">
              BEST RATE GUARANTEE
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm mb-3">
                Subscribe to our newsletter for offers
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row border border-[#ff9d00] rounded-md overflow-hidden"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 text-gray-800 w-full focus:outline-none"
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ff9d00] to-[#ff6b00] px-4 py-2 font-medium hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Subscribe"}
                </button>
              </form>

              {/* Status messages */}
              {subscriptionStatus === "success" && (
                <p className="text-green-400 text-sm mt-2">
                  Thank you for subscribing!
                </p>
              )}
              {subscriptionStatus === "error" && (
                <p className="text-red-400 text-sm mt-2">
                  Subscription failed. Please try again.
                </p>
              )}
            </div>

            {/* Social Media */}
            <div className="mb-4">
              <p className="text-[13px] text-white-400 tracking-wider mb-3">
                CONNECT WITH STAR HOLIDAY RESORT
              </p>
              <div className="flex space-x-3">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 p-3 rounded-full text-white transition-transform duration-300 transform hover:scale-110"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = social.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#4b5563")
                    }
                  >
                    <social.Icon size={iconSize} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#ffffff33] pt-8 pb-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-[15px]">
            <p>© 2025 Star Holiday Resort All Rights Reserved.</p>
            <p className="text-center md:text-right">
              Web Design By{" "}
              <a
                href="https://richsol.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff9d00] font-medium hover:text-[#ffaa33] transition-colors duration-300 relative group cursor-pointer"
              >
                <span className="relative z-10">
                  Rich System Solution Nashik
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff9d00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
