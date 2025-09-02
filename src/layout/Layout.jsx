import React from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";

// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contentwrapper from "../components/Contentwrapper/Contentwrapper";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import WhatsAppPopup from "../components/PopUp/WhatsAppPopup";
function Layout() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Outlet />
      <WhatsAppPopup />
      <Footer />
    </>
  );
}
export default Layout;
