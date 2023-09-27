import React, { useState } from 'react';
import { MdRadioButtonUnchecked, MdCheckCircle } from 'react-icons/md';

function QuizPage() {
  const questions = [
    {
      questionText: 'What does HTML stand for?',
      answerOptions: [
        { answerText: 'Hyper Text Markup Language', isCorrect: true },
        { answerText: 'Hyper Transfer Markup Language', isCorrect: false },
        { answerText: 'Hyperlink and Text Markup Language', isCorrect: false },
        { answerText: 'Highly Text Markup Language', isCorrect: false },
      ],
    },
    {
      questionText: 'Which programming language is used for web development?',
      answerOptions: [
        { answerText: 'Java', isCorrect: false },
        { answerText: 'Python', isCorrect: false },
        { answerText: 'JavaScript', isCorrect: true },
        { answerText: 'C++', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'London', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Berlin', isCorrect: false },
      ],
    },
    {
      questionText: 'What is CSS?',
      answerOptions: [
        { answerText: 'Cascading Style Sheets', isCorrect: true },
        { answerText: 'Computer Style System', isCorrect: false },
        { answerText: 'Creative Style Sheet', isCorrect: false },
        { answerText: 'Colorful Style Sheet', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is not a programming language?',
      answerOptions: [
        { answerText: 'HTML', isCorrect: true },
        { answerText: 'Python', isCorrect: false },
        { answerText: 'Java', isCorrect: false },
        { answerText: 'Ruby', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Germany?',
      answerOptions: [
        { answerText: 'London', isCorrect: false },
        { answerText: 'Madrid', isCorrect: false },
        { answerText: 'Paris', isCorrect: false },
        { answerText: 'Berlin', isCorrect: true },
      ],
    },
    {
      questionText: 'Which programming language is known for its simplicity and readability?',
      answerOptions: [
        { answerText: 'Java', isCorrect: false },
        { answerText: 'Python', isCorrect: true },
        { answerText: 'JavaScript', isCorrect: false },
        { answerText: 'C++', isCorrect: false },
      ],
    },
    {
      questionText: 'What does CSS stand for?',
      answerOptions: [
        { answerText: 'Cascading Style Sheets', isCorrect: true },
        { answerText: 'Computer Style System', isCorrect: false },
        { answerText: 'Creative Style Sheet', isCorrect: false },
        { answerText: 'Colorful Style Sheet', isCorrect: false },
      ],
    },
    {
      questionText: 'Which of the following is a front-end JavaScript library?',
      answerOptions: [
        { answerText: 'React', isCorrect: true },
        { answerText: 'Node.js', isCorrect: false },
        { answerText: 'Python', isCorrect: false },
        { answerText: 'Java', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the largest planet in our solar system?',
      answerOptions: [
        { answerText: 'Earth', isCorrect: false },
        { answerText: 'Mars', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: true },
        { answerText: 'Saturn', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setSelectedOption(isCorrect);
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Quiz is finished
      // You can implement what to do when the quiz is finished
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Programming Quiz</h1>
      {questions.map((question, index) => (
        <div
          key={index}
          className={`mb-5 p-4 border rounded-lg ${
            currentQuestion === index ? 'bg-blue-100' : 'bg-gray-100'
          }`}
        >
          <p className="font-semibold">{index + 1}. {question.questionText}</p>
          <ul className="list-disc list-inside mt-2">
            {question.answerOptions.map((answer, ansIndex) => (
              <li
                key={ansIndex}
                className={`flex items-center ${
                  currentQuestion === index ? 'cursor-pointer hover:text-blue-600' : ''
                }`}
                onClick={() =>
                  currentQuestion === index && handleOptionClick(answer.isCorrect)
                }
              >
                {currentQuestion === index && (
                  <>
                    {selectedOption === answer.isCorrect ? (
                      <MdCheckCircle className="text-green-500 mr-2" />
                    ) : (
                      <MdRadioButtonUnchecked className="text-gray-500 mr-2" />
                    )}
                  </>
                )}
                {answer.answerText}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-5">
        {selectedOption !== null && currentQuestion < questions.length - 1 && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleNextClick}
          >
            Next Question
          </button>
        )}
        {currentQuestion === questions.length - 1 && (
          <p className="font-bold">
            Quiz Completed! Your Score: {score} / {questions.length}
          </p>
        )}
      </div>
    </div>
  );
}

export default QuizPage;
