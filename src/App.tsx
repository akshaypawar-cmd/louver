import type { FC } from "react";

import { Cards, Competition, Facility, HeroSection, UserInfo, UserMembership, UserProfile} from "@components";
import Footer from "./components/Footer/Footer.components";

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

