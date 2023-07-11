import React from "react";
import Eskwelahan from '../assets/images/eskwelahan.png'
import BackgroundCover from '../assets/images/bg_landing.png'


function Landing() {
  const bg = 'src/assets/images/bg_landing.png'
  return (
    <>
      <div className="h-screen w-full">
        <div className='bg-[url("src/assets/images/bg_landing.png")] bg-cover h-full w-full grid grid-cols-2'>
         <div className="flex items-center justify-center col-span-1 grid grid-rows-2" >
          <div className=""></div>
          <div className="">
            <button className="bg-color5 text-color1 text-xl">Login</button>
            </div>
         </div>
        </div>
      </div>
       
    </>
  );
}

export default Landing;
