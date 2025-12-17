import type { FC } from "react";
import HeroSection from "./Components/Hero/HeroSection.js";
import Cards from "./Components/About/Cards.js";
import Facility from "./Components/Facility/Facility.component.js";

const App: FC = () => {
  return (
    <>
      <HeroSection />
      <Cards/>
      <Facility/>
    </>
  );
};

export default App;
