import Revel from "@/components/Globals/Revel";
import { MeriendaFont, RozhaFont } from "@/utils/GoogleFonts";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface Academy extends React.HtmlHTMLAttributes<HTMLDivElement> {
  name: string;
  imageData: StaticImageData;
  AcademicYear: string | number;
  LastExam: "HSC" | "SSC";
}

const EduCard = ({ name, imageData, AcademicYear, LastExam, ...props }: Academy) => {
  return (
    <Revel
      className={` bg-gradient-to-r from-shine-0 to-shine-100  my-4 p-1 flex sm:pl-3 sm:py-2   items-center sm:gap-x-4 gap-x-1 rounded-md   text-blue-100`}
      {...props}
    >
      <Image src={imageData} alt={name} className="w-16 h-16 xl:w-16 2xl:w-24 2xl:h-24 xl:h-16" />
      <div>
        <h4 className={`text-xs sm:text-lg xl:text-2xl 2xl:text-3xl font-semibold sm:font-bold ${RozhaFont.className}`}>
          {name}
        </h4>
        <p className={`text-xs mt-2 sm:text-sm  text-gray-400 sm:font-medium ${MeriendaFont.className}`}>
          {LastExam} {AcademicYear}
        </p>
      </div>
    </Revel>
  );
};

export default EduCard;
