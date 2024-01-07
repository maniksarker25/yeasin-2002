"use client"


import { DetailedHTMLProps, HTMLAttributes } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { AboutString } from "../../lib/AboutMeFuncString";
interface  Props extends  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}


export const  AboutMeInCode = ({ ...rest } : Props) => {
    return <div {...rest} className='w-full'>  
 <SyntaxHighlighter language="javascript" style={anOldHope}
  className="bg-transparent"
 >
      {AboutString} 
    </SyntaxHighlighter>
 
</div>
}
