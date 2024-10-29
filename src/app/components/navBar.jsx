import React from "react";
import NavbarItem from "./navbarItem";

function NavBar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6 ">
      <NavbarItem param={"fetchTrending"}>Trending</NavbarItem>
      <NavbarItem param={"fetchTopRated"}>Top Rated</NavbarItem>
    </div>
  );
}

export default NavBar;
