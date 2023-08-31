// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Accordion } from 'flowbite-react'
// eslint-disable-next-line react-refresh/only-export-components
export default FAQ


function FAQ() {
  return (
    <div>
      <Accordion>
      <Accordion.Panel>
        <Accordion.Title className=' bg-lm-secondary'>
          What is eSkwelahan?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            Project eSkewelahan is the brainchild project of Team ESCool of the DICT x Stacktrek Bootcamp This is a web based classroom/school management system app.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=' bg-lm-secondary'>
        How does the system handle student enrollment and registration?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            Our school system simplifies the student enrollment and registration process to ensure a seamless experience for both school administrators and parents/guardians. 
            </p>
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            <p>
              Check out the
            </p>
            <a
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="#"
            >
              <p>
                Enrollment System
              </p>
            </a>
            <p>
            1. Online Registration Form: Students can access the school's website and find a dedicated online registration form.
            The form is designed to capture essential student details such as name, date of birth, parent/guardian information, contact number, address, and more.
            </p>
            
            <p>
            2. Grade Selection: The registration form includes a drop-down menu where students can select the appropriate grade or class.
            This helps streamline the enrollment process and ensures accurate placement.
            </p>

            <p>
            3. Document Upload: To complete the registration, students are prompted to upload necessary documents, such as the student's birth certificate,
            previous school records (if applicable), medical history, and any other documents required by the school.
            </p>

            <p>
            4.Data Validation: The system incorporates data validation to ensure that all mandatory fields are filled out correctly.
            It checks for errors, missing information, or incorrect formats, and prompts the user to correct any issues before submission.
            </p>

            <p>
            5. Real-Time Notifications: Upon successful registration, the system sends an instant confirmation email, acknowledging the receipt of their submission.
            </p>

            <p>
            6. Secure Data Storage: All student data, including personal information and documents, are securely stored within the system's database,
            adhering to data privacy and security standards.
            </p>
            
            <p>
            7. Accessibility and Convenience: eSkwelahan's user-friendly interface and mobile accessibility allow students to complete the enrollment and registration process
            from the comfort of their homes, reducing the need for physical visits to the school.
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=' bg-lm-secondary'>
        What are the key features of eSkwelahan?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
            eSkwelahan offers a comprehensive set of features to streamline administrative tasks, enhance communication, and improve overall efficiency within the educational institution.
            </p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              1. Student Information Management:
              <li>
              Centralized student database to store and manage student records, including personal details, contact information, and academic history.
              </li>
              <li>
              Easy enrollment and registration process, allowing parents to submit student information online.
              </li>
            </p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              2. Teacher and Student Management:
              <li>
              Profiles for teachers and students with relevant information, such as contact details, qualifications, and assigned classes.
              </li>
              <li>
              Automated attendance tracking for teachers and students
              </li>
            </p>
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              3. Academic Management:
              <li>
              Class and timetable management, enabling easy scheduling of classes and subjects.
              </li>
              <li>
              Grading system with the ability to record and calculate student grades.
              </li>
            </p>            
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
              4. Communication and Collaboration:
              <li>
              Messaging platform to facilitate communication between teachers, and students.
              </li>
              <li>
              Announcements and notifications for important updates, events, and school news.
              </li>
            </p>            
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          <p>
              5. Exam and Assessment Management:
              <li>
              Creation and management of exams and assessments with customizable grading criteria.
              </li>
              <li>
              Secure online exam administration with monitoring measures.
              </li>
            </p>            
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
  )
}
