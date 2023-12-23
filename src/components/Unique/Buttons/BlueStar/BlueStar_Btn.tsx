import { HiPencilAlt } from "react-icons/hi";
import classes from "./BlueStar.module.css";

const BlueStar_Btn = ({ children, ...res }: BlueStar) => {
  return (
    <>
      <button
        {...res}
        className={`  ${classes.sparkleButton} font-bold  2xl:py-7 rounded-full  px-4 py-2  w-full  2xl:px-20 flex `}
      >
        <span className={classes.spark}></span>
        <span className={classes.backdrop}></span>
        <HiPencilAlt className="text-black" />
        <span className={`${classes.text} lg:text-2xl`}>{children}</span>
      </button>
    </>
  );
};

export default BlueStar_Btn;
//
