import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import starlogo2 from "../../assets/Images/starlogo2.png";
import logos from "../../assets/Images/logos.jpeg";

// ✅ Navigation Items
const navItems = [
  { label: "HOME", path: "/home" },
  { label: "ABOUT US", path: "/about_hill" },
  {
    label: "LUXURY ROOMS",
    submenu: [
      { label: "2 Bedded super deluxe AC couple rooms", path: "/Coupleroom" },
      { label: "4 Bedded super deluxe AC family rooms", path: "/family_room" },
      { label: "6 Bedded super deluxe AC family Suite", path: "/6_bedrooms" },
    ],
  },
  { label: "FACILITIES", path: "/about_facility" },
  { label: "GALLERY", path: "/gallery" },
  { label: "SAPUTARA", path: "/Saputara" },
  { label: "CONTACT US", path: "/contact_us" },
];

// ✅ Top Bar Component (hidden on mobile)
const TopBar = ({ hideTopBar }) => {
  return (
    <div
      className={`hidden md:block text-sm transition-transform duration-500 ${
        hideTopBar ? "-translate-y-full" : "translate-y-0"
      } fixed top-0 left-0 w-full z-[1000] border-b border-gray-200 bg-blue-950`}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center py-2 text-white gap-2 md:gap-0">
        {/* Location + Weather */}
        <div className="flex justify-center md:justify-start items-center space-x-3 text-xs md:text-sm">
          <span>🌤️ 18 °C</span>
          <span>📍 Star Holiday Resort, Saputara.</span>
        </div>

        {/* Contact + Social */}
        <div className="flex justify-center md:justify-end items-center space-x-4 text-xs md:text-sm">
          <a href="tel:+919824644747" className="hover:text-orange-500">
            📞 +91 98509 81210
          </a>
          <a
            href="https://www.facebook.com/starholidayhomeandhillresort"
            className="hover:text-orange-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/results?search_query=star+holiday+home+saputara"
            className="hover:text-orange-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/starholidayhome/"
            className="hover:text-orange-500"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Navbar Component
const MainNavbar = ({ hideTopBar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) =>
    setOpenDropdown(openDropdown === index ? null : index);

  return (
    <>
      <nav
        className={`fixed w-full bg-white left-0 transition-all duration-300 z-[1401] ${
          hideTopBar ? "shadow-md border-b border-gray-100" : ""
        }`}
        // ✅ Top offset only for desktop, no gap in mobile
        style={{
          top: hideTopBar ? "0px" : window.innerWidth < 768 ? "0px" : "30px",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Desktop Logo */}
          <div
            className="cursor-pointer flex-shrink-0 hidden lg:block"
            onClick={() => navigate("/")}
          >
            <img src={starlogo2} alt="Logo" className="h-4 w-auto md:h-20" />
          </div>

          {/* Mobile Logo */}
          <div
            className="cursor-pointer flex-shrink-0 lg:hidden"
            onClick={() => navigate("/")}
          >
            <img src={logos} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
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

          {/* Desktop BOOK NOW */}
          <div className="hidden lg:block">
            <button
              onClick={() => navigate("/bookform")}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-2 rounded-md text-sm font-bold transition duration-300"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 transition-colors text-black hover:text-orange-400"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md fixed top-[70px] left-0 w-full z-[1000] text-black"
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
                      className="text-base cursor-pointer hover:text-orange-500"
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              ))}
              {/* Mobile BOOK NOW */}
              <button
                onClick={() => {
                  navigate("/bookform");
                  setIsMenuOpen(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-bold transition duration-300"
              >
                BOOK NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ✅ Final Wrapper Component
const Navbar = () => {
  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHideTopBar(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-[10]">
      <TopBar hideTopBar={hideTopBar} />
      <MainNavbar hideTopBar={hideTopBar} />
    </header>
  );
};

export default Navbar;
