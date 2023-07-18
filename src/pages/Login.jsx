import React, { useState } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary p-4">
      
      
      <div className="max-w-md w-2/3 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
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
              />
            </div>
          </div>
          <div className="mb-4">
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
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              className={`mr-2 ${
                rememberMe ? 'text-pink-700 border-pink-700' : 'text-gray-700 border-gray-400'
              }`}
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label
              htmlFor="rememberMe"
              className={`text-gray-700 text-sm font-bold ${rememberMe ? 'text-pink-700' : ''}`}
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Log In
          </button>
          <div className="text-center mt-4 text-gray-600">
            <a href="#" className="underline text-blue-500">
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-2 text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="underline text-blue-500">
              Sign up
            </a>
          </div>

          <div className="flex justify-center mt-2">
              <button className="bg-blue-500 hover:bg- text-white py-2 px-4 rounded-full mr-2">
                <FcGoogle className="inline-block mr-1" /> Google
              </button>
              <button className="bg-blue-800 hover:bg-primary text-white py-2 px-4 rounded-full">
                <FaFacebookF className="inline-block mr-1" /> Facebook
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login