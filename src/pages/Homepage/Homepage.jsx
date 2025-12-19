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
import Photosvideos from "./Photosvideos";
import AboutSaputara from "../Saputarapage/AboutSaputara";
import SaputaraSightseeing from "../Saputarapage/SaputaraSightseeing";
import Saputaravideo from "../Saputarapage/Saputaravideo";
import SaputaraImage from "../Saputarapage/SaputaraImage";
function Home() {
  const resortImageRef = useRef(null);

  const scrollToResortImage = () => {
    resortImageRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Herosection scrollToResortImage={scrollToResortImage} />
      <LuxuryRooms />
      <div ref={resortImageRef}>
        <Resortimage />
      </div>
      <HotelBookingCard />

      <CTA />
      <AboutUsSection />
      <VideoSection />

      <Photosvideos />
      <CTA />
      {/* Add ref to Resortimage component */}

      <Amenities />
      {/* Remove AboutFacilitypage from here since we'll navigate to it separately */}
      <Photosvideos />
      <CTA />
      <Impact />
      <StayWithUs />
      <Testimonials />
      <Review />
      <AboutSaputara />
      <SaputaraSightseeing />
      <Saputaravideo />
      <SaputaraImage />
    </div>
  );
}

export default Home;
