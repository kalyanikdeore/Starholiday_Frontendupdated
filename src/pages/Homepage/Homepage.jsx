import React, { useRef } from "react";
import AboutUsSection from "./AboutUsSection";
import LuxuryRooms from "./LuxuryRooms";
import Amenities from "./Amenities";
import VideoSection from "./VideoSection";
import HotelBookingCard from "./HotelBookingCard";
import PlanAVisit from "./PlanAVisit";
import Testimonials from "./Testimonials";
import StayWithUs from "./StayWithUs";
import Impact from "./Impact";
import Herosection from "./Herosection";
import Resortimage from "./Resortimage";
import Serviceimage from "./Serviceimage";
import CTA from "./CTA";
import Review from "./Review";
import AboutFacilitypage from "../AboutFacilitypage/AboutFacilitypage";

function Home() {
  const resortImageRef = useRef(null);

  const scrollToResortImage = () => {
    resortImageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Herosection scrollToResortImage={scrollToResortImage} />
      <HotelBookingCard />
      <CTA />
      <VideoSection />
      <AboutUsSection />
      <LuxuryRooms />
      <CTA />

      {/* Add ref to Resortimage component */}
      <div ref={resortImageRef}>
        <Resortimage />
      </div>

      <Amenities />
      {/* Remove AboutFacilitypage from here since we'll navigate to it separately */}
      <CTA />
      <Impact />
      <StayWithUs />
      <Testimonials />
      <Review />
    </div>
  );
}

export default Home;
