import React from "react";
import { useState } from "react";
import { Navbar, Dropdown } from "flowbite-react";
import Logo from "../assets/images/logo 1 gradient.png";
import { Avatar } from "flowbite-react";
import { IoIosMenu, IoIosNotifications } from "react-icons/io";

function DefaultNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="bshadow-md w-full top-0 left-0">
        <div className="md:flex bg-color3 items-center justify-between py-2 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-point flex items-center font-[Poppins] text-gray-800">
            <img className="w-16" src={Logo} alt="" />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <IoIosMenu name={open ? "close" : "menu"} />
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-color3 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
              open ? "top-20" : "top-[-490px]"
            }`}
          >
            <li>
              <IoIosNotifications className="h-8 w-6" />
            </li>
            <button className="bg-lm-primary text-white md:ml-2 p-2 hover:bg-lm-accent text-sm rounded-lg">
              Sign out
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DefaultNavbar;
