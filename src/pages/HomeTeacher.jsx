import React from 'react'
import DefaultNavbar from '../components/DefaultNavbar'
import TeacherSubjects from '../components/TeacherSubjects';

function HomeTeacher() {
  return (
    <>
    <div className='w-full h-16'>
      <DefaultNavbar />  
    </div>
      <div className='top-16 w-2/3 mx-auto'>
        <button className='bg-lm-primary px-4 py-2 mb-4 text-lm-secondary text-sm rounded'>Add Subject</button>
        <TeacherSubjects />
      </div>
    </>
   
  )
}

export default HomeTeacher