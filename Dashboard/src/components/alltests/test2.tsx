import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './test2.scss';

interface AnswersState {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
}

const questions = [
  "Describe binary search algorithm",
  "Explain time complexity in algorithms",
  "Discuss the importance of data structures",
  "Describe the steps of Quick Sort algorithm",
  "Explain the use of stacks in programming"
];

const DescriptiveQuestions: React.FC = () => {
  const [answers, setAnswers] = useState<AnswersState>({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAnswers(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = [
      {
        question_id: 1,
        question: questions[0],
        Student_answer: answers.answer1,
        marks: 0,
        student_id: 1 // Replace with dynamic student ID if necessary
      },
      {
        question_id: 2,
        question: questions[1],
        Student_answer: answers.answer2,
        marks: 0,
        student_id: 1
      },
      {
        question_id: 3,
        question: questions[2],
        Student_answer: answers.answer3,
        marks: 0,
        student_id: 1
      },
      {
        question_id: 4,
        question: questions[3],
        Student_answer: answers.answer4,
        marks: 0,
        student_id: 1
      },
      {
        question_id: 5,
        question: questions[4],
        Student_answer: answers.answer5,
        marks: 0,
        student_id: 1
      }
    ];

    try {
      await axios.post('http://localhost:8000/descriptive/', data);
      navigate('/'); // Redirect to the home page after submission
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="quiz-heading">Descriptive Questions</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question-container">
            <label htmlFor={`answer${index + 1}`} className="question-text">{`Question ${index + 1}: ${question}`}</label>
            <textarea
              id={`answer${index + 1}`}
              name={`answer${index + 1}`}
              value={answers[`answer${index + 1}` as keyof AnswersState]}
              onChange={handleChange}
              className="answer-textarea"
              rows={4}
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit Answers</button>
      </form>
    </div>
  );
};

export default DescriptiveQuestions;
