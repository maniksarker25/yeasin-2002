"use client";
import { MantineProvider } from '@mantine/core';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent } from "react";

import '@mantine/core/styles.css';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  // const { color, BgColor } = useColorTheme();

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      style={{
        background: `#000000`,
        color: "white",
      }}
      className={`  w-full       `}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="z-0 px-1 transition-all"
        style={{
          background: useMotionTemplate`
      radial-gradient( 650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15),transparent 80% )`,
        }}
      >
           <MantineProvider >
                {children}
           </MantineProvider>
      </motion.div>
    </div>
  );
};

export default Wrapper;
