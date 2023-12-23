
import Logo from "$components/Globals/Logo";
import Link from "next/link";

import contact from "$assets/3d/contack.png";
import skill from "$assets/3d/diary.png";
import home from "$assets/3d/macos-home-logo.png";
import project from "$assets/3d/project.png";

import { MobileNav } from "./MobileNav";

export const navItems = [
  {
    title: "Home",
    url: "",
    Icon: home,
  },
  {
    title: "skill",
    url: "#skill",
    Icon: skill,
  },
  {
    title: "Projects",
    url: "#projects",
    Icon: project,
  },
  {
    title: "Contact",
    url: "#contact",
    Icon: contact,
  },
];

const Nav = () => {
  return (
    <nav
      className="fixed left-0 right-0  top-3 z-10  mx-auto flex w-10/12 items-center justify-between rounded-lg  py-3 px-5 "
      //  glass effect
      style={{
        background: `rgba(255, 255, 255, 0.2)`,
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1)`,
        backdropFilter: `blur(5px)`,
        border: `1px solid rgba(255, 255, 255, 0.3)`,
      }}
    >
      <Link href={"/"} className="h-10 w-10 ">
        <Logo className="h-full w-full " />
      </Link>

      <MobileNav />     
    </nav>
  );
};

export default Nav;
