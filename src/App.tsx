import type { FC } from "react";

import { Cards, Competition, Facility, HeroSection,  } from "@components";
import { UserInfo } from "./components/GymInformation";

const App: FC = () => {
  
  return (
    <>
      <HeroSection/> 
      <Cards/>
      <Facility/>
      <Competition/>
      <UserInfo />
    </>
  );
};

export default App;

