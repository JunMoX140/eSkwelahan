import React from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-md px-10 py-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiUser className="text-gray-500" />
              </span>
              <input
                type="text"
                id="name"
                name="name"
                className="pl-10 pr-4 py-2 w-full border rounded-md text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiMail className="text-gray-500" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className="pl-10 pr-4 py-2 w-full border rounded-md text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FiLock className="text-gray-500" />
              </span>
              <input
                type="password"
                id="password"
                name="password"
                className="pl-10 pr-4 py-2 w-full border rounded-md text-sm text-gray-700 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>

          <div className="text-center mt-4 text-gray-600">
            <p>
              <input type="checkbox" id="newsletter" name="newsletter" className="mr-2" />
              I want to receive inspiration, marketing promotions and updates via email.
            </p>
          </div>

          <div className="text-center mt-4 text-gray-600">
            <p>
            Already have an account? <a href="#" className="text-blue-500">Sign in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
