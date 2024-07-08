import React from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

interface AnalyticsProps {}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Analytics: React.FC<AnalyticsProps> = () => {
    const mcqData = [
        { name: 'Correct', value: 8 },
        { name: 'Incorrect', value: 2 },
    ];

    const descriptiveData = [
        { name: 'Correct', value: 4 },
        { name: 'Incorrect', value: 1 },
    ];

    const mcqLineData = [
        { name: 'Question 1', correct: 1, incorrect: 0 },
        { name: 'Question 2', correct: 0, incorrect: 1 },
        { name: 'Question 3', correct: 1, incorrect: 0 },
        { name: 'Question 4', correct: 1, incorrect: 0 },
        { name: 'Question 5', correct: 1, incorrect: 0 },
    ];

    const descriptiveLineData = [
        { name: 'Answer 1', correct: 1, incorrect: 0 },
        { name: 'Answer 2', correct: 0, incorrect: 1 },
        { name: 'Answer 3', correct: 1, incorrect: 0 },
    ];

    return (
        <div className="analytics">
            <h1>Test Performance Analytics</h1>

            <h2>MCQ Test Results (Bar Chart)</h2>
            <BarChart width={500} height={300} data={mcqData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8">
                    {mcqData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
            </BarChart>

            <h2>Descriptive Test Results (Pie Chart)</h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={descriptiveData}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {descriptiveData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>

            <h2>MCQ Test Results (Line Chart)</h2>
            <LineChart width={500} height={300} data={mcqLineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="correct" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="incorrect" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>

            <h2>Descriptive Test Results (Line Chart)</h2>
            <LineChart width={500} height={300} data={descriptiveLineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="correct" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="incorrect" stroke="#82ca9d" activeDot={{ r: 8 }} />
            </LineChart>
        </div>
    );
};

export default Analytics;
