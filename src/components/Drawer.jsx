import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <div>
        <div className="flex p-3 mt-5 mx-6 gap-6">
          <h1
            className="text-3xl font-semibold
             text-[#16a34a]  hover:scale-110 duration-150 
        "
          >
            Ecoyaan
          </h1>
          <MdOutlineMenuOpen className="text-3xl mt-2" />
        </div>
        <div>
          <ul className="flex flex-col  pl-12 text-lg font-medium mt-4">
            <NavLink
              to=""
              className={({ isActive }) =>
                `hover:bg-gray-300 p-2 hover:rounded-md mr-5 ${
                  isActive
                    ? "bg-green-600 rounded-md mr-5 text-white"
                    : "bg-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `hover:bg-gray-300 p-2 hover:rounded-md mr-5 ${
                  isActive
                    ? "bg-green-600 rounded-md mr-5 text-white"
                    : "bg-white"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink className="hover:bg-gray-300 p-3 hover:rounded-md hover:mr-5">
              Sell on Ecoyaan
            </NavLink>
            <NavLink className="hover:bg-gray-300 p-3 hover:rounded-md hover:mr-5">
              Careers
            </NavLink>
            <NavLink className="hover:bg-gray-300 p-3 hover:rounded-md hover:mr-5">
              Privacy Policy
            </NavLink>
            <NavLink className="hover:bg-gray-300 p-3 hover:rounded-md hover:mr-5">
              Terms of Use
            </NavLink>
          </ul>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="md:hidden">
      <button
        className="  pr-4 -ml-8 mt-2 text-2xl"
        onClick={toggleDrawer(true)}
      >
        <MdOutlineMenu />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
