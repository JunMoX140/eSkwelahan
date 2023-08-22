import React from 'react'
import { useState } from 'react';
import QuizCard from '../components/QuizCard'
import { GrAdd } from 'react-icons/gr'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import ModalAddQuiz from "../components/ModalAddQuiz";

function TeacherQuiz() {

  const [openModal, setOpenModal] = useState(false);
  const handleMQuizClose = ()=> setOpenModal(false);
  // const [openModal, setOpenModal] = useState<string | undefined>();
    // const [email, setEmail] = useState("");
    // const props = { openModal, setOpenModal, email, setEmail };

  return (
    <div >
      <div className='flex w-full'>
        <select className='w-4/5 text-sm rounded-lg' name="" id="">
          <option value="0">--Select Quiz Type--</option>
          <option value="1">Multiple Choice</option>
          <option value="2">Essay</option>
        </select>
        <button onClick={()=> setOpenModal(true)} className='w-1/5 p-2 ml-3 bg-lm-bg rounded'><GrAdd className='mx-auto'/></button>
        
      </div>
        <QuizCard />
        <QuizCard />
        <QuizCard />

      <div>
        <ModalAddQuiz onClose={handleMQuizClose} visible={openModal}/>
      </div>
    </div>
    
  )
}

export default TeacherQuiz