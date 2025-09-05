import React from "react";
import Aboutfac from "./Aboutfac";
import AboutUsHero from "./AboutFacilityHero";
import HotelCard from "./HotelCard";
import Facility from "./Facility";
import FacilitySwimmingpool from "./FacilitySwimmingpool";
import FacilityGarden from "./FacilityGarden";
function Home() {
  return (
    <div>
      <AboutUsHero />
      <Aboutfac />
      <Facility />
      {/* <FacilitySwimmingpool />
      <FacilityGarden />
      <HotelCard /> */}
    </div>
  );
}

export default Home;
