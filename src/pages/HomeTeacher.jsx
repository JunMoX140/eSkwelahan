import React from 'react'
import DefaultNavbar from '../components/DefaultNavbar'
import { useEffect, useRef, useState } from "react";
import { Button, Modal, TextInput, Table, Label } from 'flowbite-react';
import { Form, redirect } from 'react-router-dom';
import useIsAuthenticated from '../hooks/useIsAuthenticated';

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

export function HomeTeacher() {
  useIsAuthenticated();
  const [teacherClass, setTeacherClass] = useState([]);
  const [openModal, setOpenModal]= useState();

  const subjectName= useRef();
  const subjectCode= useRef();
  const description= useRef();
  const schedule= useRef();
  const teachedId= JSON.parse(localStorage.getItem("authenticatedUser")).id; 

  async function onSubmit(){
     const response=await fetch("/api/teacher",{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify({
        teacherId : Number(teachedId),
        subjectName : subjectName.current.value,
        description : description.current.value,
        subjectCode : subjectCode.current.value,
        schedule : schedule.current.value,
      }),
    })
    return redirect("/teacher");
  }

  useEffect(() => {
    async function loadTClass() {
      const data = await loader();
      setTeacherClass(data.teacherClass);
    }
    loadTClass();
  }, []);

  return (
    <>
    <div className='w-full h-16'>
      <DefaultNavbar />  
    </div>
      <div className='top-16 w-2/3 mx-auto'>
        <button className='bg-lm-primary px-4 py-2 mb-4 text-lm-secondary text-sm rounded' onClick={() => setOpenModal('default')}>Create Class</button>
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
            Enrolled
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              View Subject
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {teacherClass.map((tclass) => (
          <Table.Row key={tclass.subject_id} className="bg-lm-bg dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              {tclass.subject_name}
            </Table.Cell>
            <Table.Cell>
              {tclass.description}
            </Table.Cell>
            <Table.Cell>
              {tclass.code}
            </Table.Cell>
            <Table.Cell>
              {tclass.enrolled}
            </Table.Cell>
            <Table.Cell>
            <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/teacher/class"
              >
                View Class
              </a>
            </Table.Cell>
            
          </Table.Row>
        ))}
        </Table.Body>
    </Table>
    </div>
      </div>
      <Modal show={openModal == 'default'} size="sm" onClose={() => setOpenModal(undefined)}>
        <Modal.Header>Add Class</Modal.Header>
        <Modal.Body>
          <Form>
            <div className='mb-2'>
              <Label>Subject Name </Label>
              <TextInput name="subjectName" ref={subjectName} required></TextInput>
            </div>
            <div className='mb-2'>
              <Label>Description </Label>
              <TextInput name="description" ref={description} required></TextInput>
            </div>
            <div className='mb-2'>
              <Label>Code </Label>
              <TextInput name="subjectCode" ref={subjectCode} required></TextInput>
            </div>
            <div className='mb-2'>
              <Label>Schedule </Label>
              <TextInput name="schedule" ref={schedule} placeholder='ex. 5:00-9:00 TTH'/>
            </div>
            <div className='flex py-2'>
              <Button type="submit" onClick={onSubmit} className="mr-2">Create</Button>
              <Button color="gray" onClick={() => setOpenModal(undefined)}>Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

