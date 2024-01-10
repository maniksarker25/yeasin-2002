import React from "react";
import Image from "next/image";

import vgc from "@/assets/avatar/Academy/VGC.jpg";
import bgss from "@/assets/avatar/Academy/BGSS.png";

import EduCard from "./EduCard";
import AcademyContact from "./AcademyContact";

const Academic = () => {
  return (
    <div>
      <EduCard name={"Bhashantek Govt. Secondary School"} imageData={bgss} AcademicYear={"2020-2021"} LastExam="SSC" />
      <EduCard name={"Vashantek Govt. Collage"} imageData={vgc} AcademicYear={"2021-2022"} LastExam="HSC" />
    </div>
  );
};

export default Academic;
