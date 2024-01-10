"use client"

import React from "react";
import Tilty from "react-tilty";

import { Highlight, themes } from "prism-react-renderer";
import { AboutString } from "../../lib/AboutMeFuncString";

// assets
import bloods from "@/assets/bloobs/Rings.svg";
import Image from "next/image";

const AboutCode = () => {
  return (
    <>
      <Tilty
        max={10}
        reverse={false}
        speed={100}
        maxGlare={1}
        className=" sm:text-sm   xl:text-2xl  md:text-sm md:mx-0 md:p x-0 sm:mx-24 mt-6 xl:mt-0 inline-block xl:mx-3  relative overflow-x-hidden text-xs rounded-lg md:h-full"
        style={{
          background: `rgba(255,255,255,.01)`,
          boxShadow: "0 25px 45px rgba(0,0,0,.2)",
          backdropFilter: `blur(5px)`,
        }}
      >
        <Highlight theme={themes.okaidia} code={AboutString} language="tsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="bg-transparent inline-block">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        <div>
          <Image src={bloods} alt="icons" className=" absolute bottom-0 right-0 pointer-events-none " />
        </div>
      </Tilty>
    </>
  );
};
export default AboutCode;
