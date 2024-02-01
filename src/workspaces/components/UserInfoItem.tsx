import { Grid, styled } from "@mui/material";

const Subtitle = styled("div")(({}) => ({
  fontSize: "14px",
  lineHeight: "22px",
  color: "#535B64",
}));

export const UserInfoItem = ({
  title,
  value,
  xs,
  sm,
  md,
}: {
  title: string;
  value: string;
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
      borderRight: "1px solid #EAEEED",
      paddingBottom: "0.5rem",
    }}
  >
    <Subtitle>{title}</Subtitle>
    <div style={{ fontSize: 14 }}>{value}</div>
  </Grid>
);
