import Image from "next/image";
import React from "react";

import BlueStar_Btn from "@/components/Unique/Buttons/BlueStar/BlueStar_Btn";
import Space_Btn from "@/components/Unique/Buttons/Space_Btn/Space_Btn";
import Parallax from "./Parallax";
import Title from "./Title";

import man from "@/assets/avatar/Saly-13.svg";
import { PragatiNarrowFont, salsa } from "@/utils/GoogleFonts";
import Link from "next/link";
import TypeEffect from "./TypeEffect";

const Hero = () => {
  return (
    <main className=" xl:py-8 2xl:py-40  2xl:px-10 eachSections relative h-full " id="home">
      <div className="body-font text-gray-600">
        <div className="md:flex-row flex flex-col items-center py-32">
          <div className="lg:flex-grow xl:mr-10 2xl:mr-52 md:w-1/2 lg:pr-24 md:items-start md:text-left md:mb-0 flex flex-col items-center flex-1 mb-16 text-center">
            <Title />

            <div className="flex flex-col items-start mb-8 space-y-2 text-center md:text-left">
              <p
                className={`text-md    xl:text-x  l 2xl:text-3xl  leading-relaxed text-blue-100  sm:px-0 ${salsa.className}`}
              >
                A self-taught web application developer, who loves to build things for the web.
              </p>
              <p className="   text-center    xl:my-7 2xl:my-10 mb-4 text-lg text-blue-200 ">
                <span className={PragatiNarrowFont.className}>Loves to talk about &nbsp;</span><TypeEffect/>
              </p>
            </div>
            <div className="md:flex-row justify-start w-full items-start gap-y-4 md:gap-y-0  md:gap-x-3  md:items-center  flex flex-col ">
              <Space_Btn
                title="Download CV" />
              <Link href={"/blogs"}>
                <BlueStar_Btn className="2xl:text-2xl xl:text-xl text-lg">Blogs</BlueStar_Btn>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg md:w-1/2 lg:w-full 2xl:h-1/2 2xl:ml-20 relative">
            <Image  
              src={man}
              alt="man"
              priority={true}
              className=" 2xl:w-[50rem]  w-full h-full pointer-events-none select-none"
            />
            <Parallax />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Hero;