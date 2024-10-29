import React from "react";
import NavbarItem from "./navbarItem";

function NavBar() {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <NavbarItem param={"fetchTrending"}>Trending</NavbarItem>
      <NavbarItem param={"fetchTopRated"}>Top Rated</NavbarItem>
    </div>
  );
}

export default NavBar;
