import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    Correct: 4000,
    Wrong: 2400,
  },
  {
    name: "Mon",
    Correct: 3000,
    Wrong: 1398,
  },
  {
    name: "Tue",
    Correct: 2000,
    Wrong: 9800,
  },
  {
    name: "Wed",
    Correct: 2780,
    Wrong: 3908,
  },
  {
    name: "Thu",
    Correct: 1890,
    Wrong: 4800,
  },
  {
    name: "Fri",
    Correct: 2390,
    Wrong: 3800,
  },
  {
    name: "Sat",
    Correct: 3490,
    Wrong: 4300,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Test Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Correct"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Wrong"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
