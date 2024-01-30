import { Navigate, Route, Routes } from "react-router-dom";
import { WorkspacesPage } from "../workspaces";
import { LoginPage } from "../auth";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui/components";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<WorkspacesPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
