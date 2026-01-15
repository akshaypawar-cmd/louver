import type { FC } from "react";

import { Cards, Competition, Facility, Footer, HeroSection, UserInfo, UserMembership, UserProfile} from "@components";

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
      <Footer/>
    </>
  );
};

export default App;

