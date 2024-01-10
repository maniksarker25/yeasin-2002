import Revel from "@/components/Globals/Revel";
import { TitleFont } from "@/utils/GoogleFonts";
import React from "react";
import "../../app/globals.css";

const Title = () => {
  return (
    <>
      <h1
        className={`title-font w-full first-letter block  mb-8 font-extrabold  sm:text-5xl  md:text-3xl   xl:text-6xl 2xl:text-7xl  text-2xl ${TitleFont.className} TitleGradientText `}
      >
        MD KAWSAR ISLAM YEASIN
      </h1>
    </>
  );
};

export default Title;
