import Link from "next/link";
import React from "react";
import MenuItem from "./menuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./darkModeSwitch";
function Header() {
  return (
    <header className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem href={"/"} Icon={AiFillHome}>
          Home
        </MenuItem>
        <MenuItem href={"/about"} Icon={BsFillInfoCircleFill}>
          About
        </MenuItem>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
