import Revel from "@/components/Globals/Revel";
import { MeriendaFont, RozhaFont } from "@/utils/GoogleFonts";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface Academy extends React.HtmlHTMLAttributes<HTMLDivElement> {
  courseName: string;
  courseInstitute: string;
  courseInstituteImg?: StaticImageData;
  imageData: StaticImageData;
  desc?: string
  haveCertificate? : boolean
  certificateUrl? : string
}

const TrainingCard = ({ courseName,courseInstitute,courseInstituteImg,   imageData,  desc, haveCertificate,certificateUrl,  ...props }: Academy) => {
  return (
    <Revel
      className={` bg-gradient-to-r from-shine-0 to-shine-100  my-4 p-1  sm:pl-3 sm:py-2   items-center sm:gap-x-4 gap-x-1 rounded-md   text-blue-100 flex justify-between`}
      {...props}
    >
     <div className="flex gap-x-2 items-center"> <Image src={imageData} alt={courseName} className="w-16 h-16 xl:w-16 2xl:w-24 2xl:h-24 xl:h-16" />
      <div>
        <h4 className={`text-xs sm:text-lg xl:text-2xl 2xl:text-3xl font-semibold sm:font-bold ${RozhaFont.className}`}>
          {courseName}
           <span
            className="text-xs  font-normal mx-3 "
           >
          {desc}
          </span>
        </h4>
        <div className="flex items-center gap-x-1 mt-2">
        {
            courseInstituteImg &&  
            <Image
             src={courseInstituteImg}
            alt="courseInstituters Image"
            width={200}
            height={200}
            className="size-4"
             />
        }
        <p className={`text-xs  sm:text-sm  text-gray-400 sm:font-medium ${MeriendaFont.className}`}>
          {courseInstitute} 
        </p>
        </div>
        
      </div>
      </div> 
      {
        haveCertificate &&       <a
        href={certificateUrl} download={courseName} target="_blank"     rel="noopener noreferrer"
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
       >
         Download
       </a>
      }

    </Revel>
  );
};

export default TrainingCard;
