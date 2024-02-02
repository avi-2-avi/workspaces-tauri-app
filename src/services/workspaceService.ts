import { api } from "./api";

export const getWorkspaces = () => api.get(`/workspaces`);

export const getWorkspace = (workspaceId: string) =>
  api.get(`/workspace/` + workspaceId);
