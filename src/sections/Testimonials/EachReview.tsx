import useColorTheme from "@/hooks/useColorTheme";
import React from "react";
import { AiFillStar } from "react-icons/ai";

type Props = {};

const EachReview = (props: Props) => {
  const { color } = useColorTheme();
  return (
    <div className={` h-52  bg-green-800 w-full px-10 py-2 mx-4  rounded-md`}>
      <div className=" flex justify-between">
        <div>
          img
          <div>
            <h3>name</h3>
            <h4>role</h4>
          </div>
        </div>
        <div>
          <AiFillStar className="text-yellow-300" />
        </div>
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur harum inventore, id repellendus quisquam
        maiores sapiente accusantium sequi deleniti hic!
      </div>
    </div>
  );
};

export default EachReview;
