import type { FC } from "react";

import { Cards, Competition, Facility, HeroSection, UserInfo, UserProfile,  } from "@components";

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

