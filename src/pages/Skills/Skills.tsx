import { cn } from "$lib/utils";
import { skillTypeHeading } from "@/data/SkillHeading";
import skillData from "@/data/skillData";
import React from "react";
import LoopOverSkill from "./LoopOverSkill";


const Skills = () => {
  return (
    <section className="eachSections py-10" id="skill">
      <h3 className="title">Skills</h3>
      <div className="grid justify-end mt-5 md:mt-1">
        {
          skillTypeHeading.map((heading) => { 
           return  <p className="flex items-center"
            key={heading.title}
           >
            <span className={cn("inline-block w-4 h-4 mr-2  rounded-full ", heading.color)}/>
            <span className="text-gray-300 font-medium">
              {heading.title}
            </span>
          </p>
           })
        }
      </div>
      
      
      <LoopOverSkill skillType={skillData.FrontEnd} title="Front End" />
      <LoopOverSkill skillType={skillData.BackEnd} title="Back End" />
      <LoopOverSkill skillType={skillData.Tools} title="Tools" />
    </section>
  );
};
export default Skills;
