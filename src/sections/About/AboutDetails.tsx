import React from "react";

import { CodeBlocks } from "./CodeBlocks";
import Imageka from "./myImg/myImg";

const AboutDetails = () => {
  return (
    
      <div className="md:grid-cols-2 gap-y-8 md:gap-y-0 items-center grid grid-cols-1 py-10 activeCardEffectContainer">
        <Imageka />
        <CodeBlocks /> 
      </div>
    
  );
};

export default AboutDetails;
