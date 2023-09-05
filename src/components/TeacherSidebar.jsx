import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { MdQuiz, MdLocalActivity, MdStickyNote2} from 'react-icons/md';
import { Accordion, Button } from 'flowbite-react';
import ModalAddQuiz from './ModalAddQuiz';
import { useState } from 'react';

function StudentSidebar() {

   const quizes=[{title:'Quiz 1',link:''}, {title:'Quiz 2',link:''}, {title:'Quiz 3',link:''}];
   const activities=[{title:'Activity 1',link:''}, {title:'Activity 2',link:''}, {title:'Activity 3',link:''}];
   const exercises=[{title:'Exercise 1',link:''}, {title:'Exercise 2',link:''}, {title:'Exercise 3',link:''}];
   
   const [openModal, setOpenModal] = useState(false);
  return (
    <div>
         
         <aside id="default-sidebar" className=" top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
               <ul className="space-y-2 font-medium">
                  <li>
                     <a href="#" className="flex items-center p-2 text-lm-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span className="ml-3">Programming 101</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-lm-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                        <div className='w-full'>
                           <Accordion collapseAll>
                           <Accordion.Panel className='bg-gray-400'>
                           <Accordion.Title style={{height:'16px'}}>
                              <div className='flex'>
                                 <MdQuiz /><span className="ml-3">Quiz</span>
                              </div>
                           </Accordion.Title>
                           <Accordion.Content>
                              <Button size="xs" className='h-8 w-full' onClick={() => setOpenModal(true)}> Add Quiz </Button>
                                 <ul className="list-disc pl-5 my-0 text-gray-500 dark:text-gray-400">
                                       {quizes.map(({title, link})=>(
                                          <li>
                                             <a href={link} key={title}  className="text-cyan-600 hover:underline dark:text-cyan-500" >{title}</a>
                                          </li>
                                       ))}
                                 </ul>
                           </Accordion.Content>
                           </Accordion.Panel>
                        </Accordion>
                        </div>
                     </a>
                  </li>
               </ul>
            </div>
         </aside>
         <div>
            <ModalAddQuiz openModal={openModal} setOpenModal={setOpenModal}/>
         </div>
    </div>
  )
}

export default StudentSidebar