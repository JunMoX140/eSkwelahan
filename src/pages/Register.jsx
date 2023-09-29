import React, { useRef, useState } from "react";
import Eskwelahan from "../assets/images/logo 1 gradient.png";
import RegisterLogo from "../assets/images/register_icon.png";
import { MdAssignmentInd } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Form, redirect, Navigate, useNavigate } from "react-router-dom";
import { Button, Card, Label, TextInput, Select } from "flowbite-react";
'use client'
export default function Register() {
const navigate=useNavigate();
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

  try{
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

    const { userType } = JSON.parse(localStorage.getItem("authenticatedUser"));

    if(userType === 0){ navigate("/student"); }
    else {navigate("/teacher");}
  }catch(e){

  }

  


}


  return (
    <>
      <div className="bg-color3 w-screen">
        <div className="w-2/5 mx-auto pt-5">
          <Card>
          <div className="flex w-full justify-center">
            <MdAssignmentInd className=" w-12 h-12 text-color1"/>
          </div>
          <div className="flex w-full justify-center">
            <h2 className="text-2xl">
              <strong>REGISTER</strong>
            </h2>
          </div>
          <div className="flex w-full justify-center pt-2">
            <Form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                  <Label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </Label>
                  <TextInput
                    id="grid-last-name"
                    type="text"
                    placeholder="Rizal"
                    ref={lastnameRef}
                    required
                    
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <Label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name 
                  </Label>
                  <TextInput
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
                  <Label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-middle-name"
                  >
                    Middle Name
                  </Label>
                  <TextInput
                    id="grid-middle-name"
                    type="text"
                    placeholder="Protasio"
                    ref={middlenameRef}
                    
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <Label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-suffix"
                  >
                    Suffix
                  </Label>
                  <TextInput
                    id="grid-suffix"
                    type="text"
                    placeholder="Jr"
                    ref={suffixRef}
                    
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <Label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-email"
                  >
                    Email
                  </Label>
                  <TextInput
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
                  <Label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-usertype"
                  >
                    Register as
                  </Label>
                  <Select
                    ref={userTypeRef}
                    id="grid-usertype"
                  >
                    <option value="0">--Please select--</option>
                    <option value="1">Student</option>
                    <option value="2">Teacher</option>
                  </Select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <Label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </Label>
                  <TextInput
                  ref={passwordRef}
                    id="grid-password"
                    type="password"
                    placeholder="******"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <Label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-confirmpassword"
                  >
                    Confirm Password
                  </Label>
                  <TextInput
                    ref={confirmpasswordRef}
                    id="grid-confirmpassword"
                    type="password"
                    placeholder="*******"
                    required
                  />
                  <p className="text-red-600 text-xs italic">
                    {invalidPassword ? "Passwords do not match!": null}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 text-center">
                  <Button type="submit" onClick={onSignupClick} className="w-full text-lg rounded-lg mb-2 text-white">
                    Sign Up
                  </Button>
                  <a className="w-full text-blue-700 underline" href="/">
                    Already have and account?Sign in
                  </a>
                </div>
              </div>
            </Form>
          </div>
          </Card>
          
        </div>
      </div>
    </>
  );
}

