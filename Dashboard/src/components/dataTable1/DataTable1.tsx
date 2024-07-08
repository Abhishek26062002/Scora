import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable1.scss";
import { Link } from "react-router-dom";


type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable1 = (props: Props) => {

  return (
    <div className="dataTable1">
      <DataGrid
        style={{ overflow: "scroll" , width: "85%"}}
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns]}
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

export default DataTable1;
