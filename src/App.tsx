import type { FC } from "react";

import { Cards, Competition, Facility, HeroSection, UserInfo, UserMembership, UserProfile} from "@components";

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

