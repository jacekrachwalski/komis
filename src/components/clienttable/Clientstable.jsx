import "./clientstable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { plPL } from "@mui/x-data-grid/locales";
import { clientColumns, clientRows } from "../../clienttablesource";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Clientstable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Opcje",
      width: 200,
      renderCell: () => {
        return (
          <Stack direction="row" spacing={2}>
            <Link to="/clients" style={{ textDecoration: "none" }}>
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
        );
      },
    },
  ];

  return (
    <div className="clientstable">
      <div className="clientstableTitle">
        Kartoteka - Klienci
        <Link to="/clients/new">
          <Button className="link" variant="outlined" color="success">
            + Dodaj klienta
          </Button>
        </Link>
      </div>
      <DataGrid
        localeText={plPL.components.MuiDataGrid.defaultProps.localeText}
        rows={clientRows}
        columns={clientColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
      />
    </div>
  );
};

export default Clientstable;
