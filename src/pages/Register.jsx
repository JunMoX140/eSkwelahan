import React, { useRef, useState } from "react";
import Eskwelahan from "../assets/images/logo 1 gradient.png";
import RegisterLogo from "../assets/images/register_icon.png";
import { MdAssignmentInd } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import SwitchViewButton from "../components/SwitchViewButton";
import ELogo from "../components/ELogo";
import { Button } from "flowbite-react";

export default function Register() {

const firstnameRef=useRef();
const lastnameRef=useRef();
const middlenameRef=useRef();
const suffixRef=useRef();
const emailRef=useRef();
const userTypeRef=useRef();
const passwordRef=useRef();
const confirmpasswordRef=useRef();

const [ invalidPassword, setInvalidPassword ] = useState(false);


async function onSignupClick(){

  if(passwordRef.current?.value !== confirmpasswordRef.current?.value){
    setInvalidPassword(true);
    return;
  }

  await fetch("api/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lastName: lastnameRef.current?.value,
      firstName: firstnameRef.current?.value,
      middleName: middlenameRef.current?.value,
      suffix: suffixRef.current?.value,
      userType: Number(userTypeRef.current?.value),
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    }),
  });

}


  return (
    <>
      <div className="bg-lm-bg w-screen">
        <nav className=" container w-16 h-16  ml-36 pt-2">
          <ELogo className="" />
        </nav>
        <div className="w-1/3 mx-auto pt-5">
          <div className="flex w-full justify-center">
            <MdAssignmentInd
              className=" w-12 h-12 text-lm-primary"
            />
          </div>
          <div className="flex w-full justify-center">
            <h2 className="text-2xl">
              <strong>REGISTER</strong>
            </h2>
          </div>
          <div className="flex w-full justify-center pt-5">
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-last-name"
                    type="text"
                    placeholder="Rizal"
                    ref={lastnameRef}
                    required
                    
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name 
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jose"
                    ref={firstnameRef}
                    required
                   
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-middle-name"
                  >
                    Middle Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-middle-name"
                    type="text"
                    placeholder="Protasio"
                    ref={middlenameRef}
                    
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-suffix"
                  >
                    Suffix
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-suffix"
                    type="text"
                    placeholder="Jr"
                    ref={suffixRef}
                    
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="example@gmail.com"
                    ref={emailRef}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-usertype"
                  >
                    Register as
                  </label>
                  <select
                    ref={userTypeRef}
                    id="grid-usertype"
                    className='className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'
                  >
                    <option value="0">Student</option>
                    <option value="1">Teacher</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                  ref={passwordRef}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******"
                    required
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-confirmpassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    ref={confirmpasswordRef}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-confirmpassword"
                    type="password"
                    placeholder="*******"
                    required
                  />
                  <h5 style={{color:"red", fontSize:"10px", fontStyle:"italic"}}>{invalidPassword ? "PASSWORD DON'T MATCH": null}</h5>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 text-center">
                  <Button type="submit" onClick={onSignupClick} className="w-full text-lg p-2 rounded-lg mb-2 text-white">
                    Sign Up
                  </Button>
                  <a className="w-full text-blue-700 underline" href="/login">
                    Already have and account?Sign in
                  </a>
                </div>
              </div>

              {/* <div className="flex justify-center mt-2 mb-4">
                <button className="bg-blue-500 hover:bg- text-white py-2 px-4 rounded-full mr-2">
                  <FcGoogle className="inline-block mr-1" /> Google
                </button>
                <button className="bg-blue-800 hover:bg-primary text-white py-2 px-4 rounded-full">
                  <FaFacebookF className="inline-block mr-1" /> Facebook
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>
      <div>
        {/* <SwitchViewButton /> */}
      </div>
    </>
  );
}

