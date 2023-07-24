import React from 'react';
import { useState } from 'react';
import { Navbar, Dropdown } from 'flowbite-react';
import Logo from '../assets/images/logo 1 gradient.png';
import { Avatar } from 'flowbite-react';
import { IoIosMenu } from 'react-icons/io';


function DefaultNavbar() {
  const links = [
    {name:"HOME", link : "/"},
    {name:"SERVICE", link : "/"},
    {name:"ABOUT", link : "/"},
    {name:"BLOG'S", link : "/"},
    {name:"CONTACT", link : "/"},
  ];
  const [open,setOpen]=useState(false);
  return (
    <div>
      <div className='bshadow-md w-full fixed top-0 left-0'>
        <div className='md:flex bg-color3 items-center justify-between py-2 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-point flex items-center font-[Poppins] text-gray-800'>
            
          <img className='w-16' src={Logo} alt="" />
          </div>
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>< IoIosMenu name={open ? 'close':'menu'} /></div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-color3 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? 'top-20':'top-[-490px]'}`}>
            {
              links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-md md:my-0 my-7 '>
                  <a href={link.link} className='text-color1 hover:text-gray-400'>{link.name}</a>
                  </li>
              ))
            }
            <button className='bg-color1 text-white md:ml-8 hover:bg-indigo-400 rounded-full'><img className='w-12' src={Logo} alt="" /></button>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default DefaultNavbar