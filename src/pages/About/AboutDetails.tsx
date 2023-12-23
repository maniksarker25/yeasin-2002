import React from "react";
import AboutCode from "./AboutCode";

//  image
// import MyAvatar from "./MyAvatar ";
import Imageka from "./myImg/myImg";

const AboutDetails = () => {
  return (
    <>
      <div className="md:grid-cols-2 gap-y-8 md:gap-y-0 items-center grid grid-cols-1 py-10 activeCardEffectContainer">
        <Imageka />
        <AboutCode /> 
      </div>
    </>
  );
};

export default AboutDetails;
