import React from "react";
import { Outlet } from "react-router-dom";
import Eskwelahan from "../assets/images/logo 1 gradient.png";
import { Link } from "react-router-dom";
import DefaultCarousel from "../components/DefaultCarousel";
import DefaultNavbar from "../components/DefaultNavbar";
import FooterComp from "../components/FooterComp";
import FAQ from "../components/FAQ";
import CallToAction from "../components/CallToAction";

function Landing() {
  return (
    <div id="top">
      <div className="w-screen h-screen bg-color3">
        <div className="container mx-auto">
          <div className="w-full h-screen bg-color3">
            <nav className="bg-color3 mb-6">
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

                        <Link
                          to={"/login"}
                          className="text-lm-text bg-lm-primary hover:bg-lm-accent rounded-md px-3  py-2 text-sm font-medium uppercase"
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
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
                  <a
                    href="#"
                    className="text-color3 bg-lm-primary block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Login
                  </a>
                </div>
              </div>
            </nav>
            <div className="flex flex-1 bg-color3">
              <div className="grid grid-cols-2 gap-8 mr-12">
                <div className="flex flex-wrap justify-end">
                  <div className="w-3/4">
                    <img className="h-300" src={Eskwelahan} alt="" />
                  </div>
                  <div className="w-3/4 text-center">
                    <p>
                      &quot;Unlock the future of education with&quot;
                      <br />
                      <span className="text-lg font-bold">
                        <h1 className="bg-gradient-to-r from-lm-primary via-80% to-lm-accent bg-clip-text text-transparent">
                          eSkwelahan:
                        </h1>
                      </span>
                      <br />
                      <br />
                      &quot;Unlock the future of education with eSkwelahan: the
                      all-in-one web-based classroom management system designed
                      to revolutionize learning.
                      <br />
                      <br />
                      Empower teachers, engage students, and elevate education
                      to new heights.&quot;
                    </p>
                    <div className=" w-60 flex justify-start mt-16 ml-36">
                      <CallToAction />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className=" w-11/12 h-full">
                    <DefaultCarousel />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQ className=" w-screen h-screen" />
      <FooterComp />
    </div>
  );
}

export default Landing;
