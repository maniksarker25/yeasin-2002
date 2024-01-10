import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

interface contactProps extends React.HTMLAttributes<HTMLDivElement> {
  facebookLink?: string;
  websiteLink?: string;
}

const AcademyContact = ({ facebookLink = "", websiteLink = "", ...rest }: contactProps) => {
  return (
    <div {...rest} className="gap-x-2 flex">
      <a href={facebookLink}>
        <BsFacebook />
      </a>
      <a href={websiteLink}>
        <BsGlobe />
      </a>
    </div>
  );
};
export default AcademyContact;
