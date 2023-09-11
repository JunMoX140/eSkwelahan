import React from 'react'
import { Table } from 'flowbite-react';
import { useEffect, useRef, useState } from "react";


export const loader = async () => {
  const response = await fetch("http://localhost:8081/api/todos");
  const todos = await response.json();
  return { todos };
};

export const teacherSubs = async()=>{
  const response = await fetch("http://localhost:8081/api/teacher/1");
  const teacherSubjects = await response.json();
  return { teacherSubjects };
};

export default function TeacherSubjects() {

  const [todos, setTodos] = useState([]);
  const [teacherSubject, setTeacherSubjects] = useState([]);

  useEffect(() => {
    async function init() {
      const data = await loader();
      setTodos(data.todos);
    }
    async function loadTSubs() {
      const data = await teacherSubs();
      setTeacherSubjects(data.teacherSubjects);
    }
    loadTSubs();
    init();
  }, []);

  const taskRef = useRef();

  async function onAddTodoClick() {
    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: taskRef.current?.value,
        isCompleted: false,
      }),
    });
    const data = await response.json();
    setTodos((todos) => todos.concat(data));
    if (taskRef.current == null) return;
    taskRef.current.value = "";
  }

  const onDeleteTodoClick = (todoId) => async () => {
    await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
    });
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  };

  const onIsCompletedChange = (todoId) => async (event) => {
    const isCompleted = event.target.checked;
    const foundTodo = todos.find((todo) => todo.id === todoId);
    await fetch(`/api/todos/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: foundTodo.task,
        isCompleted,
      }),
    });
  };



  return (
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
      {teacherSubject.map((subject) => (
        <Table.Row className="bg-lm-bg dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>
            {subject.subject_name}
          </Table.Cell>
          <Table.Cell>
            {subject.description}
          </Table.Cell>
          <Table.Cell>
            {subject.code}
          </Table.Cell>
          <Table.Cell>
            {subject.enrolled}
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
      ))}

        {/* <Table.Row className="bg-lm-bg dark:border-gray-700 dark:bg-gray-800">
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
        </Table.Row> */}
        
      </Table.Body>
    </Table>
    </div>
    
  )
}

