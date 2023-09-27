import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StudentSidebar() {
  const students = [
    { name: 'Cris Vincent Ferrer', quizTitle: 'Quiz 1' },
    { name: 'Mark Omega', quizTitle: 'Quiz 1' },
    { name: 'Joevy Blanco', quizTitle: 'Quiz 1' },
  ];

  const [expandedStudent, setExpandedStudent] = useState(null);

  const toggleStudent = (studentName) => {
    if (expandedStudent === studentName) {
      setExpandedStudent(null);
    } else {
      setExpandedStudent(studentName);
    }
  };

  return (
    <aside
      id="default-sidebar"
      className="top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {students.map((student, index) => (
            <li key={index}>
              <div
                className="flex items-center p-2 text-lm-primary rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"
                onClick={() => toggleStudent(student.name)}
              >
                <span className="ml-3 text-gray-500">{student.name}</span>
              </div>
              {expandedStudent === student.name && (
                <ul>
                  <li>
                    <Link
                      to={`/student/dashboard/${student.name}/${student.quizTitle}`}
                      className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="ml-3 text-cyan-600">{student.quizTitle}</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function QuizDashboard({ studentName, quizTitle }) {
  // ...
}

function StudentDashboard() {
  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-grow p-5">
        <p></p>
      </div>
    </div>
  );
}

export default StudentDashboard;
