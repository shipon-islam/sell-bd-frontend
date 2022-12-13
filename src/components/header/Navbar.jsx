import React from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

function Navbar() {
  return (
    <div className=" sticky top-0 z-10 bg-white">
      <TopNav />
      <BottomNav />
    </div>
  );
}

export default Navbar;
