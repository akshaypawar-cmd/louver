import type { FC } from "react";
import UserProfile from "./components/UserProfile/UserProfile.components.js";

import { Cards, Competition, Facility, HeroSection, UserInfo,  } from "@components";

const App: FC = () => {
  
  return (
    <>
      <HeroSection/> 
      <Cards/>
      <Facility/>
      <Competition/>
      <UserInfo />
      <UserProfile/>
    </>
  );
};

export default App;

