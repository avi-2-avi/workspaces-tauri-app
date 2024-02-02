import { api } from "./api";

export const getWorkspaces = () => api.get(`/workspaces`);

export const getWorkspace = (workspaceId: string) =>
  api.get(`/workspace/` + workspaceId);

export const rebootWorkspace = (workspaceId: string) => {
  const data = {
    workspace_id: workspaceId,
  };
  api.post("/workspaces/reboot", data);
};

export const modifyUserVolume = (workspaceId: string, volumeSize: number) => {
  const data = {
    workspace_id: workspaceId,
    volume_size: volumeSize,
  };
  api.put("/workspace/user-volume", data);
};
