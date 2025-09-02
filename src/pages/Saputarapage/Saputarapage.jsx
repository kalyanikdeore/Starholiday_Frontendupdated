import React from "react";
import SaputarapageHero from "./SaputarapageHero";
import Saputaravideo from "./Saputaravideo";
import AboutSaputara from "./AboutSaputara";
import SaputaraSightseeing from "./SapuatraSightseeing";
import SaputaraImage from "./SaputaraImage";
function Saputarapage() {
  return (
    <div>
      <SaputarapageHero />
      <AboutSaputara />
      <SaputaraSightseeing />
      <Saputaravideo />
      <SaputaraImage />
    </div>
  );
}

export default Saputarapage;
