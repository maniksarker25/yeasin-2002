"use client"

import { CodeBlock, tomorrowNight } from 'react-code-blocks';
import { AboutString } from "../../lib/AboutMeFuncString";


export const  CodeBlocks = () => {
    return    <CodeBlock
    text={AboutString}
    language={"jsx"}
    showLineNumbers={false}
    theme={tomorrowNight}
       
  />

}
