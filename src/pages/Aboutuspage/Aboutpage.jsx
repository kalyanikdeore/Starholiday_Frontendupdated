import React from "react";
import Amenitiesabout from "./Amenitiesabout";
import AboutUsHero from "./AboutUsHero";
import ShilpiResort from "./ShilpiResort";
import Aboutrestro from "./Aboutrestro";
import Welcome from "./Welcome";
import ImpactSection from "./ImpactSection";

function Home() {
  return (
    <div>
      <AboutUsHero />
      <Welcome />
      <Aboutrestro />
      <Amenitiesabout />
      <ImpactSection />
      <ShilpiResort />
    </div>
  );
}

export default Home;
