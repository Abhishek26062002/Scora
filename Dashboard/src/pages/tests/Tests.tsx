import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./tests.scss";
import { useState } from "react";
import { testRows } from "../../data";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "tests",
    type: "string",
    headerName: "Name",
    width: 150,
  },
  {
    field: "starttime",
    type: "string",
    headerName: "Start time",
    width: 150,
  },
  {
    field: "endtime",
    type: "string",
    headerName: "End time",
    width: 150,
  },
  {
    field: "submittedon",
    headerName: "Submitted On",
    width: 150,
    type: "string",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="users" style={{overflow:"hidden"}}>
      <div className="info">
        <h1>Tests</h1>
        {}
      </div>
      <DataTable slug="tests" columns={columns} rows={testRows} />
    </div>
  );
};

export default Users;
