import React, {useState, useRef} from 'react'
import { Navbar, Card, Button, TextInput, Label} from 'flowbite-react'
import Logo from "../assets/images/logo 1 gradient.png";
import DefaultCarousel from '../components/DefaultCarousel';
import Eskwelahan from "../assets/images/logo 1 gradient.png";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Form, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';




export default function LandingPage() {

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
    
    const { userType } = JSON.parse(localStorage.getItem("authenticatedUser"));

    if(userType == 1){ navigate("/student"); }
    else {navigate("/teacher");}

    } catch (err) {
    console.log(err);
      const { error } = err.response.data;
      return setErrors(error);
    }
  }

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <>
    <div className='h-screen bg-color3'>
            <div className='w-full h-full grid grid-cols-2'>
                <div className='flex w-full items-center justify-center'>
                    <div className='w-11/12'>
                        <div className='flex w-full justify-center'>
                            <img src={Eskwelahan} className='h-52' alt="" />
                        </div>
                        <div className="w-full text-center">
                            &quot;The future of education&quot;
                            <br />
                            <span className="text-lg font-bold">
                            {/* <h1 className="bg-color2 bg-clip-text text-transparent">
                                eSkwelahan:
                            </h1> */}
                            </span>
                            <br />
                            &quot;The
                            all-in-one web-based classroom management system designed
                            to revolutionize learning.
                            <br />
                            Empower teachers, engage students, and elevate education
                            to new heights.&quot;
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Card className='w-4/5'>
                        <div className='text-center'>
                            <h1 style={{fontSize:"30px",fontWeight:"bold"}}>LOGIN</h1>
                        </div>
                        <Form>
                            <div className="mb-4">
                                <Label htmlFor="email" className="block mb-2">
                                    Email Address
                                </Label>
                                <div className="flex items-center">
                                    <TextInput
                                        icon={FiMail}
                                        type="email"
                                        id="email"
                                        className="flex-1 rounded-r-md"
                                        placeholder="Enter your email"
                                        ref={emailRef}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <Label htmlFor="password" className="block mb-2">
                                    Password
                                </Label>
                                <div className="flex items-center">
                                <TextInput
                                    icon={FiLock}
                                    type="password"
                                    id="password"
                                    className="flex-1 rounded-r-md"
                                    placeholder="Enter your password"
                                    ref={passwordRef}
                                    required
                                />
                                </div>
                            </div>
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
                            <div className="text-center mt-2 text-gray-600">
                                Don't have an account?{" "}
                                <Link to={"/sign-up"} className="underline text-blue-500">
                                Sign up
                                </Link>
                            </div>
                        </Form>
                    </Card>
                </div>
            </div>
    </div>
    </>
  )
}
