import React from "react";

type Props = {};

const AboutCode = (props: Props) => {
  return (
    <div className=" overflow-x-hidden">
      <pre>
        {`
   import { aboutType } from "./about.d";

     const AboutMe = (): aboutType => {
       return {
         name: "md kawsar islam yeasin",
         bio: "orem ipsum dolor sit amet consectetur adipisicing elit. Ratione cum ",
         role: "front end developer",
         age: 20,
         gender: "male",
         address: "Dhaka, Cantonment ",
         phone: "01632227965",
         mail: "mdkawsarislam@gmail.com",
       };
     };
     
     `}
      </pre>
    </div>
  );
};
export default AboutCode;
