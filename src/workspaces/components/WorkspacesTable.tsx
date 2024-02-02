import { Input, styled } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getWorkspaces } from "../../services/workspaceService";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
  {
    field: "user_volume_encryption",
    headerName: "Volume encryption",
    width: 130,
    valueGetter: (params) => (params.value ? "Yes" : "No"),
  },
  {
    field: "workspace_id",
    headerName: "Workspace ID",
    width: 130,
    renderCell: (params) => (
      <Link to={`/workspaces/${params.value}`}>{params.value}</Link>
    ),
  },
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

export const WorkspacesTable = () => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // This works, just don't wanna call too many times API GATEWAY
        const response = await getWorkspaces();
        const workspacesWithIds = response.data.workspaces.map(
          (workspace: any, index: number) => ({
            ...workspace,
            id: index + 1, // You can use any unique identifier here
          }),
        );
        setWorkspaces(workspacesWithIds);
      } catch (error) {
        console.error("Error fetching workspaces:", error);
      }
    };

    fetchData();
  }, []);

  const TableContainer = styled("div")(({ theme }) => ({
    marginInline: "1rem",
    backgroundColor: "#FAFAFA",
    display: "flex",
    flexFlow: "column",
    paddingInline: "1rem",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  }));

  return (
    <TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <h3 style={{ margin: 0 }}>
          Workspaces <b style={{ color: "grey" }}>({workspaces.length})</b>
        </h3>
        <div>
          <CustomButton>
            <RefreshIcon fontSize="small" />
          </CustomButton>
          <CustomButton>View Details</CustomButton>
          <CustomButton>Start</CustomButton>
          <CustomButton>Stop</CustomButton>
          <CustomButton>Delete</CustomButton>
          <CustomButton>Actions</CustomButton>
          <CustomButton isSecondary>Create Workspaces</CustomButton>
        </div>
      </div>
      <small style={{ fontSize: "small", marginLeft: "0.5rem" }}>
        Filter WorkSpaces by WorkSpace ID, Username, Bundle, or Directory
      </small>
      <Input
        placeholder="Filter WorkSpaces by WorkSpace ID, Username, Bundle, or Directory"
        startAdornment={<SearchIcon />}
        sx={{ width: 500, border: "1px solid #ced4da" }}
        style={{
          fontSize: 12,
          fontStyle: "italic",
          marginLeft: "0.5rem",
          marginBottom: "1rem",
        }}
      />
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
