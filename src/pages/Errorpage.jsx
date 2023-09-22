import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <div className="flex flex-col items-center max-w-xl px-4">
        <img
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          alt="Error"
          className="w-full mb-8"
        />
        <AiOutlineExclamationCircle className="text-red-500 text-8xl mb-4" />
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Error</h1>
        <p className="text-gray-600 mb-4 text-lg sm:text-2xl text-center">Please try again.</p>
        <button className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
