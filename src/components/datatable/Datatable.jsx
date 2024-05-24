import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <Stack direction="row" spacing={2}>
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <Button className="viewButton" variant="outlined" color="primary">
                Pokaż
              </Button>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button className="deleteButton" variant="outlined" color="error">
                Usuń
              </Button>
            </Link>
          </Stack>

          // <div className="cellAction">
          //   <div className="viewButton">View</div>
          //   <div className="deleteButton">Delete</div>
          // </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Dodaj nowego użytkownika
        <Link
          to="/users/new"
          //style={{ textDecoration: "none" }}
        >
          <Button className="link" variant="outlined" color="success">
            + Dodaj
          </Button>
        </Link>
      </div>
      <DataGrid
        localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
