import React from "react";
import Academic from "./Academic";
import Training from "./Training";

const Education = () => {
  return (
    <div className="mt-20">
      <h3 className="SubTitle my-6">Education & Training</h3>
      <div className=" md:grid-cols-2 gap-x-2 grid grid-cols-1">
        <Academic />
        <Training />
      </div>
    </div>
  );
};

export default Education;
