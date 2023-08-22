import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { MdQuiz, MdLocalActivity, MdStickyNote2} from 'react-icons/md';
import { Accordion, Button } from 'flowbite-react';

function StudentSidebar() {

   const quizes=[{title:'Quiz 1',link:''}, {title:'Quiz 2',link:''}, {title:'Quiz 3',link:''}];
   const activities=[{title:'Activity 1',link:''}, {title:'Activity 2',link:''}, {title:'Activity 3',link:''}];
   const exercises=[{title:'Exercise 1',link:''}, {title:'Exercise 2',link:''}, {title:'Exercise 3',link:''}];
  return (
    <div>
       
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

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
             
            <form>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-lm-primary sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4  text-lm-primary dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                </div>
            </form>

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
                     <Button size="xs" className='h-8 w-full'> Add Quiz </Button>
                  <ul className="list-disc pl-5 my-0 text-gray-500 dark:text-gray-400">
                        {quizes.map(({title, link})=>(
                           <li>
                              <a href={link} key={title}  className="text-cyan-600 hover:underline dark:text-cyan-500" >{title}</a>
                           </li>
                        ))}
                  </ul>
                  </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                  <Accordion.Title style={{height:'16px'}}>
                     <div className='flex'>
                     <MdLocalActivity /> <span className="ml-3">Activities</span>
                     </div>
                  </Accordion.Title>
                  <Accordion.Content>
                  <Button size="xs" className='h-8 w-full'> Add Activity </Button>
                  <ul className="list-disc pl-5 my-0 text-gray-500 dark:text-gray-400">
                        {activities.map(({title, link})=>(
                           <li>
                              <a href={link} key={title}  className="text-cyan-600 hover:underline dark:text-cyan-500" >{title}</a>
                           </li>
                        ))}
                  </ul>
                  </Accordion.Content>
                  </Accordion.Panel>
                  <Accordion.Panel>
                  <Accordion.Title style={{height:'16px'}}>
                  <div className='flex'>
                     <MdStickyNote2 /> <span className="ml-3">Exercises</span>
                     </div>
                  </Accordion.Title>
                  <Accordion.Content>
                  <Button size="xs" className='h-8 w-full'> Add Exercise </Button>
                  <ul className="list-disc pl-5 my-0 text-gray-500 dark:text-gray-400">
                        {exercises.map(({title, link})=>(
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

    </div>
  )
}

export default StudentSidebar