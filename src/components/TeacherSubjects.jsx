import React from 'react'
import { Table } from 'flowbite-react';

function TeacherSubjects() {
  return (
    <div>
        <Table striped >
      <Table.Head>
        <Table.HeadCell>
          Subjects
        </Table.HeadCell>
        <Table.HeadCell>
          Schedule
        </Table.HeadCell>
        <Table.HeadCell>
          Enrolled
        </Table.HeadCell>
        <Table.HeadCell>
          Status
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            View Subject
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-lm-bg dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>
            Basic Programming
          </Table.Cell>
          <Table.Cell>
            T-TH 1-3:00 PM
          </Table.Cell>
          <Table.Cell>
            24
          </Table.Cell>
          <Table.Cell>
            Final Exam
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
            MWF 5-9 PM
          </Table.Cell>
          <Table.Cell>
            32
          </Table.Cell>
          <Table.Cell>
            Presentation
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
  )
}

export default TeacherSubjects