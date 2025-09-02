import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logo from "../../assets/Images/logo.png";
import starlogo2 from "../../assets/Images/starlogo2.png";

// ✅ Nav Items
const navItems = [
  { label: "HOME", path: "/home" },
  { label: "ABOUT US", path: "/about_hill" },
  {
    label: "LUXURY ROOMS",
    submenu: [
      { label: "4 Bedded Family Rooms", path: "/family_room" },
      { label: "6 Bedded Family Rooms", path: "/6_bedrooms" },
      { label: "Couple Rooms", path: "/Coupleroom" },
    ],
  },
  { label: "FACILITIES", path: "/about_facility" },
  { label: "GALLERY", path: "/gallery" },
  { label: "SAPUTARA", path: "/Saputara" },
  { label: "CONTACT US", path: "/contact_us" },
  // { label: "INQUIRY", path: "/inquiry" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hideTopBar, setHideTopBar] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) =>
    setOpenDropdown(openDropdown === index ? null : index);

  useEffect(() => {
    const handleScroll = () => {
      setHideTopBar(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-[10]">
      {/* Top Bar */}
      <div
        className={`text-sm transition-transform duration-500 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        } fixed top-0 left-0 w-full z-[1000] border-b border-gray-200 bg-blue-950`}
      >
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-2 text-white">
          <div className="flex items-center space-x-4 text-xs md:text-sm">
            <span>🌤️ 18 °C</span>
            <span>📍 Star Holiday Resort, Saputara.</span>
          </div>
          <div className="flex items-center space-x-4 text-xs md:text-sm">
            <span>
              📞{" "}
              <a href="tel:+919824644747" className="hover:text-orange-500">
                +91 98509 81210
              </a>
            </span>
            <a href="#" className="hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-orange-500">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar - Updated with consistent white background */}
      <nav
        className={`fixed w-full bg-white left-0 transition-all duration-300 z-[1401] ${
          hideTopBar ? "shadow-md border-b border-gray-100" : ""
        }`}
        style={{ top: hideTopBar ? "0px" : "30px" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo with padding for mobile */}
          <div
            className="cursor-pointer flex-shrink-0 px-4 py-2 lg:px-0 lg:py-0 mx-auto lg:mx-0"
            onClick={() => navigate("/")}
          >
            <img src={starlogo2} alt="Logo" className="h-20 w-33" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 font-medium text-black">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && toggleDropdown(index)}
                onMouseLeave={() => item.submenu && toggleDropdown(null)}
              >
                <button
                  onClick={() =>
                    item.submenu ? toggleDropdown(index) : navigate(item.path)
                  }
                  className={`hover:text-orange-500 flex items-center gap-1 transition-colors ${
                    openDropdown === index ? "text-orange-500" : ""
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {openDropdown === index && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-10 left-0 bg-white text-black rounded-lg shadow-xl py-2 px-3 min-w-[220px] z-[120] border border-gray-100"
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <motion.div
                          key={subIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: subIndex * 0.05 }}
                          onClick={() => navigate(subItem.path)}
                          className="hover:bg-orange-50 px-3 py-2 rounded text-sm text-gray-700 cursor-pointer transition-colors hover:text-orange-600"
                        >
                          {subItem.label}
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* BOOK NOW Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => navigate("/bookform")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-bold transition duration-300"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="pr-5 transition-colors text-black hover:text-orange-400"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md fixed top-[80px] left-0 w-full z-[1000] text-black"
          >
            <div className="px-6 py-4 space-y-4 font-medium">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer text-base hover:text-orange-500">
                        {item.label}
                        <ChevronDown
                          size={18}
                          className="transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <div className="mt-2 pl-4 space-y-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            onClick={() => {
                              navigate(subItem.path);
                              setIsMenuOpen(false);
                            }}
                            className="text-sm cursor-pointer hover:text-orange-600"
                          >
                            {subItem.label}
                          </div>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <div
                      onClick={() => {
                        navigate(item.path);
                        setIsMenuOpen(false);
                      }}
                      className={`text-base cursor-pointer hover:text-orange-500 ${
                        item.label === "ABOUT US" ? "px-3 py-2" : ""
                      }`}
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => navigate("/bookform")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-bold transition duration-300"
              >
                BOOK NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
