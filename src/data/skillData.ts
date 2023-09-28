import skillDataTypes from "./skillData.d";

//! front end
import html from "@/assets/icons/html.svg";
import css from "@/assets/icons/css.svg";
import js from "@/assets/icons/js.svg";
import tailwind from "@/assets/icons/tailwind.svg";
import react from "@/assets/icons/react.svg";
import next from "@/assets/icons/next2svg.svg";
import redux from "@/assets/icons/redux.svg";
import typeScript from "@/assets/icons/typescript.svg";
import tanStackQuery from "@/assets/icons/tankstackQuery.svg";
import rtk from "@/assets/icons/rtk.jpg";
import openProps from "@/assets/icons/openProps.svg";
import postcss from "@/assets/icons/PostCSS.svg";
import Bootstrap from "@/assets/icons/Bootstrap.svg";
import SASS from "@/assets/icons/SASS.svg";
import unoCSS from "@/assets/icons/unoCSS.svg";
import styledComponents from "@/assets/icons/styled-components.jpg";

//! back ends
import node from "@/assets/icons/Nodejs.svg";
import express from "@/assets/icons/express.svg";
import MongoDB from "@/assets/icons/Mongo.png";
import mongoose from "@/assets/icons/mongoose.png";
import sql from "@/assets/icons/sql.png";
import MySql from "@/assets/icons/mySQL.svg";

//! tools
import gitAndGithub from "@/assets/icons/gitAndGithubsvg.svg";
import vsCode from "@/assets/icons/vsCode.svg";
import notion from "@/assets/icons/notion2svg.svg";
import figma from "@/assets/icons/figma.svg";
import vite from "@/assets/icons/vite.svg";
import canva from "@/assets/icons/canva.svg";
import git from "@/assets/icons/git.svg";
import github from "@/assets/icons/github.svg";

const skillData: skillDataTypes = {
  Language: [
    {
      title: "HTML",
      icon: html,
      stage: "advance",
    },
    {
      title: "CSS",
      icon: css,
      stage: "advance",
    },

    {
      title: "JavaScript",
      icon: js,
      stage: "intermediate",
    },
    {
      title: "TypeScript",
      icon: typeScript,
      stage: "intermediate",
    },
  ],
  CssFramework: [
    // {
    //   title: "TailwindCSS",
    //   icon: tailwind,
    //   stage: "advance",
    //   reference: "https://tailwindcss.com/",
    // },
    // {
    //   title: "Bootstrap",
    //   icon: Bootstrap,
    //   stage: "intermediate",
    // },
    // {
    //   title: "SASS",
    //   icon: SASS,
    //   stage: "intermediate",
    // },
    // {
    //   title: "PostCSS",
    //   icon: postcss,
    //   stage: "intermediate",
    // },
    // {
    //   title: "Open-Props",
    //   icon: openProps,
    //   stage: "intermediate",
    // },
    // {
    //   title: "Styled-Components",
    //   icon: styledComponents,
    //   stage: "intermediate",
    // },
  ],
  JSFramework: [
    {
      title: "TailwindCSS",
      icon: tailwind,
      stage: "advance",
    },
    {
      title: "React.js",
      icon: react,
      stage: "advance",
    },
    {
      title: "Redux, Redux Toolkit",
      icon: redux,
      stage: "advance",
    },
    {
      title: "Redux Thunk, RTK Query",
      icon: rtk,
      stage: "advance",
    },
    {
      title: "TanStack Query",
      icon: tanStackQuery,
      stage: "beginner",
    },
    {
      title: "Next.js 13",
      icon: next,
      stage: "beginner",
    },
  ],
  BackEnd: [
    {
      title: "Node.js",
      icon: node,
      stage: "beginner",
    },
    {
      title: "Express.js",
      icon: express,
      stage: "beginner",
    },
    {
      title: "MongoDB",
      icon: MongoDB,
      stage: "beginner",
    },

    {
      title: "Mongoose",
      icon: mongoose,
      stage: "beginner",
    },
  ],
  Tools: [
    // {
    //   title: "Git ",
    //   icon: git,
    //   stage: "intermediate",
    // },
    {
      title: "Git & Github",
      icon: gitAndGithub,
      stage: "intermediate",
    },

    {
      title: "Figma",
      icon: figma,
      stage: "intermediate",
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
      stage: "advance",
    },
    {
      title: "canva",
      icon: canva,
      stage: "beginner",
    },
  ],
};

export default skillData;
