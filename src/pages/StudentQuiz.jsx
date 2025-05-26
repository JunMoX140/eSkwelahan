import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import StudentQuizCard from '../components/StudentQuizCard';
import { Button } from 'flowbite-react';

function StudentQuiz() {
const [quizes, setQuizes] =useState([]);
const [quizTitle, setQuizTitle]=useState("");

const {quizid, classid} = useParams();


useEffect(() => {
    async function loadQuizDetails() {
        const response=await fetch(`/api/teacher/class/quiz/details/${quizid}`);
        const {details, content }= await response.json();
        const {title} = details[0];
        setQuizTitle(title);
        setQuizes(content);
    }
    loadQuizDetails();
    }, []);

  return (
    <div>
        <div className='bg-color3 pb-3'>
          <div className='w-100 h-16 grid grid-cols-2'>
            <div className='p-3'>
              <span className='text-2xl ml-3 mt-3 text-color1 font-bold'>{quizTitle}</span>
            </div>
            <div className='flex justify-end p-3'>
              <Button size="sm" className='mx-2'>Take Quiz</Button>
              <Button size="sm">Submit</Button>
            </div>
          </div>
            { quizes && quizes.map((quiz)=>(
            <StudentQuizCard key={quiz.activityItemId} details={quiz.activityContent}/>
            ))
            }
        </div>
    </div>
  )
}

export default StudentQuiz