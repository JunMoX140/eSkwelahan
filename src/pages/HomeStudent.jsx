import React, { useState } from 'react'
import { Button, TextInput, Table, Modal, Label } from 'flowbite-react';
import { Form } from 'react-router-dom';
import EschoolNavbar from '../components/EschoolNavbar';

function HomeStudent() {

    const [studentClass, setStudenClass] = useState([]);
    const [openModal, setOpenModal]= useState();
  return (
    <div>
         <div className='w-full h-16'>
            <EschoolNavbar />  
        </div>
        <div className='top-16 w-2/3 mx-auto'>
        <Button size="md" className='mb-2' onClick={() => setOpenModal('default')}>Enroll Class</Button>
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
            <span className="sr-only">
              View Subject
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
        {studentClass && studentClass.map((sclass) => (
          <Table.Row key={sclass.subject_id} className="bg-lm-bg p-0 dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>
              {sclass.subject_name}
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
        </Table>
        </div>
        
        </div>
        <div>
        <Modal show={openModal == 'default'} size="sm" onClose={() => setOpenModal(undefined)}>
        <Modal.Header>Add Voucher</Modal.Header>
        <Modal.Body>
          <Form>
            <div>
                <Label>Voucher</Label>
                <TextInput  />
            </div>
            <div className='flex py-2'>
              <Button type="submit" className="mr-2">Enroll</Button>
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