import React, { useState, useRef } from 'react';
import { Card, TextInput, Label, Button } from 'flowbite-react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/images/logo 1 gradient.png'; // Adjust the path to your logo image
import BackgroundImage from '../assets/images/img7.jpg'; // Add your background image

export default function LandingPage() {
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'post',
        url: '/api/auth/sign-in',
        data: {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        },
      });

      const authenticatedUser = response.data;
      localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));

      const { userType } = JSON.parse(localStorage.getItem('authenticatedUser'));

      if (userType === 0) {
        navigate('/student');
      } else {
        navigate('/teacher');
      }
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
    <div
      className="h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="flex h-full">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <img
              src={Logo}
              className="animate-bounce w-50 h-70 mx-auto"
              alt=""
            />
            {/*<p className="text-4xl font-extrabold mb-4">
              "The future of education"
            </p>
            <p className="text-2xl">
              "The all-in-one web-based classroom management system designed to revolutionize learning. Empower teachers, engage students, and elevate education to new heights."
  </p>*/}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Card className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 bg-white bg-opacity-80 backdrop-blur-lg p-6">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
                LOGIN
              </h1>
            </div>
            <Form onSubmit={(event) => onSubmit(event)}>
              <div className="mb-4">
                <Label htmlFor="email" className="block text-lg text-gray-700">
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
                <Label htmlFor="password" className="block text-lg text-gray-700">
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
                <h5 className="text-red-500 text-lg italic">{errors}</h5>
              </div>
              <div className="mb-4">
                <label htmlFor="remember" className="flex items-center text-lg text-gray-700">
                  <input
                    type="checkbox"
                    id="remember"
                    className="mr-2"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember me
                </label>
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-blue-500 font-bold text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Log In
                </Button>
              </div>
              <div className="text-center mt-2 text-gray-600">
                Don't have an account?{' '}
                <Link to="/sign-up" className="underline text-blue-500">
                  Sign up
                </Link>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
}
