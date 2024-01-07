"use client"


import { DetailedHTMLProps, HTMLAttributes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { AboutString } from "../../lib/AboutMeFuncString";
interface  Props extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const  AboutMeInCode = ({ ...rest } : Props) => {
    return <div {...rest}> 
 {/* <CodeHighlight code={AboutString} language="tsx"   /> */}
 <SyntaxHighlighter language="javascript" style={darcula}
  className="bg-transparent"
 >
      {AboutString}
    </SyntaxHighlighter>
 
</div>
}
