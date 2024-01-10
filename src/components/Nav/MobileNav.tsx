import Link from "next/link";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import { cn } from "$lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { robotoSlab } from "@/utils/GoogleFonts";
import { RiMenu3Fill } from "react-icons/ri";
import { navItems } from "./Nav";



interface MobileNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const MobileNav: FC<MobileNavProps> = ({ ...rest }) => {
  return (  
    <div {...rest}>
        <Popover>
          <PopoverTrigger className="cursor-pointer text-lg font-semibold   p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all">
          <RiMenu3Fill className="text-slate-950 " />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col relative -left-5 top-5 w-40">
            {navItems.map((val) => {
              return (
                <Link
                  key={val.title + val.url} 
                  className="border-b flex gap-x-1 items-center   border-transparent  hover:border-teal-700   text-gray-800 hover:text-gray-600 text-lg font-semibold  p-2 transition-all"
                  href={val.url}
                >
                  <p
                   className={cn("font-bold",   robotoSlab.className)}
                  > {val.title}</p>
                </Link>
              );
            })}
          </PopoverContent>
        </Popover>

    </div>
  );
};
