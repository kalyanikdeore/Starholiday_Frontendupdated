import React from "react";

import AboutUsSection from "./AboutUsSection";
import LuxuryRooms from "./LuxuryRooms";
import Amenities from "./Amenities";
// import VideoSection from "./VideoSection";
// import VideoSection from "./VideoSection";
import VideoSection from "./VideoSection";
import HotelBookingCard from "./HotelBookingCard";
import PlanAVisit from "./PlanAVisit";
import Testimonials from "./Testimonials";
import StayWithUs from "./StayWithUs";
import Impact from "./Impact";
import Herosection from "./Herosection";
import Resortimage from "./Resortimage";
import Serviceimage from "./Serviceimage";

function Home() {
  return (
    <div>
      <Herosection />

      <HotelBookingCard />
      <VideoSection />
      <AboutUsSection />
      <LuxuryRooms />
      <Resortimage />
      <Serviceimage />
      <Amenities />
      {/* <HotelStats /> */}
      <Impact />
      <StayWithUs />
      <PlanAVisit />
      <Testimonials />
    </div>
  );
}

export default Home;
