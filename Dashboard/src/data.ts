import { duration, iconButtonClasses } from "@mui/material";
import { idID } from "@mui/material/locale";
import { toUnitless } from "@mui/material/styles/cssUtils";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 1,
        title: "Tests",
        url: "/tests",
        icon: "order.svg",
      },
      {
        id: 1,
        title: "Analytics",
        url: "/analytics",
        icon: "chart.svg",
      },
      {
        id: 1,
        title: "Courses",
        url: "/courses",
        icon: "note.svg",
      },
      {
        id: 1,
        title: "Settings",
        url: "/settings",
        icon: "setting.svg",
      }

    ],
  },

];

export const topDealUsers = [
  {
    id: 1,
    coursename: "MERN stack"
  },
  {
    id: 2,
    coursename: "MEAN stack"
  },
  {
    id: 3,
    coursename: "Machine Learning"
  },
  {
    id: 4,
    coursename: "Data Structures"
  },
  {
    id: 5,
    coursename: "Data Science"
  }
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Tests Attempted",
  number: "15",
  dataKey: "Tests",
  chartData: [
    { name: "Sun", Tests: 1 },
    { name: "Mon", Tests: 3},
    { name: "Tue", Tests: 1 },
    { name: "Wed", Tests: 4 },
    { name: "Thu", Tests: 1 },
    { name: "Fri", Tests: 2 },
    { name: "Sat", Tests: 3 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Tests Passed",
  number: "10",
  dataKey: "Tests",
  chartData: [
    { name: "Sun", Tests: 1 },
    { name: "Mon", Tests: 3},
    { name: "Tue", Tests: 1 },
    { name: "Wed", Tests: 4 },
    { name: "Thu", Tests: 1 },
    { name: "Fri", Tests: 2 },
    { name: "Sat", Tests: 3 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Time Spent",
  number: "10h 30m",
  dataKey: "time",
  chartData: [
    { name: "Sun", time: 1 },
    { name: "Mon", time: 3},
    { name: "Tue", time: 1 },
    { name: "Wed", time: 4 },
    { name: "Thu", time: 1 },
    { name: "Fri", time: 2 },
    { name: "Sat", time: 3 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Tests Failed",
  number: "5",
  dataKey: "tests",
  chartData: [
    { name: "Sun", tests: 1 },
    { name: "Mon", tests: 3},
    { name: "Tue", tests: 1 },
    { name: "Wed", tests: 4 },
    { name: "Thu", tests: 1 },
    { name: "Fri", tests: 2 },
    { name: "Sat", tests: 3 },
  ],
};

export const barChartBoxRevenue = {
  title: "Correct Answers",
  color: "#8884d8",
  dataKey: "correct",
  chartData: [
    {
      name: "Sun",
      correct: 4000,
    },
    {
      name: "Mon",
      correct: 3000,
    },
    {
      name: "Tue",
      correct: 2000,
    },
    {
      name: "Wed",
      correct: 2780,
    },
    {
      name: "Thu",
      correct: 1890,
    },
    {
      name: "Fri",
      correct: 2390,
    },
    {
      name: "Sat",
      correct: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Wrong Answers",
  color: "#FF8042",
  dataKey: "wrong",
  chartData: [
    {
      name: "Sun",
      wrong: 2400,
    },
    {
      name: "Mon",
      wrong: 1398,
    },
    {
      name: "Tue",
      wrong: 3800,
    },
    {
      name: "Wed",
      wrong: 3908,
    },
    {
      name: "Thu",
      wrong: 4800,
    },
    {
      name: "Fri",
      wrong: 3800,
    },
    {
      name: "Sat",
      wrong: 4300,
    },
     
  ],
};

export const testRows = [
  {
    id: 1,
    tests: "Test 1",
    starttime: " 3.00 PM",
    endtime: " 5.00 PM",
    submittedon: " 01-09-2024 5.00",
    status: true,
    type: 1
  },

  {
    id: 2,
    tests: "Test 2",
    starttime: " 3.00 PM",
    endtime: " 5.00 PM",
    submittedon: " 01-09-2024 5.00",
    status: true,
    type: 2
  },

  {
    id: 3,
    tests: "Test 3",
    starttime: " 3.00 PM",
    endtime: " 5.00 PM",
    submittedon: " 01-09-2024 5.00",
    status: false,
    type: 1
  },

  {
    id: 4,
    tests: "Test 4",
    starttime: " 3.00 PM",
    endtime: " 5.00 PM",
    submittedon: " 01-09-2024 5.00",
    status: true,
    type: 2
  },

  {
    id: 5,
    tests: "Test 5",
    starttime: " 3.00 PM",
    endtime: " 5.00 PM",
    submittedon: " 01-09-2024 5.00",
    status: false,
    type: 1
  },
];

export const courseRows = [
  {
    id: 1,
    coursename: "MERN stack",
    starttime: " 01-09-2024",
    endtime: " 01-11-2024",
    duration: " 2 months",
  },
  
    {
      id: 2,
      coursename: "MEAN stack",
      starttime: " 01-09-2024",
      endtime: " 01-11-2024",
      duration: " 2 months",
    },
  
    {
      id: 3,
      coursename: "Machine Learning",
      starttime: " 01-09-2024",
      endtime: " 01-11-2024",
      duration: " 2 months",
    },
  
    {
      id: 4,
      coursename: "Data Structures",
      starttime: " 01-09-2024",
      endtime: " 01-11-2024",
      duration: " 2 months",
    },
  
    {
      id: 5,
      coursename: "Data Science",
      starttime: " 01-09-2024",
      endtime: " 01-11-2024",
      duration: " 2 months",
    },
];

export const singleUser = {
  id: 1,
  title: "Test",
  info: {
    // username: "Johndoe99",
    // fullname: "John Doe",
    // email: "johndoe@gmail.com",
    // phone: "123 456 789",
    // status: "verified",
  },
  charts: {
    dataKeys: [
      { name: "correct", color: "#82ca9d" },
      { name: "wrong", color: "#ff4d4d" },
    ],
    data: [[{
      name: "Sun",
      correct: 4000,
      wrong: 2400,
    },
    {
      name: "Mon",
      correct: 3000,
      wrong: 1398,
    },
    {
      name: "Tue",
      correct: 2000,
      wrong: 3800,
    },
    {
      name: "Wed",
      correct: 2780,
      wrong: 3908,
    },
    {
      name: "Thu",
      correct: 1890,
      wrong: 4800,
    },
    {
      name: "Fri",
      correct: 2390,
      wrong: 3800,
    },
    {
      name: "Sat",
      correct: 3490,
      wrong: 4300,
    }],
    [{
      name: "Sun",
      correct: 4000,
      wrong: 2400,
    },
    {
      name: "Mon",
      correct: 3000,
      wrong: 1398,
    },
    {
      name: "Tue",
      correct: 2000,
      wrong: 3800,
    },
    {
      name: "Wed",
      correct: 2780,
      wrong: 3908,
    },
    {
      name: "Thu",
      correct: 1890,
      wrong: 4800,
    },
    {
      name: "Fri",
      correct: 2390,
      wrong: 3800,
    },
    {
      name: "Sat",
      correct: 3490,
      wrong: 4300,
    }],
    [{
      name: "Sun",
      correct: 4000,
      wrong: 2400,
    },
    {
      name: "Mon",
      correct: 3000,
      wrong: 1398,
    },
    {
      name: "Tue",
      correct: 2000,
      wrong: 3800,
    },
    {
      name: "Wed",
      correct: 2780,
      wrong: 3908,
    },
    {
      name: "Thu",
      correct: 1890,
      wrong: 4800,
    },
    {
      name: "Fri",
      correct: 2390,
      wrong: 3800,
    },
    {
      name: "Sat",
      correct: 3490,
      wrong: 4300,
    }],
    [{
      name: "Sun",
      correct: 4000,
      wrong: 2400,
    },
    {
      name: "Mon",
      correct: 3000,
      wrong: 1398,
    },
    {
      name: "Tue",
      correct: 2000,
      wrong: 3800,
    },
    {
      name: "Wed",
      correct: 2780,
      wrong: 3908,
    },
    {
      name: "Thu",
      correct: 1890,
      wrong: 4800,
    },
    {
      name: "Fri",
      correct: 2390,
      wrong: 3800,
    },
    {
      name: "Sat",
      correct: 3490,
      wrong: 4300,
    }],
    [{
      name: "Sun",
      correct: 4000,
      wrong: 2400,
    },
    {
      name: "Mon",
      correct: 3000,
      wrong: 1398,
    },
    {
      name: "Tue",
      correct: 2000,
      wrong: 3800,
    },
    {
      name: "Wed",
      correct: 2780,
      wrong: 3908,
    },
    {
      name: "Thu",
      correct: 1890,
      wrong: 4800,
    },
    {
      name: "Fri",
      correct: 2390,
      wrong: 3800,
    },
    {
      name: "Sat",
      correct: 3490,
      wrong: 4300,
    }]]
  }

};
