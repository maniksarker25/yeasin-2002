"use client";

import FoldText from "@/components/Unique/Buttons/FoldText/FoldText";
import LiyaxuInput from "@/components/Unique/Input/liyaxuInput";
import projectData from "@/data/Projects/projectData";
import NextProjectCard from "@/pages/ProjectNext/NextProjectCard";
import Link from "next/link";
import { useId, useState } from "react";

const AllProjects = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredProjects = projectData.filter((project) => {
     return  project?.name?.toLowerCase().includes(searchValue.toLowerCase())
    }
  ) as typeof projectData;

  return (
    <>
      <main className=" h-full min-h-screen py-10 px-1 sm:px-2 md:px-4">
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-2 justify-between">
          <div className="order-last md:order-first">
            <h1 className="text-2xl text-teal-500 font-bold">Projects</h1>
            <p className="text-xl font-semibold text-gray-500">Here is my all projects</p>
          </div>
          <Link href={"/"} className="inline-block">
            <FoldText>
              <p>Go Back</p>
            </FoldText>
          </Link>
        </div>
        <div className="mt-8">
          <LiyaxuInput searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>

        <div className="@container mt-10">
          <div className="grid grid-cols-1  gap-x-3 gap-y-4 lg:grid-cols-2 ">
            {filteredProjects.map((value, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const id = useId();
              return (
                <NextProjectCard
                  key={id}
                  ProjectImage={value.ProjectImage}
                  id={index}
                  name={value.name}
                  gitHubLink={value.gitHubLink}
                  liveLink={value.liveLink}
                  tag={value.tag}
                  description={value.description}
                  isTranslate={false}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default AllProjects;
