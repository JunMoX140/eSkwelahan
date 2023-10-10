import React, { useEffect, useRef, useState } from 'react'
import { Button, TextInput, Table, Modal, Label, Card } from 'flowbite-react';
import { Form } from 'react-router-dom';
import EschoolNavbar from '../components/EschoolNavbar';


export const loader = async () => {
  try{
    const {id}= JSON.parse(localStorage.getItem("authenticatedUser"))
    const response = await fetch(`api/student/${id}`);
    const studentClass = await response.json();
    return { studentClass };
  }catch(err){
    return {};
  }
};

function HomeStudent() {

    const [studentClass, setStudenClass] = useState([]);
    const [openModal, setOpenModal]= useState();

    const {id}= JSON.parse(localStorage.getItem("authenticatedUser"));
    const voucherRef=useRef();

    useEffect(()=>{
      async function loadSClass() {
        const data = await loader();
        setStudenClass(data.studentClass);
      }
      loadSClass();
    },[])

    async function onSubmit(){
      try{
        const response=await fetch("/api/student",{
          method: "POST",
          headers: {
            "Content-type" : "application/json",
          },
          body: JSON.stringify({
            studentId : Number(id),
            voucher : Number(voucherRef.current.value)
          }),
        })
        const newdata = await response.json();
        console.log(newdata);
        setStudenClass((studentClass)=> studentClass.concat(newdata));
        setOpenModal(false);
      }
      catch{}
    }


  return (
    <div>
         <div className='w-full h-16'>
            <EschoolNavbar />  
        </div>
        <div className='top-16 w-2/3 mx-auto'>
        <Button size="md" className='mb-2' onClick={() => setOpenModal('default')}>Enroll Class</Button>
        <div>
        {/* <Table striped >
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
            <span className="sr-only">
              View Subject
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {studentClass && studentClass.map((sclass) => (
          <Table.Row key={sclass.subjectId} className="bg-lm-bg p-0 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              {sclass.subjectName}
            </Table.Cell >
            <Table.Cell>
              {sclass.description}
            </Table.Cell>
            <Table.Cell>
              {sclass.code}
            </Table.Cell>
            <Table.Cell>
              {sclass.enrolled}
            </Table.Cell>
            <Table.Cell>
            <a className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href={`teacher/class/${sclass.subject_id}/dashboard`}>
                View Class
              </a>
            </Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>
        </Table> */}
        <div className='grid grid-cols-3 gap-3'>
          {studentClass && studentClass.map((sclass)=>(
             <a
                className="group items-center rounded-lg bg-gray-50 p-3 font-medium text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
                href={`/student/class/${sclass.subjectId}`}
              >
             <div className='ml-3 font-bold'>
               {sclass.code}
             </div>
             <div className='ml-5 mt-2 text-sm'>
              {sclass.subjectName}
             </div>
             <div className='ml-5 mt-2 text-sm'>
              {sclass.description}
             </div>
             <div className='ml-5 mt-2 text-sm'>
              Teacher : {sclass.teacher}
             </div>
           </a>
          ))}
        </div>
        </div>
        
        </div>
        <div>
        <Modal show={openModal == 'default'} size="sm" onClose={() => setOpenModal(undefined)}>
        <Modal.Header>Add Voucher</Modal.Header>
        <Modal.Body>
          <Form>
            <div>
                <Label>Voucher</Label>
                <TextInput ref={voucherRef} />
            </div>
            <div className='flex py-2'>
              <Button type="submit" onClick={onSubmit} className="mr-2">Enroll</Button>
              <Button color="gray" onClick={() => setOpenModal(undefined)}>Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
        </div>
    </div>
  )
}

export default HomeStudent