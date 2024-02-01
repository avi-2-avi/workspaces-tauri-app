import { styled } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { useNavigate } from "react-router-dom";

interface MainCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  customButton?: {
    label: string;
    path: string; // Add the path property to customButton prop
  };
}

export const MainCard = ({
  title,
  subtitle,
  children,
  customButton,
}: MainCardProps) => {
  const navigate = useNavigate();

  const TableContainer = styled("div")(({ theme }) => ({
    marginTop: "1.2rem",
    marginInline: "1rem",
    backgroundColor: "#FAFAFA",
    display: "flex",
    flexFlow: "column",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  }));

  const onCustomButtonClick = (customButtonPath: string) => {
    if (customButtonPath) {
      navigate(customButtonPath);
    }
    // Add any additional logic here if needed
  };

  return (
    <>
      <TableContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
            paddingInline: "1.2rem",
          }}
        >
          <div style={{ margin: 0, paddingBottom: "1rem" }}>
            <h4 style={{ margin: 0 }}>{title}</h4>
            {subtitle && (
              <small style={{ color: "#686F78", fontSize: 13 }}>
                {subtitle}
              </small>
            )}
          </div>
          <div>
            {customButton && (
              <CustomButton
                onClick={() => onCustomButtonClick(customButton.path)}
              >
                {customButton.label}
              </CustomButton>
            )}
          </div>
        </div>
        <div style={{ backgroundColor: "#FFFFFF", padding: "1.2rem" }}>
          {children}
        </div>
      </TableContainer>
    </>
  );
};
