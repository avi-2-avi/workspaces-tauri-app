import { api } from "./api";

export const getWorkspaces = () => api.get(`/workspaces`);
