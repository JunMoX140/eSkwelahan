import React from 'react'
import { useState } from 'react';
import QuizCard from '../components/QuizCard'
import { GrAdd } from 'react-icons/gr'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

function TeacherQuiz() {
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
        <button className='w-1/5 p-2 ml-3 bg-lm-bg rounded'><GrAdd className='mx-auto'/></button>
      </div>
        
        <QuizCard />
        <QuizCard />
        <QuizCard />

        {/* <Modal show={props.openModal === 'form-elements'} size="md" popup onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="/modal" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="/modal" className="text-cyan-700 hover:underline dark:text-cyan-500">
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </div>
  )
}

export default TeacherQuiz