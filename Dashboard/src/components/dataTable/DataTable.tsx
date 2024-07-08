import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";


type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {


  const actionColumn: GridColDef = {
    field: "evaluate",
    headerName: "Evaluate",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/evaluate/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
        </div>
      );
    },
  };

  const typecolumn: GridColDef = {
    field: "type",
    headerName: "Test",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/attempt/${params.row.type}`}>
            <img src="/view.svg" alt="" />
          </Link>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        style={{ overflow: "scroll" , width: "85%"}}
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, typecolumn,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
