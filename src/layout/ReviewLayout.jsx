import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Layout() {
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
