import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './test1.scss';

const questions = [
  {
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    answerIndex: 1,
  },
  {
    question: 'Which data structure allows you to search in O(1) time complexity on average?',
    options: ['Array', 'Linked List', 'Hash Table', 'Binary Tree'],
    answerIndex: 2,
  },
  {
    question: 'Which sorting algorithm has the worst-case time complexity of O(n^2)?',
    options: ['Merge Sort', 'Quick Sort', 'Bubble Sort', 'Insertion Sort'],
    answerIndex: 2,
  },
  {
    question: 'What is the worst-case time complexity of Quick Sort?',
    options: ['O(n log n)', 'O(n)', 'O(n^2)', 'O(log n)'],
    answerIndex: 2,
  },
  {
    question: 'Which data structure uses LIFO (Last In, First Out) order?',
    options: ['Queue', 'Stack', 'Heap', 'Binary Search Tree'],
    answerIndex: 1,
  },
  {
    question: 'What is the primary purpose of Breadth-First Search (BFS) algorithm?',
    options: ['Finding shortest path in a weighted graph', 'Traversing a binary tree', 'Sorting elements in an array', 'Finding connected components in a graph'],
    answerIndex: 0,
  },
  {
    question: 'Which of the following is not a type of tree traversal?',
    options: ['Inorder', 'Postorder', 'Depth-First', 'Preorder'],
    answerIndex: 2,
  },
  {
    question: 'Which algorithm is used for finding Minimum Spanning Tree (MST) in a graph?',
    options: ['Dijkstra\'s Algorithm', 'Bellman-Ford Algorithm', 'Prim\'s Algorithm', 'Kruskal\'s Algorithm'],
    answerIndex: 2,
  },
  {
    question: 'Which of the following is an example of a Greedy algorithm?',
    options: ['Merge Sort', 'Knapsack Problem', 'Breadth-First Search (BFS)', 'Depth-First Search (DFS)'],
    answerIndex: 1,
  },
  {
    question: 'What is the time complexity of Heap Sort?',
    options: ['O(n log n)', 'O(n)', 'O(n^2)', 'O(log n)'],
    answerIndex: 0,
  },
];

const Mcq = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
    console.log('Selected answers:', updatedAnswers);
  };

  const handleSubmit = async () => {
    const Q_id = questions.map((_, index) => index);
    const Student_answer = selectedAnswers.map((answer, index) => answer !== null ? questions[index].options[answer] : 'Not answered');
    const correct_answer = questions.map((q) => q.options[q.answerIndex]);
    const student_id = 0;

    const payload = { Q_id, Student_answer, correct_answer, student_id };

    console.log('Payload:', payload);

    try {
      const response = await axios.post('http://localhost:8000/mcq/', payload);
      console.log('Response data:', response.data);
      navigate('/');
    } catch (error: any) {
      console.error('Error submitting MCQ answers:', error);
      if (error.response && error.response.data) {
        console.error('Error details:', error.response.data.detail);
      }
    }
  };

  return (
    <div className="app-container">
      <h1 className="quiz-heading">Data Structures and Algorithms Quiz</h1>
      {questions.map((q, index) => (
        <div key={`question-${index}`} className="question-container">
          <h3 className="question-text">{`${index + 1}. ${q.question}`}</h3>
          {q.options.map((option, optionIndex) => (
            <div key={`option-${index}-${optionIndex}`} className="option-container">
              <input
                type="radio"
                id={`q${index}-option${optionIndex}`}
                name={`q${index}`}
                value={option}
                checked={selectedAnswers[index] === optionIndex}
                onChange={() => handleAnswerSelect(index, optionIndex)}
                className="radio-button"
              />
              <label htmlFor={`q${index}-option${optionIndex}`} className="option-label">
                {option}
              </label>
            </div>
          ))}
        </div>
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit Answers
      </button>
    </div>
  );
};

export default Mcq;
