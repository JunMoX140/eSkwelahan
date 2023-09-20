import React, { useRef, useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import ELogo from "../components/ELogo";
import DefaultCarousel from "../components/DefaultCarousel";
import { Button } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState("");

  const navigate = useNavigate()
  const emailRef=useRef();
  const passwordRef=useRef();

  async function onSubmit(e){
    e.preventDefault();

    try {
      const response = await axios({
        method: "post",
        url: "/api/auth/sign-in",
        data: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
      });

      const authenticatedUser = response.data;
      localStorage.setItem(
        "authenticatedUser",
        JSON.stringify(authenticatedUser)
      );

      const usertype = JSON.parse(localStorage.getItem("authenticatedUser"));
      if(usertype === 1){ navigate("/teacher"); }
      else {navigate("/student");}
    } catch (err) {
      
      const { error } = err.response.data;
      return setErrors(error);
    }
    
    
  }

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="h-screen bg-lm-bg">
      <div className="container bg-lm-bg">
        <nav className=" container w-16 h-16  ml-36 mb-12 pt-2 bg-lm-bg">
          <ELogo className="" />
          {/* <img className="ml-6 h-16" src={Eskwelahan} alt="" /> */}
        </nav>
      </div>
      <div className=" flex row-span-2 justify-center mx-24">
        <div className=" w-7/12 h-6/12 drop-shadow-md">
          <DefaultCarousel />
        </div>
        <div className=" bg-lm-bg flex items-center justify-center bg-primary w-5/12 -px-12 ">
          <div className="max-w-md w-screen bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 uppercase">
              Login
            </h2>
            <form>
           
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email Address
                </label>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-2 bg-gray-200 rounded-l-md">
                    <FiMail className="text-gray-500" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="flex-1 py-2 px-4 border border-gray-200 rounded-r-md"
                    placeholder="Enter your email"
                    ref={emailRef}
                    required
                  />
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="password" className="block mb-2">
                  Password
                </label>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-2 bg-gray-200 rounded-l-md">
                    <FiLock className="text-gray-500" />
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="flex-1 py-2 px-4 border border-gray-200 rounded-r-md"
                    placeholder="Enter your password"
                    ref={passwordRef}
                    required
                  />
                </div>
              </div>
              {/* <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className={`mr-2 ${
                    rememberMe
                      ? "text-pink-700 border-pink-700"
                      : "text-gray-700 border-gray-400"
                  }`}
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label
                  htmlFor="rememberMe"
                  className={`text-gray-700 text-sm font-bold ${
                    rememberMe ? "text-pink-700" : ""
                  }`}
                >
                  Remember me
                </label>
              </div> */}
               <div className="mb-2">
                <h5 style={{color:"red", fontSize:"12px", fontStyle:"italic"}}>{errors}</h5>
              </div>
              <div>
                <Button
                  onClick={(event)=>onSubmit(event)}
                  type="submit"
                  className="w-full text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Log In
                </Button>
              </div>
              
             
              {/* <div className="text-center mt-4 text-gray-600">
                <a href="#" className="underline text-blue-500">
                  Forgot Password?
                </a>
              </div> */}
              <div className="text-center mt-2 text-gray-600">
                Don't have an account?{" "}
                <Link to={"/sign-up"} className="underline text-blue-500">
                  Sign up
                </Link>
              </div>
              {/* <div className="flex justify-center mt-2">
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
    </div>
  );
};

export default Login;
