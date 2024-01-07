import { IconType } from "react-icons";

export interface Item {
  title: string;
  icon: any;
  stage: "beginner" | "intermediate" | "advance";
  reference?: string;
}
export default interface skillDataTypes {
  Language?: Item[];
  CssFramework?: Item[];
  FrontEnd: Item[];
  BackEnd: Item[];
  Tools: Item[];
}
