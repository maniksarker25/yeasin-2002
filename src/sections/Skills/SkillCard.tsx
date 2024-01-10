import Image from "next/image";
import React from "react";

//  icons and types
import Revel from "@/components/Globals/Revel";
import { ChelseaFont } from "@/utils/GoogleFonts";
import { Item } from "./LoopOverSkill";


interface thisProps extends Item {
  index: number;
}

const SkillCard = ({ title, icon, stage, reference = "", index }: thisProps) => {
  let boxShadowColor;
  if (stage === "advance") {
    boxShadowColor = ` inset 5px -5px 25px #E40009, inset -5px 0px 25px #E40009`;
  } else if (stage === "intermediate") {
    boxShadowColor = ` inset 5px -5px 25px #FACC15, inset -5px 0px 25px #FACC15`;
  } else {
    boxShadowColor = ` inset 5px -5px 25px #166534, inset -5px 0px 25px #166534`;
  }

  return (
    <Revel transition={{ duration: 0.4, delay: index / 20 }}>
      <div
        className={`select-none group xl:py-4 xl:text-xl 2xl:py-8 2xl:text-4xl   link   text-conf font-medium   flex items-center py-2   rounded-sm  md:rounded-lg md:px-4
      shadow-md  hover:scale-105 transition-all relative overflow-hidden group  `}
        style={{
          background: `rgba(71,85,105,.2)`,
          color: `hsla(0,0%,100%,.85)`,
        }}
      >
        <div className="into-center w-full">
          <span
            className="absolute top-0 left-0 w-full h-full z-50 opacity-0 group-hover:opacity-60 transition-all"
            style={{
              boxShadow: boxShadowColor,
            }}
          ></span>
          <div className="mx-4">
            <Image src={icon} alt={"Icons"} className="w-7 h-7 xl:w-10 xl:h-10 pointer-events-none" loading="lazy" />
          </div>

          <div className=" gap-x-2 flex flex-1">
            <h3 className={ChelseaFont.className}>{title}</h3>
          </div>
        </div>
      </div>
    </Revel>
  );
};
export default SkillCard;
