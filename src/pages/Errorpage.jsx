import React from 'react';
import { AiOutlineExclamationCircle, AiOutlineArrowLeft } from 'react-icons/ai';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='w-full h-screen'>
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
        <div className="flex flex-col items-center max-w-xl px-4">
          <img
            src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
            alt="Error"
            className="w-full mb-8"
          />
          <AiOutlineExclamationCircle className="text-red-500 text-8xl mb-4" />
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Error</h1>
          {/* <p className="text-gray-600 mb-4 text-lg sm:text-2xl text-center"></p> */}
          <Link to={'/'}>
            <Button size="lg" className="px-2">
              <AiOutlineArrowLeft size="20px" className='mr-2'/>
                Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
   
  );
};

export default ErrorPage;
