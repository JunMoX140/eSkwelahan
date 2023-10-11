import React, {useEffect, useState, useRef} from 'react'
import { Outlet, useParams, Link, redirect, useNavigate } from 'react-router-dom';
import useIsAuthenticated from '../hooks/useIsAuthenticated';
import EschoolNavbar from '../components/EschoolNavbar'; 
import { Accordion, Button, Sidebar, Modal, TextInput } from 'flowbite-react';
import { MdQuiz, MdDashboard } from 'react-icons/md';
import axios from 'axios';

function TeacherClass(props) {
useIsAuthenticated();
const navigate = useNavigate();
const { classid } = useParams();
const [quizList, setQuizList] = useState([]);
const [subjectName, setSubjectName] = useState('');
const [openModal, setOpenModal]=useState(false);

const quizNameRef=useRef();

useEffect(()=>{
   try {
      if(classid)
      {
         async function loadClassDetails(){
            const responseDatails = await fetch(`/api/teacher/class/${classid}/details`);
            const responseQuizes = await fetch(`/api/teacher/class/${classid}/quizes`);
            const { subjectName } = await responseDatails.json();
            const quizesDetails = await responseQuizes.json();
            setSubjectName(subjectName);
            setQuizList(quizesDetails);
         }
   
         loadClassDetails();
      }
   } catch {}
},[]);

async function onClickAddQuiz(){
  try {
    const response=await fetch(`/api/teacher/class/quiz`,{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify({
        title: quizNameRef.current.value,
        classid: classid
      }),
    })
    
    const { activityId, subjectId, title }= await response.json();
    setQuizList([...quizList, {activityId, subjectId, title}]);
    setOpenModal(false);
    navigate(`/teacher/class/${subjectId}/quiz/${activityId}`);

  } catch {
    console.log("error")
  }
 }

  return (
    
    <>
    <div className=''>
        <EschoolNavbar />
      </div>
      <div className='flex'>

    <div className='flex h-screen'>
    <Sidebar aria-label="Eschool Sidebar">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href={`/teacher/class/${classid}/dashboard`}>
               <div className='flex font-bold items-center text-color1'>
                  <MdDashboard/><span className='ml-3'>{subjectName}</span>
               </div>
          </Sidebar.Item>
          <div className='w-full'>
               <Accordion>
               <Accordion.Panel>
               <Accordion.Title style={{height:'16px'}}>
                  <div className='flex'>
                     <MdQuiz /><span className="ml-3">Quiz</span>
                  </div>
               </Accordion.Title>
               <Accordion.Content>
                  <Button onClick={()=> setOpenModal(true)} size="xs" className='h-8 w-full'> 
                     ADD QUIZ
                  </Button>
                  
                      {quizList && quizList.map((quiz)=>(
                        <div>
                          <Link key={quiz.activityId} className="text-cyan-600 hover:underline pl-4 dark:text-cyan-500"
                                to={`/teacher/class/${quiz.subjectId}/quiz/${quiz.activityId}`}>{quiz.title}
                            </Link>
                        </div>
                            
                           ))}
               </Accordion.Content>
               </Accordion.Panel>
               </Accordion>
         </div>
          <Sidebar.Item href="#">
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
    <div className='flex-1 p-3'>
        <Outlet />
    </div>
    <div>
    <Modal size="sm" show={openModal == true} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Quiz Name</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <TextInput
              type='text'
              id="txtQuiz"
              placeholder="Quiz Name"
              required
              className='text-xs'
              ref={quizNameRef}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" onClick={onClickAddQuiz}>Create Quiz</Button>
          <Button size="sm" color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    </>
  )
}

export default TeacherClass
