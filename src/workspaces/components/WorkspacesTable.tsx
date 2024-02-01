import { styled } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "volumeEncryption", headerName: "Volume encryption", width: 130 },
  { field: "workspaceId", headerName: "Workspace ID", width: 100 },
  { field: "username", headerName: "Username", width: 100 },
  { field: "compute", headerName: "Compute", width: 100 },
  { field: "rootVolume", headerName: "Root volume", width: 100 },
  { field: "userVolume", headerName: "User volume", width: 100 },
  { field: "operatingSystem", headerName: "Operating System", width: 130 },
  { field: "bundle", headerName: "Bundle", width: 200 },
  { field: "worspaceIp", headerName: "Workspace IP", width: 100 },
  { field: "standbyEnabled", headerName: "Standby enabled", width: 130 },
  { field: "runningMode", headerName: "Running Mode", width: 130 },
  { field: "protocol", headerName: "Protocol", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "organizationName", headerName: "Organization Name", width: 150 },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export const WorkspacesTable = ({ children }: { children: any }) => {
  const TableContainer = styled("div")(({ theme }) => ({
    backgroundColor: "#FAFAFA",
    display: "flex",
    flexFlow: "column",
    paddingInline: "1rem",
  }));

  return (
    <TableContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>
          Workspaces <b style={{ color: "grey" }}>({rows.length})</b>
        </h3>
        <div>
          <CustomButton />
          <CustomButton />
          <CustomButton />
        </div>
      </div>
      <p>Filter WorkSpaces by WorkSpace ID, Username, Bundle, or Directory</p>
      <input />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </TableContainer>
  );
};
