import React from "react";
import { useState } from "react";
import { Navbar, Dropdown, Button } from "flowbite-react";
import Logo from "../assets/images/logo 1 gradient.png";
import { Avatar } from "flowbite-react";
import { IoIosMenu, IoIosNotifications } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DefaultNavbar() {

  const navigate=useNavigate();

  async function onSignOut(){
    await axios({
      method:"POST",
      url: "/api/auth/sign-out"
    });
    navigate("/");
  }
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
              <Button size="xs" onClick={onSignOut}>Sign Out</Button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DefaultNavbar;
