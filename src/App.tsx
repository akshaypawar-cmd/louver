import type { FC } from "react";

import { Cards, Competition, Facility, HeroSection,  } from "@components";

const App: FC = () => {
  
  return (
    <>
      <HeroSection/> 
      <Cards/>
      <Facility/>
      <Competition/>
      <UserInfo/>
    </>
  );
};

export default App;

