import type { FC } from "react";

import { Cards, Competition, Facility, HeroSection, UserInfo, UserProfile,  } from "@components";
import UserMembership from "./components/membership/UserMembership.components";

const App: FC = () => {
    
  return (
    <>
      <HeroSection/> 
      <Cards/>
      <Facility/>
      <Competition/>
      <UserInfo />
      <UserProfile/>
      <UserMembership/>
    </>
  );
};

export default App;

