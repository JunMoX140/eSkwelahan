import React from "react";
import { Outlet } from "react-router-dom";
import Eskwelahan from "../assets/images/logo 1 gradient.png";
import { Link } from "react-router-dom";
import DefaultCarousel from "../components/DefaultCarousel";
import DefaultNavbar from "../components/DefaultNavbar";
import FAQ from "../components/FAQ";
import { Button } from "flowbite-react";
import EschoolNavbar from "../components/EschoolNavbar";


function Landing() {
  return (
    <div id="top">
      <div className="w-screen h-screen bg-color3 pb-3">
        <div className="container">
          <div className="w-full h-full bg-color3">
            <EschoolNavbar/>
            {/* <nav className="bg-color3">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                    <div className="hidden sm:ml-3 sm:block">
                      <div className="flex space-x-4">
                        <a
                          href="#footer"
                          className="text-lm-text bg-color3 rounded-md px-3 py-2 text-sm font-medium"
                        >
                          CONTACT US
                        </a>
                        <a
                          href="#FAQ"
                          className="text-lm-text bg-color3 rounded-md px-3 py-2 text-sm font-medium"
                        >
                          FAQ&apos;s
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2">
                  <a
                    href="#"
                    className=" bg-lm-bg text-lm-text dark:bg-dark-bg dark:text-dark-text rounded-md px-3 py-2 text-base font-medium"
                  >
                    CONTACT US
                  </a>
                  <a
                    href="#"
                    className="text-color1 bg-color3 block rounded-md px-3 py-2 text-base font-medium"
                  >
                    FAQ&apos;s
                  </a>
                </div>
              </div>
            </nav> */}
            <div className="flex flex-1 bg-color3">
              <div className="grid grid-cols-2 gap-8 mr-10">
                <div className="flex flex-wrap justify-end">
                  <div className="w-full">
                    <img className="h-250" src={Eskwelahan} alt="" />
                  </div>
                  <div className="w-full text-center">
                    <p>
                      &quot;Unlock the future of education with&quot;
                      <br />
                      <span className="text-lg font-bold">
                        <h1 className="bg-gradient-to-r from-lm-primary via-80% to-lm-accent bg-clip-text text-transparent">
                          eSkwelahan:
                        </h1>
                      </span>
                      <br />
                      &quot;Unlock the future of education with eSkwelahan: the
                      all-in-one web-based classroom management system designed
                      to revolutionize learning.
                      <br />
                      Empower teachers, engage students, and elevate education
                      to new heights.&quot;
                    </p>
                    <div className="w-full flex justify-center mt-8">
                    <Link to={"/login"}>
                      <Button className=" mx-auto px-4 text-2xl uppercase rounded-md">
                        Login
                      </Button>
                    </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-full h-full p-4">
                    <DefaultCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
