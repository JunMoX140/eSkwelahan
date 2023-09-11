import React from 'react'
import DefaultNavbar from "../components/DefaultNavbar";
import Sidebar from "../components/TeacherSidebar";
import DashboardTeacher from './DashboardTeacher';
import { Outlet } from 'react-router-dom';


function Teacher() {
  return (
      <>
        <div className='w-full'>
          <DefaultNavbar/>
        </div>
        <div className='flex'>
          <div>
          <Sidebar />
          </div>
          <div className='w-4/6 p-3'>
            <Outlet />
          </div>
        </div>
      </>
  )
}

export default Teacher
