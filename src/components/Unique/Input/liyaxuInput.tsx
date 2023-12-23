"use client"

import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from "react";
import styles from "./liyaxuInput.module.css";

interface  TextArr  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
};

const LiyaxuInput = ({ searchValue, setSearchValue, ...rest }: TextArr) => {
  const textArr = [
    {
      text: "S",
      delay: 100,
    },
    {
      text: "e",
      delay: 150,
    },
    {
      text: "a",
      delay: 200,
    },
    {
      text: "r",
      delay: 250,
    },
    {
      text: "c",
      delay: 300,
    },
    {
      text: "h",
      delay: 350,
    },
  ];
  return (
    <div>
      <div className={styles.formControl}>
        <input type="value" required value={searchValue} onChange={(e) =>  setSearchValue(e?.currentTarget?.value)} 
        {...rest}
        />
        <label>
          {textArr.map((val) => {
            const delays = `${val.delay}ms`;
            return (
              <span
                key={val.text}
                style={{
                  transitionDelay: delays,
                }}
              >
                {val.text}
              </span>
            );
          })}
        </label>
      </div>
    </div>
  );
};

export default LiyaxuInput;
