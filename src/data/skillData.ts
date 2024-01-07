import skillDataTypes from "./skillData.d";

//! front end
import next from "@/assets/icons/next2svg.svg";
import react from "@/assets/icons/react.svg";
import redux from "@/assets/icons/skill_icons/Redux.svg";
import typeScript from "@/assets/icons/skill_icons/TypeScript.svg";
import tanStackQuery from "@/assets/icons/skill_icons/react-query.svg";
import zustand from "@/assets/icons/skill_icons/zustand.svg";
import tailwind from "@/assets/icons/tailwind.svg";

//! back ends
import express from "@/assets/icons/skill_icons/ExpressJS-Dark.svg";
import MongoDB from "@/assets/icons/skill_icons/MongoDB.svg";
import node from "@/assets/icons/skill_icons/NodeJS-Dark.svg";

//! tools
import gitAndGithub from "@/assets/icons/gitAndGithubsvg.svg";
import figma from "@/assets/icons/skill_icons/Figma-Dark.svg";
import notion from "@/assets/icons/skill_icons/notions.svg";
import vsCode from "@/assets/icons/skill_icons/vscode.svg";
import vite from "@/assets/icons/vite.svg";

const skillData: skillDataTypes = {
  FrontEnd: [
    {
      title: "TypeScript",
      icon: typeScript,
      stage: "advance",
    },

    {
      title: "React.js",
      icon: react,
      stage: "advance",
    },
    {
      title: "Next.js ",
      icon: next,
      stage: "advance",
    },
    {
      title: "TailwindCSS",
      icon: tailwind,
      stage: "advance",
    },

    {
      title: "Redux Toolkit",
      icon: redux,
      stage: "advance",
    },
   
    {
      title: "Zustand",
      icon: zustand,
      stage: "intermediate",
    },
    {
      title: "TanStack Query",
      icon: tanStackQuery,
      stage: "intermediate",  
    },
 
  ],
  BackEnd: [
    {
      title: "Node.js",
      icon: node,
      stage: "intermediate",
    },
    {
      title: "Express.js",
      icon: express,
      stage: "intermediate",
    },

    {
      title: "MongoDB",
      icon: MongoDB,
      stage: "beginner",
    },
  ],
  Tools: [
    {
      title: "Git & Github",
      icon: gitAndGithub,
      stage: "intermediate",
    },

    {
      title: "Figma",
      icon: figma,
      stage: "beginner",
    },
    {
      title: "VS Code",
      icon: vsCode,
      stage: "advance",
    },
    {
      title: "Notion",
      icon: notion,
      stage: "intermediate",
    },
    {
      title: "Vite",
      icon: vite,
      stage: "intermediate",
    },
  ],
};

export default skillData;
