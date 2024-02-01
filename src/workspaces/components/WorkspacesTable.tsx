import { styled } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getWorkspaces } from "../../services/workspaceService";

const columns: GridColDef[] = [
  {
    field: "user_volume_encryption",
    headerName: "Volume encryption",
    width: 130,
    valueGetter: (params) => (params.value ? "Yes" : "No"),
  },
  { field: "workspace_id", headerName: "Workspace ID", width: 130 },
  { field: "username", headerName: "Username", width: 100 },
  { field: "compute", headerName: "Compute", width: 100 },
  { field: "root_volume", headerName: "Root volume", width: 100 },
  { field: "user_volume", headerName: "User volume", width: 100 },
  { field: "operating_system", headerName: "Operating System", width: 200 },
  { field: "bundle_name", headerName: "Bundle", width: 340 },
  { field: "ip_address", headerName: "Workspace IP", width: 130 },
  {
    field: "standby_enabled",
    headerName: "Standby enabled",
    width: 130,
    valueGetter: (params) => (params.value ? "Yes" : "No"),
  },
  { field: "running_mode", headerName: "Running Mode", width: 130 },
  { field: "protocol", headerName: "Protocol", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "organization_name", headerName: "Organization Name", width: 150 },
];

export const WorkspacesTable = ({ children }: { children: any }) => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWorkspaces();
        const workspacesWithIds = response.data.workspaces.map(
          (workspace: any, index: number) => ({
            ...workspace,
            id: index + 1, // You can use any unique identifier here
          }),
        );
        console.log(workspacesWithIds);
        setWorkspaces(workspacesWithIds);
      } catch (error) {
        console.error("Error fetching workspaces:", error);
      }
    };

    fetchData();
  }, []);

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
          Workspaces <b style={{ color: "grey" }}>({workspaces.length})</b>
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
          rows={workspaces}
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
