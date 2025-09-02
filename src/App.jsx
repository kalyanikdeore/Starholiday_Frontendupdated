import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";

import Home from "./pages/Homepage/Homepage";
import Aboutpage from "./pages/Aboutuspage/Aboutpage";
import AboutFacilitypage from "./pages/AboutFacilitypage/AboutFacilitypage";
import Gallerypage from "./pages/Gallerypage/Gallerypage";
import Contactuspage from "./pages/Contactuspage/Contactuspage";
import { MdContactPage } from "react-icons/md";
// import InquiryForm from "./pages/Inquirypage/Inquirypage";
// import LuxuryRoom from "./pages/LuxuryRoompage/LuxuryRoom";
// import LuxuryRoom from "./pages/LuxuryRoom/LuxuryRoom";
import LFamilyRooms from "./pages/LFamilyRooms/LFamilyRooms";
import Saputarapage from "./pages/Saputarapage/Saputarapage";
import LuxuryRoom from "./pages/LuxuryRoom/LuxuryRoom";
// import Coupleroom from "./pages/Coupleroom/Coupleroom";
// import Coupleroom from "./pages/Coupleroom/Coupleroom";
import Coupleroom from "./pages/Coupleroom/Coupleroom";
import Bookfrom from "./pages/Book/Bookfrom";
import Bookfromhero from "./pages/Book/Bookfromhero";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="about_hill" element={<Aboutpage />} />
        <Route path="about_facility" element={<AboutFacilitypage />} />
        <Route path="gallery" element={<Gallerypage />} />
        <Route path="contact_us" element={<Contactuspage />} />
        {/* <Route path="inquiry" element={<InquiryForm />} /> */}
        <Route path="luxury_room" element={<LuxuryRoom />} />
        <Route path="family_room" element={<LFamilyRooms />} />
        <Route path="Saputara" element={<Saputarapage />} />
        <Route path="6_bedrooms" element={<LuxuryRoom />} />
        <Route path="Coupleroom" element={<Coupleroom />} />
        <Route path="bookform" element={<Bookfrom />} />
        <Route path="bookform" element={<Bookfromhero />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
