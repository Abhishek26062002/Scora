import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './test2.scss';

interface Answer {
  question_id: number;
  question: string;
  Student_answer: string;
  marks: number;
  student_id: number;
}

const questions = [
  "Describe binary search algorithm",
  "Explain time complexity in algorithms",
  "Discuss the importance of data structures",
  "Describe the steps of Quick Sort algorithm",
  "Explain the use of stacks in programming"
];

const DescriptiveQuestions: React.FC = () => {
  const [answers, setAnswers] = useState<Answer[]>(questions.map((question, index) => ({
    question_id: index + 1,
    question: question,
    Student_answer: '',
    marks: 0,
    student_id: 1
  })));
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>, question_id: number) => {
    const { value } = e.target;
    setAnswers(prevAnswers => prevAnswers.map(answer =>
      answer.question_id === question_id ? { ...answer, Student_answer: value } : answer
    ));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/descriptive/', answers);
      navigate('/'); // Redirect to the home page after submission
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="quiz-heading">Descriptive Questions</h1>
      <form onSubmit={handleSubmit}>
        {answers.map((answer) => (
          <div key={answer.question_id} className="question-container">
            <label htmlFor={`answer${answer.question_id}`} className="question-text">{`Question ${answer.question_id}: ${answer.question}`}</label>
            <textarea
              id={`answer${answer.question_id}`}
              name={`answer${answer.question_id}`}
              value={answer.Student_answer}
              onChange={(e) => handleChange(e, answer.question_id)}
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
