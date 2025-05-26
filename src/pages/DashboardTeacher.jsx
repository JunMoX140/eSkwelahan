import React, {useEffect, useState} from 'react'
import { Card } from 'flowbite-react';
import { Table } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import useIsAuthenticated from '../hooks/useIsAuthenticated';


function DashboardTeacher() {
    // useIsAuthenticated();
 const [studentsEnrolled, setStudentsEnrolled] = useState([]);
 const { classid } = useParams();

 useEffect(()=>{
    async function loadClassDetails(){
        const responseDatails = await fetch(`/api/teacher/class/${classid}/students`);
        // const studentDetails = await responseDatails.json();
        setStudentsEnrolled(responseDatails.json());
        console.log(studentsEnrolled);
        
     }
     loadClassDetails();

     
 },[]);

  return (
    <>
        <div>
            {/* <Table striped >
                <Table.Head>
                    
                    <Table.HeadCell>
                    Student
                    </Table.HeadCell>
                    <Table.HeadCell>
                    Action
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {studentsEnrolled.length === 0 ? (
                            "Loading"
                        ) : ("test"
                    
                            // students.map((student)=>(
                            //     <Table.Row key={student.studentId} className="bg-lm-bg dark:border-gray-700 dark:bg-gray-800">
                            //     <Table.Cell>
                            //         {student.student}
                            //     </Table.Cell>
                            //     <Table.Cell>
                            //         <a
                            //         className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            //         href={`/teacher/class/student/${student.studentId}`}
                            //         >
                            //         <p>
                            //         View Subject
                            //         </p>
                            //         </a>
                            //     </Table.Cell>
                            //     </Table.Row>
                            // ))
                        )
                    }
                </Table.Body>
            </Table> */}
        </div>
        
    </>
  )
}

export default DashboardTeacher