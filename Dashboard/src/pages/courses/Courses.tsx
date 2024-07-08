import { GridColDef } from "@mui/x-data-grid";
import DataTable1 from "../../components/dataTable1/DataTable1";
import "./courses.scss";
import { useState } from "react";
import { courseRows } from "../../data";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "coursename",
    type: "string",
    headerName: "Course Name",
    width: 150,
  },
  {
    field: "starttime",
    type: "string",
    headerName: "start date",
    width: 150,
  },
  {
    field: "endtime",
    type: "string",
    headerName: "End date:",
    width: 150,
  },
  {
    field: "duration",
    headerName: "Duration",
    width: 150,
    type: "string",
  },
];

const Courses = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className="Courses" style={{overflow:"hidden"}}>
      <div className="info">
        <h1>Courses</h1>
        {}
      </div>
      <DataTable1 slug="users" columns={columns} rows={courseRows} />
    </div>
  );
};

export default Courses;
