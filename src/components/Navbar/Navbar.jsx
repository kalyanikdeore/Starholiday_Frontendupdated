import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import starlogo2 from "../../assets/Images/starlogo2.png";
import logos from "../../assets/Images/logos.jpeg";
import axiosInstance from "../../services/api";

// ✅ Navigation Items - Desktop (Full menu)
const desktopNavItems = [
  { label: "HOME", path: "/home" },
  { label: "ABOUT US", path: "/about_hill" }, 
  { label: "COUPLE ROOM", path: "/Coupleroom" },
  { label: "4 BEDDED ROOM", path: "/family_room" },
  { label: "6 BEDDED ROOM", path: "/6_bedrooms" },
  { label: "GALLERY", path: "/gallery" },
  { label: "CONTACT US", path: "/contact_us" },
  {
    label: "MORE",
    submenu: [
      { label: "FACILITIES", path: "/about_facility" },
      { label: "SAPUTARA", path: "/Saputara" },
      { label: "MONSOONFESTIVAL", path: "/festival" },
    ],
  },
];

// ✅ Navigation Items - Mobile (Hide specific rooms)
const mobileNavItems = [
  { label: "HOME", path: "/home" },
  { label: "ABOUT US", path: "/about_hill" },
  { label: "GALLERY", path: "/gallery" },
  { label: "CONTACT US", path: "/contact_us" },
  // {
  //   label: "ROOMS",
  //   submenu: [
  //     { label: "COUPLE ROOM", path: "/Coupleroom" },
  //     { label: "4 BEDDED ROOM", path: "/family_room" },
  //     { label: "6 BEDDED ROOM", path: "/6_bedrooms" },
  //   ],
  // },
  {
    label: "MORE",
    submenu: [
      { label: "FACILITIES", path: "/about_facility" },
      { label: "SAPUTARA", path: "/Saputara" },
      { label: "MONSOONFESTIVAL", path: "/festival" },
    ],
  },
];

// ✅ Top Bar Component (hidden on mobile)
const TopBar = ({ hideTopBar }) => {
  const [contactInfo, setContactInfo] = useState({
    whatsapp_number: "",
    email: "",
    address: "",
    facebook_link: "",
    youtube_link: "",
    instagram_link: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axiosInstance.get("/contact");
        setContactInfo(response.data);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <div
      className={`hidden md:block text-sm transition-all duration-500 ${
        hideTopBar ? "-translate-y-full" : "translate-y-0"
      } fixed top-0 left-0 w-full z-[1000] border-b border-gray-200 bg-blue-950`}
    >
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center py-2 text-white gap-2 md:gap-0">
        {/* Location + Weather */}
        <div className="flex justify-center md:justify-start items-center space-x-3 text-xs md:text-sm">
          <span>🌤️ 18 °C</span>
          <span>📍 Star Holiday Home Resort, Saputara.</span>
        </div>

        {/* Contact + Social */}
        <div className="flex justify-center md:justify-end items-center space-x-4 text-xs md:text-sm">
          {contactInfo.whatsapp_number && (
            <a
              href={`tel:${contactInfo.whatsapp_number}`}
              className="hover:text-orange-500"
            >
              📞 {contactInfo.whatsapp_number}
            </a>
          )}

          {contactInfo.facebook_link && (
            <a
              href={contactInfo.facebook_link}
              className="hover:text-orange-500"
            >
              <FaFacebookF />
            </a>
          )}
          {contactInfo.youtube_link && (
            <a
              href={contactInfo.youtube_link}
              className="hover:text-orange-500"
            >
              <FaYoutube />
            </a>
          )}

          {contactInfo.instagram_link && (
            <a
              href={contactInfo.instagram_link}
              className="hover:text-orange-500"
            >
              <BsInstagram />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ Main Navbar Component
const MainNavbar = ({ hideTopBar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const navigate = useNavigate();

  // Use different nav items based on screen size
  const navItems = isMobile ? mobileNavItems : desktopNavItems;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      // Close dropdowns when resizing to avoid layout issues
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (index) =>
    setOpenDropdown(openDropdown === index ? null : index);

  // Calculate top position based on screen size and hideTopBar state
  const topPosition = hideTopBar ? "0px" : isMobile ? "0px" : "30px";

  return (
    <>
      <nav
        className={`fixed w-full bg-white left-0 transition-all duration-300 z-[1401] ${
          hideTopBar ? "shadow-md border-b border-gray-100" : ""
        }`}
        style={{ top: topPosition }}
      >
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between py-3">
          {/* Desktop Logo */}
          <div
            className="cursor-pointer flex-shrink-0 hidden lg:block"
            onClick={() => navigate("/")}
          >
            <img
              src={starlogo2}
              alt="Logo"
              className="h-15 w-46 md:h-19 lg:h-30"
            />
          </div>

          {/* Mobile Logo */}
          <div
            className="cursor-pointer flex-shrink-0 lg:hidden"
            onClick={() => navigate("/")}
          >
            <img src={logos} alt="Logo" className="h-10 w-auto md:h-12" />
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
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-5 py-2 rounded-md text-sm font-bold transition duration-300 hover:from-orange-600 hover:to-yellow-600"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => navigate("/Coupleroom")}
              className="mr-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 rounded-md text-xs font-bold transition duration-300 hover:from-orange-600 hover:to-yellow-600"
            >
              2 Bed
            </button>
            <button
              onClick={() => navigate("/family_room")}
              className="mr-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 rounded-md text-xs font-bold transition duration-300 hover:from-orange-600 hover:to-yellow-600"
            >
              4 Bed
            </button>
            <button
              onClick={() => navigate("/6_bedrooms")}
              className="mr-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1.5 rounded-md text-xs font-bold transition duration-300 hover:from-orange-600 hover:to-yellow-600"
            >
              6 Bed
            </button>

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
            className="lg:hidden bg-white shadow-md fixed top-full left-0 w-full z-[1000] text-black overflow-hidden"
            style={{ top: `calc(${topPosition} + 70px)`, marginTop: "-4px" }}
          >
            <div className="px-6 py-4 space-y-4 font-medium">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex justify-between items-center cursor-pointer text-base hover:text-orange-500 py-2">
                        {item.label}
                        <ChevronDown
                          size={18}
                          className="transition-transform group-open:rotate-180"
                        />
                      </summary>
                      <div className="mt-2 pl-4 space-y-3 border-l border-gray-200 ml-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <div
                            key={subIndex}
                            onClick={() => {
                              navigate(subItem.path);
                              setIsMenuOpen(false);
                            }}
                            className="text-sm cursor-pointer hover:text-orange-600 py-2"
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
                      className="text-base cursor-pointer hover:text-orange-500 py-2"
                    >
                      {item.label}
                    </div>
                  )}
                </div>
              ))}
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      // Only hide top bar on desktop devices
      if (!isMobile) {
        setHideTopBar(window.scrollY > 50);
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Reset hideTopBar when switching between mobile and desktop
      if (mobile) {
        setHideTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <header className="relative z-[10]">
      <TopBar hideTopBar={hideTopBar} />
      <MainNavbar hideTopBar={hideTopBar} />
    </header>
  );
};

export default Navbar;
