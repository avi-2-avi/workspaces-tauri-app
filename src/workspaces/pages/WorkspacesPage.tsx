import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const WorkspacesPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/auth");
  };

  return (
    <>
      <p>This is the Workspaces page LOG OUT</p>
      <Button variant="contained" onClick={handleLogout}>
        Log out
      </Button>
    </>
  );
};
