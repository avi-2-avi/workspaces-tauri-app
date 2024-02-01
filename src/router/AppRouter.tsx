import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui/components";
import { Sidebar } from "../workspaces/components/Sidebar";
import { WorkspacesPage } from "../workspaces";
import { AccountPage } from "../workspaces/pages/AccountPage";
import { WorkspacePage } from "../workspaces/pages/WorkspacePage";
import { UserVolumePage } from "../workspaces/pages/UserVolumePage";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <>
      {status === "not-authenticated" ? (
        <Routes>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login/" />} />
        </Routes>
      ) : (
        <Sidebar>
          <Routes>
            <Route path="/" element={<WorkspacesPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route
              path="/workspaces/:workspaceId"
              element={<WorkspacePage />}
            />
            <Route
              path="/workspaces/:workspaceId/modify-user-volume"
              element={<UserVolumePage />}
            />
            /* <Route path="/*" element={<Navigate to="/" />} /> */
          </Routes>
        </Sidebar>
      )}
    </>
  );
};
