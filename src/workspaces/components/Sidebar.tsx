import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { startLogout } from "../../store/auth";

import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import { pagesConfig } from "../pages/config";

export const Sidebar = ({ children }: { children: any }) => {
  const drawerWidthClosed = 40;
  const drawerWidth = 260;
  const [open, setOpen] = useState(false);
  const [marginLeft, setMarginLeft] = useState(drawerWidthClosed);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    paddingLeft: "16px",
    paddingRight: "6px",
    paddingBottom: 1,
    paddingTop: 1,
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  }));

  const StyledAppBar = styled(AppBar)({
    height: "100vh",
    width: drawerWidthClosed,
    left: 0,
    position: "fixed",
    background: "#fff",
    "&:hover": {
      background: "#E9ECEE",
    },
  });

  const Footer = styled("div")(() => ({
    position: "absolute",
    bottom: 0,
    width: "100%",
  }));

  const MainContainer = styled("div")(() => ({
    marginLeft: marginLeft - 8,
    marginTop: -8,
    marginRight: -8,
    height: "100vh",
    backgroundColor: "#f2f3f3",
    paddingTop: "1.6rem",
    paddingBottom: "1.6rem",
    paddingRight: "1.6rem",
    paddingLeft: "1.6rem",
  }));

  const onDrawerOpen = () => {
    setOpen(true);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  const onLogout = () => {
    dispatch(startLogout());
  };

  const onListItemCheck = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);

    navigate(pagesConfig[index].path);
  };

  useEffect(() => {
    setMarginLeft(open ? drawerWidth : drawerWidthClosed);
  }, [open]);

  return (
    <>
      <StyledAppBar>
        <IconButton
          color="default"
          aria-label="open sidebar"
          onClick={onDrawerOpen}
          edge="start"
          disableRipple
          size="small"
          sx={{ paddingTop: 2, alignItems: "center" }}
        >
          <MenuIcon />
        </IconButton>
      </StyledAppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        transitionDuration={0}
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerHeader>
          <h3>Workspaces</h3>
          <IconButton onClick={onDrawerClose} disableRipple>
            <ClearIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List disablePadding>
          {pagesConfig.map((page, index) => (
            <ListItem key={page.name} disablePadding>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={(event) => onListItemCheck(event, index)}
              >
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Footer>
          <ListItemButton>
            <ListItemText primary={"Logout"} onClick={onLogout} />
          </ListItemButton>
        </Footer>
      </Drawer>
      <MainContainer>{children}</MainContainer>
    </>
  );
};
