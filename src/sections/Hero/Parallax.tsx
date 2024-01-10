import React from "react";

//  assets
import cube from "@/assets//3d/RoundCube-Orange-Glossy.svg";
import cubeBig from "@/assets//3d/roundBig.png";
import Image from "next/image";

const Parallax = () => {
  return (
    <>
      <div className="parallax-wrap ">
        <span className="">
          <Image id="box" src={cube} alt="cube " className="left-10 spinner bottom-10 absolute w-8" />
          <Image id="boxBig" src={cubeBig} alt="cube" className="right-10 bigSpinner top-10 absolute w-8" />
        </span>
      </div>
    </>
  );
};

export default Parallax;
