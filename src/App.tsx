import type { FC } from "react";

import { Cards, Facility, HeroSection,  } from "@components";
import Competition from "./components/Competition/Competition";

const App: FC = () => {
  
  return (
    <>
      <HeroSection/> 
      <Cards/>
      <Facility/>
      <Competition/>
    </>
  );
};

export default App;

