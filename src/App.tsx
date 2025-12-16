import type { FC } from "react";
import HeroSection from "./Components/Hero/HeroSection.js";
import Cards from "./Components/About/Cards.js";


const App: FC = () => {
  return (
    <>
      <HeroSection />
      <Cards/>
    </>
  );
};

export default App;
