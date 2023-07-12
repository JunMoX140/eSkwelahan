import React from "react";
import { Outlet } from "react-router-dom";
import Eskwelahan from '../assets/images/eskwelahan.png'
import { Carousel } from 'flowbite-react';

function Landing() {

  return (
    <>
    <div>
    <div className="h-screen w-full "style={{background: 'linear-gradient(0deg, #D81159 0%, #D81159 100%), linear-gradient(180deg, #218380 0%, rgba(33, 131, 128, 0) 40%)'}}>
      <div className="grid grid-cols-2">
        <div className="relative">
          <img src={Eskwelahan} style={{right: 150, top:0, width: '764px', height: '335px',position: 'absolute'}} />
            <button className="bg-color5 text-xl" style={{width: 383, height: 76, right: 350, top: 650, position: 'absolute', textAlign: 'center', color: '#D81159', fontSize: 48, fontFamily: 'Monospace', fontWeight: '700', wordWrap: 'break-word', borderRadius: 30}}>Login</button>
            {/* <div style={{width: 400, height: 21, right: 375, top: 760, position: 'absolute', textAlign: 'right', color: '#FFBC42', fontSize: 20, fontFamily: 'Monospace', fontWeight: '300', textDecoration: 'underline', wordWrap: 'break-word'}}>Don't have an account? Sign Up</div> */}
            <div style={{width: 734, height: 132, right: 150, top: 320, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 48, fontFamily: 'Monospace', fontWeight: '700', wordWrap: 'break-word'}}>FREE Class Management System<br/>for everyone!</div>  
            <a href="/register" style={{width: 400, height: 21, right: 375, top: 760, position: 'absolute', textAlign: 'right', color: '#FFBC42', fontSize: 20, fontFamily: 'Monospace', fontWeight: '300', textDecoration: 'underline', wordWrap: 'break-word'}}>Don't have an account? Sign Up</a>
          </div>
        <div className="relative">
            <div style={{width: 325, height: 325, left: 700, top: -63, position: 'absolute', background: '#FFBC42', borderRadius: 9999}} />
            <div style={{width: 110, height: 110, left: 810, top: 280, position: 'absolute', background: '#FFBC42', borderRadius: 9999}} />
            <div style={{width: 370, height: 370, left: 550, top: 490, position: 'absolute', background: '#FFBC42', borderRadius: 9999}} />
            <div style={{width: 110, height: 110, left: 430, top: 730, position: 'absolute', background: '#FFBC42', borderRadius: 9999}} />


            <div style={{width: 600, height: 700, left: 200, top: 50, position: 'absolute', background: 'white', borderRadius: 20}}>
            <Carousel>
                <img
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                />
                <img
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                />
                <img
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                />
                <img
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                />
                <img
                  alt="..."
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                />
              </Carousel>
            </div>
        </div>

      </div>
      
      
    

    
        {/* <div className='h-full w-full grid grid-cols-2'>
         <div className="flex items-center justify-center col-span-1 grid grid-rows-2" >
          <div className=""></div>
          <div className="">
            <button className="bg-color5 text-color1 text-xl" style={{width: 383, height: 98, left: 151, top: 754, position: 'absolute', textAlign: 'center', color: '#D81159', fontSize: 48, fontFamily: 'Inconsolata', fontWeight: '700', wordWrap: 'break-word'}}>Login</button>
            </div>
         </div>
        </div> */}
      </div>
    </div>
     
       

{/* <div style={{width: '100%', height: '100vh', background: 'linear-gradient(0deg, #D81159 0%, #D81159 100%), linear-gradient(180deg, #218380 0%, rgba(33, 131, 128, 0) 40%)'}}>
  <img className="w-[764px] h-[335px]" src="https://via.placeholder.com/764x335" />
</div> */}

{/* <div style={{width: 1440, height: 1024, position: 'relative', background: 'white'}}>
  <div style={{width: 1440, height: 1024, left: 0, top: 1024, position: 'absolute', background: 'linear-gradient(0deg, #D81159 0%, #D81159 100%), linear-gradient(180deg, #218380 0%, rgba(33, 131, 128, 0) 40%)'}} />
  <div style={{width: 445, height: 445, left: 1066, top: -63, position: 'absolute', background: '#FFBC42', borderRadius: 9999}} />
  <div style={{width: 432, height: 400, left: 960, top: 624, position: 'absolute', background: '#FFBC42', borderRadius: 9999}} />
  <div style={{width: 148, height: 148, left: 1244, top: 405, position: 'absolute', background: '#FFBC42'}}></div>
  <div style={{width: 145, height: 149, left: 814, top: 848, position: 'absolute', background: '#FFBC42'}}></div>
  <img style={{width: 764, height: 335, left: 14, top: 47, position: 'absolute'}} src="https://via.placeholder.com/764x335" />
  <div style={{width: 533, height: 667, left: 785, top: 170, position: 'absolute', background: '#D9D9D9', borderRadius: 8}}></div>
  <div style={{left: 922, top: 453, position: 'absolute', color: '#FFBC42', fontSize: 48, fontFamily: 'Inconsolata', fontWeight: '700', wordWrap: 'break-word'}}>img carousel<br/>here</div>
  <div style={{width: 383, height: 98, left: 151, top: 754, position: 'absolute'}}>
    <div style={{width: 383, height: 98, left: 0, top: 0, position: 'absolute', background: '#FFBC42', borderRadius: 8}} />
    <div style={{left: 119, top: 24, position: 'absolute', textAlign: 'center', color: '#D81159', fontSize: 48, fontFamily: 'Inconsolata', fontWeight: '700', wordWrap: 'break-word'}}>LOG IN</div>
  </div>
  <div style={{width: 684, height: 257, left: 54, top: 608, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inconsolata', fontWeight: '700', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  <div style={{width: 298, height: 21, left: 181, top: 902, position: 'absolute', textAlign: 'right', color: '#FFBC42', fontSize: 20, fontFamily: 'Roboto', fontWeight: '300', textDecoration: 'underline', wordWrap: 'break-word'}}>Don't have an account? Sign Up</div>
  <div style={{width: 734, height: 132, left: 4, top: 382, position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: 48, fontFamily: 'Source Code Pro', fontWeight: '700', wordWrap: 'break-word'}}>FREE Class Management System<br/>for everyone!</div>
</div> */}
    </>
  );
}

export default Landing;
