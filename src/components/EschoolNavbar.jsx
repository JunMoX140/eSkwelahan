'use client';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Dropdown, Navbar, Avatar }  from 'flowbite-react';
import Logo from "../assets/images/logo 1 gradient.png";
import picture from "../assets/images/user1.jpg";
import axios from 'axios';


export default function EschoolNavbar() {
  const navigate = useNavigate();
  const { user, email }= JSON.parse(localStorage.getItem("authenticatedUser"));

  async function onSignOut(){
    await axios({
      method:"POST",
      url: "/api/auth/sign-out"
    });
    navigate("/");
  }

  return (
    <>
    <Navbar fluid rounded className='bg-color3'>
      <Navbar.Brand href="/" className="border">
        <img alt="Escool Logo" className="mr-3 h-6 sm:h-9" src={Logo}/>
      </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false} inline label={<Avatar alt="User settings" img={picture} rounded/>}>
            <Dropdown.Header>
              <span className="block text-sm">
                { user }
              </span>
              <span className="block truncate text-sm font-medium">
                { email }
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <span onClick={onSignOut}>Sign out</span>
            </Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}


