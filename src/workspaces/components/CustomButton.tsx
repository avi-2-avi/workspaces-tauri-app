import { Button, styled } from "@mui/material";

interface CustomButtonProps {
  children: React.ReactNode;
  isSecondary?: boolean;
  onClick?: () => void;
}

export const CustomButton = ({
  children,
  isSecondary,
  onClick,
}: CustomButtonProps) => {
  const ColorButton = styled(Button)({
    background: isSecondary ? "#FF9900" : "#fff",
    color: isSecondary ? "#16191E" : "#545b64",
    textTransform: "none",
    border: isSecondary ? 0 : "0.5px solid",
    borderRadius: 0,
    borderColor: "#545b64",
    position: "relative",
    textDecoration: "none",
    fontSize: 12,
    fontWeight: "bold",
    marginInline: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingInline: 12,
  });

  return <ColorButton onClick={onClick}>{children}</ColorButton>;
};
