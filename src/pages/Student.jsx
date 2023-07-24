import React from 'react'
import DefaultNavbar from "../components/DefaultNavbar";
import StudentSidebar from '../components/StudentSidebar';

function Student() {
  return (
    <>
      <div>
      <DefaultNavbar />
      </div>
      <div>
        <StudentSidebar />
      </div>
    </>
    
  )
}

export default Student