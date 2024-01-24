import { Route, Routes } from "react-router-dom";
import { WorkspacesPage } from "../workspaces";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<WorkspacesPage />} />
      <Route path="/auth" element={<LoginPage />} />
    </Routes>
  );
};
