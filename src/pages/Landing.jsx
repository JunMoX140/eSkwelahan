import React from "react";
import { Outlet } from "react-router-dom";
import Eskwelahan from "../assets/images/logo 1 gradient.png";
import { Link } from "react-router-dom";
import DefaultCarousel from "../components/DefaultCarousel";
import DefaultNavbar from "../components/DefaultNavbar";

function Landing() {
  return (
    <>
      <div className="container">
        <div className="w-full h-screen bg-color3">
        <nav className="bg-color3">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#" className="text-color1 bg-color3 rounded-md px-3 py-2 text-sm font-medium">ABOUT US</a>
            <a href="#" className="text-color1 bg-color3 rounded-md px-3 py-2 text-sm font-medium">FAQ's</a>
            <a href="#" className="text-color3 bg-color1 rounded-md px-3  py-2 text-sm font-medium">
                Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <a href="#" className="text-color1 bg-color3 block rounded-md px-3 py-2 text-base font-medium">ABOUT US</a>
      <a href="#" className="text-color1 bg-color3 block rounded-md px-3 py-2 text-base font-medium">FAQ's</a>
      <a href="#" className="text-color3 bg-color1 block rounded-md px-3 py-2 text-base font-medium">Login</a>
    </div>
  </div>
</nav>
<div className="grid grid-cols-2 sm:grid-flow-row ">
  <div className="flex flex-wrap justify-end">
    <div className="w-3/4">
    <img className="h-300" src={Eskwelahan} alt="" />
    </div>
    <div className="w-3/4 text-center">
        <p>"Unlock the future of education with"<br/><span className="text-color1 font-bold">eskwelahan:</span><br/><br/>
        "Unlock the future of education with eSkwelahan:
        the all-in-one  web-based classroom management system designed to revolutionize learning.<br/><br/>
        Empower teachers, engage students, and elevate education to new heights."</p>
    </div>
  </div>
  <div className="flex items-center">
    <div className="w-96 h-full ml-8">
      <DefaultCarousel />
    </div>
  </div>

</div>
        </div>
      </div>
    </>
  );
}

export default Landing;
