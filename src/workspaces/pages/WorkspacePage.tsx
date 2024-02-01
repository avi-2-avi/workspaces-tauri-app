import { Grid, styled } from "@mui/material";
import { CustomButton } from "../components/CustomButton";
import { MainCard } from "../components/MainCard";
import { useParams } from "react-router-dom";

export const WorkspacePage = () => {
  const { workspaceId } = useParams();

  const UserInfoItem = ({
    title,
    value,
    isLastItem,
    xs,
    sm,
    md,
  }: {
    title: string;
    value: string;
    isLastItem: boolean;
    xs: number;
    sm: number;
    md: number;
  }) => (
    <Grid
      item
      xs={xs}
      sm={sm}
      md={md}
      style={{
        borderRight: isLastItem ? "none" : "1px solid #EAEEED",

        paddingBottom: "0.5rem",
      }}
    >
      <Subtitle>{title}</Subtitle>
      <div style={{ fontSize: 14 }}>{value}</div>
    </Grid>
  );

  const Subtitle = styled("div")(({ theme }) => ({
    fontSize: "14px",
    lineHeight: "22px",
    color: "#535B64",
  }));

  const summaryData = [
    { title: "Username", value: "ITAdmin" },
    { title: "Operating System", value: "Boilerplate" },
    { title: "Launch Bundle", value: "Boilerplate" },
    { title: "Name", value: "Boilerplate" },
    { title: "Connection State", value: "Boilerplate" },
    { title: "Protocol", value: "Boilerplate" },
    { title: "Email", value: "Boilerplate" },
    { title: "User Last Active", value: "Boilerplate" },
    { title: "Language", value: "Boilerplate" },
    { title: "Clients Link", value: "Boilerplate" },
    { title: "Last State Check", value: "Boilerplate" },
    { title: "Computer Name", value: "Boilerplate" },
    { title: "Registration Code", value: "Boilerplate" },
    { title: "Workspace IP", value: "Boilerplate" },
    { title: "Encrypted Volumes", value: "Boilerplate" },
    { title: "Encryption Key", value: "Boilerplate" },
    { title: "AutoStop Time", value: "Boilerplate" },
    { title: "Status", value: "Boilerplate" },
  ];

  const userData = [
    { title: "Username", value: "ITAdmin" },
    { title: "First name", value: "ITAdmin" },
    { title: "Last name", value: "-" },
    { title: "Email", value: "-" },
  ];

  const hardwareData = [
    { title: "Root volume", value: "Boilerpalte" },
    { title: "User volume", value: "Boilerpalte" },
    { title: "Compute", value: "Boilerpalte" },
  ];

  const statusData = [
    { title: "Status", value: "boilerpalte" },
    { title: "Running mode", value: "Boilerpalte" },
  ];

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
              isLastItem={index % 3 === 2}
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
              isLastItem={index % 3 === 2}
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
              isLastItem={index % 3 === 2}
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
              isLastItem={index % 3 === 2}
            />
          ))}
        </Grid>
      </MainCard>
    </>
  );
};
