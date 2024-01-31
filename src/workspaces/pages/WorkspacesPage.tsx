import { startLogout } from "../../store/auth";
import { useAppDispatch } from "../../hooks";
import { Button } from "@mui/material";

export const WorkspacesPage = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <p>This is the Workspaces page LOG OUT</p>
      <Button onClick={onLogout} variant="contained">
        Log out
      </Button>
    </>
  );
};
