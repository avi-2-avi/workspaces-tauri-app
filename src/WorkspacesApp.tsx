import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";

export const WorkspacesApp = () => {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};
