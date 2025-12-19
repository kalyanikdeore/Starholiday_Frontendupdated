import React from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contentwrapper from "../components/Contentwrapper/Contentwrapper";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import WhatsAppPopup from "../components/PopUp/WhatsAppPopup";

// Main Layout component
function Layout() {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const path = location.pathname.toLowerCase();

  // Hide navbar and footer on the review section page
  const hideNavbar = path === "/reviewsection";

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}

      <Outlet />

      <WhatsAppPopup />
      {!hideNavbar && <Footer />}
    </>
  );
}

// Review Layout component (if you still need a separate one)
function ReviewLayout() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const hideNavbar = path === "/reviewsection";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
      {!hideNavbar && <Footer />}
    </>
  );
}

export default Layout;
// You can also export ReviewLayout if needed elsewhere
export { ReviewLayout };
