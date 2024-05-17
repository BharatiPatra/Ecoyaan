import React, { useState } from "react";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./Drawer";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0  w-full z-10">
      <div
        className="flex md:flex-row justify-between items-center px-14 py-4
     h-[60px] duration-200 shadow-md "
      >
        <TemporaryDrawer />

        <div>
          <h1
            className="text-3xl font-semibold
             text-[#16a34a] w-40 hover:scale-110 duration-150 
        "
          >
            Ecoyaan
          </h1>
        </div>
        <div className="h-full flex md:flex-row gap-16 mt-1 font-medium invisible md:visible">
          <Link
            to=""
            className="text-xl w-16  hover:text-xl hover:scale-110 duration-150 "
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="text-xl w-24  hover:text-xl hover:scale-110 duration-150"
          >
            About Us
          </Link>
          <Link className="text-xl w-40  hover:text-xl hover:scale-110 duration-150">
            Sell on Ecoyaan
          </Link>
          <Link
            className="text-xl w-16 
           hover:text-xl hover:scale-110 duration-150"
          >
            Careers
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
