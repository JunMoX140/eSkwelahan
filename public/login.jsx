import React from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/3">
        {/* Add your carousel component or content here */}
        <h2 className="text-2xl text-center">Carousel</h2>
      </div>
      <div className="max-w-md w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-700 text-sm font-bold">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
          <div className="text-center mt-4 text-gray-600">
            <a href="#" className="underline text-blue-500">Forgot Password?</a>
          </div>
          <div className="text-center mt-2 text-gray-600">
            Don't have an account? <a href="#" className="underline text-blue-500">Sign up</a>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-white text-gray-600 hover:text-blue-500 px-4 py-2 rounded-full border">
              <FcGoogle className="mr-2" />
              <span className="text-sm font-semibold">Google</span>
            </button>
            <button className="bg-white text-gray-600 hover:text-blue-500 px-4 py-2 rounded-full border">
              <FaFacebookF className="mr-2" />
              <span className="text-sm font-semibold">Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
