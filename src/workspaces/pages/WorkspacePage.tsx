import { Grid } from "@mui/material";
import { CustomButton } from "../components/CustomButton";
import { MainCard } from "../components/MainCard";
import { useParams } from "react-router-dom";
import { UserInfoItem } from "../components/UserInfoItem";
import { useEffect, useState } from "react";
import { getWorkspace } from "../../services/workspaceService";

export const WorkspacePage = () => {
  const { workspaceId } = useParams();
  const [summaryData, setSummaryData] = useState<
    { title: string; value: string }[]
  >([]);
  const [userData, setUserData] = useState<{ title: string; value: string }[]>(
    [],
  );
  const [hardwareData, setHardwareData] = useState<
    { title: string; value: string }[]
  >([]);
  const [statusData, setStatusData] = useState<
    { title: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getWorkspace(workspaceId!);
        const { workspaces } = data;
        const workspace = workspaces[0];
        const formatSummaryData = [
          { title: "Username", value: workspace.username },
          { title: "Operating System", value: workspace.operating_system },
          { title: "Launch Bundle", value: workspace.bundle_name },
          { title: "Name", value: workspace.username },
          { title: "Connection State", value: workspace.connection_state },
          { title: "Protocol", value: workspace.protocol },
          { title: "Email", value: "-" },
          {
            title: "User Last Active",
            value: workspace.connection_state_check_timestamp,
          },
          { title: "Language", value: "English (US)" },
          {
            title: "Clients Link",
            value: "https://clients.amazonworkspaces.com/",
          },
          {
            title: "Last State Check",
            value: workspace.last_known_user_connection_timestamp,
          },
          { title: "Computer Name", value: workspace.computer_name },
          { title: "Registration Code", value: workspace.registration_code },
          { title: "Workspace IP", value: workspace.ip_address },
          {
            title: "Encrypted Volumes",
            value: workspace.user_volume_encryption ? "User volume" : "None",
          },
          { title: "Encryption Key", value: workspace.volume_encryption_key },
          {
            title: "AutoStop Time",
            value: workspace.running_mode_auto_stop_timeout_in_minutes + " min",
          },
          { title: "Status", value: workspace.status },
        ];

        const formatUserData = [
          { title: "Username", value: workspace.username },
          { title: "First name", value: workspace.username },
          { title: "Last name", value: "-" },
          { title: "Email", value: "-" },
        ];
        const formatHardwareData = [
          { title: "Root volume", value: workspace.root_volume + " GB" },
          { title: "User volume", value: workspace.user_volume + " GB" },
          { title: "Compute", value: workspace.compute_type_name },
        ];
        const formatStatusData = [
          { title: "Status", value: workspace.status },
          { title: "Running mode", value: workspace.running_mode },
        ];

        setSummaryData(formatSummaryData);
        setUserData(formatUserData);
        setHardwareData(formatHardwareData);
        setStatusData(formatStatusData);
      } catch (error) {
        console.error("Error fetching workspaces:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
          marginInline: "1rem",
        }}
      >
        <h2 style={{ margin: 0 }}>{workspaceId}</h2>
        <div>
          <CustomButton>Create image</CustomButton>
          <CustomButton>Start</CustomButton>
          <CustomButton>Stop</CustomButton>
          <CustomButton>Reboot</CustomButton>
          <CustomButton>Delete</CustomButton>
          <CustomButton>Actions</CustomButton>
        </div>
      </div>
      <MainCard title="Summary">
        <Grid container spacing={1}>
          {summaryData.map((item, index) => (
            <UserInfoItem
              key={index}
              title={item.title}
              value={item.value}
              xs={12}
              sm={6}
              md={4}
            />
          ))}
        </Grid>
      </MainCard>
      <MainCard
        title="User"
        subtitle="User associated with this workspace. Edit their information or send them their invite"
      >
        <Grid container spacing={1}>
          {userData.map((item, index) => (
            <UserInfoItem
              key={index}
              title={item.title}
              value={item.value}
              xs={12}
              sm={6}
              md={3}
            />
          ))}
        </Grid>
      </MainCard>
      <MainCard
        title="Hardware"
        subtitle="Shows the user/root volumes and compute type"
        customButton={{
          label: "Edit user volume",
          path: "/workspaces/" + workspaceId + "/modify-user-volume",
        }}
      >
        <Grid container spacing={1}>
          {hardwareData.map((item, index) => (
            <UserInfoItem
              key={index}
              title={item.title}
              value={item.value}
              xs={12}
              sm={6}
              md={4}
            />
          ))}
        </Grid>
      </MainCard>
      <MainCard
        title="Status"
        subtitle="Edit the status, running mode, and auto stop time (if applicable) of this workspace"
      >
        <Grid container spacing={1}>
          {statusData.map((item, index) => (
            <UserInfoItem
              key={index}
              title={item.title}
              value={item.value}
              xs={12}
              sm={6}
              md={6}
            />
          ))}
        </Grid>
      </MainCard>
    </>
  );
};
