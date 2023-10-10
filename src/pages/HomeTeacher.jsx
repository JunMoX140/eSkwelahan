import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Button, Modal, TextInput, Table, Label } from 'flowbite-react';
import { Form, redirect, useNavigate } from 'react-router-dom';
import useIsAuthenticated from '../hooks/useIsAuthenticated';
import EschoolNavbar from '../components/EschoolNavbar';

export const loader = async () => {
  try{
    const {id}= JSON.parse(localStorage.getItem("authenticatedUser"))
    const response = await fetch(`api/teacher/${id}`);
    const teacherClass = await response.json();
    return { teacherClass };
  }catch(err){
    return {};
  }
};

// export const action = async ({ request })=> {
//   const formData = await request.formData();
//   console.log(formData);

//   await fetch("/api/teacher",{
//     method: "POST",
//     headers: {
//       "Content-type" : "application/json",
//     },

//     body: JSON.stringify({
//       teacher : formData.get("teacher"),
//       subjectName : formData.get("subjectName"),
//       description : formData.get("description"),
//       subjectCode : formData.get("subjectCode"),
//       schedule : formData.get("schedule"),
//     }),
//   })
// }
 function HomeTeacher() {
  useIsAuthenticated();
  const navigate=useNavigate();
  const [teacherClass, setTeacherClass] = useState([]);
  const [openModal, setOpenModal]= useState();

  const subjectNameRef= useRef();
  const codeRef= useRef();
  const descriptionRef= useRef();
  const scheduleRef= useRef();
  const teachedId= JSON.parse(localStorage.getItem("authenticatedUser")).id; 

  useEffect(() => {
    async function loadTClass() {
      const data = await loader();
      setTeacherClass(data.teacherClass);
    }
    loadTClass();
  }, []);

  async function onSubmit(){
    try{
      const response=await fetch("/api/teacher",{
        method: "POST",
        headers: {
          "Content-type" : "application/json",
        },
        body: JSON.stringify({
          teacherId : Number(teachedId),
          subjectName : subjectNameRef.current.value,
          description : descriptionRef.current.value,
          code : codeRef.current.value,
          schedule : scheduleRef.current.value,
        }),
      })
      const newdata = await response.json();
      setTeacherClass((teacherClass)=> teacherClass.concat(newdata));
      setOpenModal(false);
    }
    catch{}
  }

  function resetFields(){
    subjectNameRef.current.value="";
    descriptionRef.current.value="";
    codeRef.current.value="";
    scheduleRef.current.value="";
    setOpenModal(false);
  }
  
  return (
    <>
    <div className='w-full h-16'>
      <EschoolNavbar />  
    </div>
      <div className='top-16 w-2/3 mx-auto'>
          <Button size="md" className='mb-2' onClick={() => setOpenModal('default')}>Create Class</Button>
        <div>
        <Table striped >
        <Table.Head>
          <Table.HeadCell>
            Subject Name
          </Table.HeadCell>
          <Table.HeadCell>
            Description
          </Table.HeadCell>
          <Table.HeadCell>
            Code
          </Table.HeadCell>
          <Table.HeadCell>
            Schedule
          </Table.HeadCell>
          <Table.HeadCell>
            Voucher
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              View Subject
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {teacherClass && teacherClass.map((tclass) => (
          <Table.Row key={tclass.subjectId} className="bg-lm-bg p-0 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              {tclass.subjectName}
            </Table.Cell >
            <Table.Cell>
              {tclass.description}
            </Table.Cell>
            <Table.Cell>
              {tclass.code}
            </Table.Cell>
            <Table.Cell>
              {tclass.schedule}
            </Table.Cell>
            <Table.Cell>
              <span id="voucher">{tclass.voucher}</span>
            </Table.Cell>
            <Table.Cell>
            <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href={`teacher/class/${tclass.subjectId}/dashboard`}>
                View Class
              </a>
            </Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>
    </Table>
    </div>
      </div>
      <Modal show={openModal == 'default'} size="sm" onClose={resetFields}>
        <Modal.Header>Add Class</Modal.Header>
        <Modal.Body>
          <Form id='modalSubject'>
            <div className='mb-2'>
              <Label>Subject Name </Label>
              <TextInput type='text' name="subjectName" ref={subjectNameRef} required/>
            </div>
            <div className='mb-2'>
              <Label>Description </Label>
              <TextInput type='text' name="description" ref={descriptionRef} required/>
            </div>
            <div className='mb-2'>
              <Label>Code </Label>
              <TextInput type='text' name="subjectCode" ref={codeRef} required/>
            </div>
            <div className='mb-2'>
              <Label>Schedule </Label>
              <TextInput type='text' name="schedule" ref={scheduleRef} placeholder='ex. 5:00-9:00 TTH'/>
            </div>
            <div className='flex py-2'>
              <Button onClick={onSubmit} className="mr-2">Create</Button>
              <Button color="gray" onClick={() => setOpenModal(undefined)}>Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default HomeTeacher

