import {
  FormControlLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
} from "@mui/material";
import { MainCard } from "../components/MainCard";
import { UserInfoItem } from "../components/UserInfoItem";
import { useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { useNavigate, useParams } from "react-router-dom";

export const UserVolumePage = () => {
  const [size, setSize] = useState("opt10Gb");
  const { workspaceId } = useParams();
  const navigate = useNavigate();

  const onSizeChange = (event: any) => {
    setSize(event.target.value);
  };

  const onClickCancel = () => {
    navigate("/workspaces/" + workspaceId);
  };

  const summaryData = [
    { title: "Workspace ID", value: "Boilerplate" },
    { title: "Root volume", value: "Boilerplate" },
    { title: "Username", value: "ITAdmin" },
    { title: "User volume", value: "Boilerplate" },
    { title: "Current computer", value: "Boilerplate" },
  ];

  const options = [
    { value: "opt10Gb", label: "User volume size: 10 GB" },
    { value: "opt50Gb", label: "User volume size: 50 GB" },
    { value: "opt100Gb", label: "User volume size: 100 GB" },
    { value: "custom", label: "Custom" },
  ];

  return (
    <>
      <div style={{ marginTop: "1rem", marginInline: "1rem" }}>
        <h2 style={{ margin: 0 }}>Modify user volume</h2>
        <p
          style={{ marginTop: 10, padding: 0, color: "#545b64", fontSize: 14 }}
        >
          You can increase the size of the user volume for a WorkSpace up to
          2000 GB. The Monthly payment may increase depending on you selection
          see pricing.
        </p>
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
              md={6}
            />
          ))}
        </Grid>
      </MainCard>
      <MainCard title="Modify user volume">
        <RadioGroup
          value={size}
          onChange={onSizeChange}
          row
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: "1.2rem",
          }}
        >
          <Grid container columnSpacing={2}>
            {options.map((option) => (
              <Grid
                key={option.value}
                item
                xs={12}
                md={6}
                style={{
                  marginTop: "1rem",
                }}
              >
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  style={{
                    marginInline: 1,
                    border: "0.5px solid black",
                    background:
                      size === option.value ? "#F1FBFF" : "transparent",
                    width: "100%",
                  }}
                />
              </Grid>
            ))}
            {size === "custom" && (
              <Grid
                item
                xs={12}
                style={{
                  fontSize: 14,
                  marginTop: "1rem",
                }}
              >
                <Input
                  defaultValue={10}
                  sx={{ border: "1px solid #ced4da" }}
                  fullWidth
                  type="number"
                  style={{
                    paddingInline: 10,
                  }}
                />
                <small>Enter a volume size between 100 and 2000 GB.</small>
              </Grid>
            )}
          </Grid>
        </RadioGroup>
      </MainCard>
      <div
        style={{
          marginInline: 12,
          marginTop: 20,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CustomButton onClick={() => onClickCancel()}>Cancel</CustomButton>
        <CustomButton isSecondary>Save</CustomButton>
      </div>
    </>
  );
};
