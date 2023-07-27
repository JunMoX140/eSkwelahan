import React from 'react'
import DefaultNavbar from "../components/DefaultNavbar";
import Sidebar from "../components/TeacherSidebar";
import TeacherQuiz from './TeacherQuiz';

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
          <TeacherQuiz />
          </div>
          
        </div>
      </>
        
        

    
  )
}

export default Teacher
