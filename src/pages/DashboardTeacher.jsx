import React from 'react'
import { Card } from 'flowbite-react';
import { Table } from 'flowbite-react';

function DashboardTeacher() {

  return (
    <>
        <div className='grid grid-cols-3'>
                <div className='m-2 '>
                    <Card
                        className="max-w-sm"
                        href="#"
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Assignment
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                            10
                            </p>
                        </p>
                    </Card>
                </div>
                <div className='m-2'>
                    <Card
                        className="max-w-sm"
                        href="#"
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Quiz
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                5
                            </p>
                        </p>
                    </Card>
                </div>
                <div className='m-2'>
                    <Card
                        className="max-w-sm"
                        href="#"
                        >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>
                                Activities
                            </p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>
                                8
                            </p>
                        </p>
                    </Card>
                </div>
        </div>
        <div>
                <Table striped >
                <Table.Head>
                    
                    <Table.HeadCell>
                    Student
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Action
                    </Table.HeadCell>
                    
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-lm-bg dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                        Cris
                    </Table.Cell>
                    <Table.Cell>
                        <a
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        href="/teacher/class"
                        >
                        <p>
                        View Subject
                        </p>
                        </a>
                    </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-lm-bg dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                        <p>
                        Web Development
                        </p>
                    </Table.Cell>
                    <Table.Cell>
                        <a
                        className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        href="/teacher/class"
                        >
                        <p>
                        View Subject
                        </p>
                        </a>
                    </Table.Cell>
                    </Table.Row>
                    
                </Table.Body>
            </Table>
        </div>
        
    </>
  )
}

export default DashboardTeacher