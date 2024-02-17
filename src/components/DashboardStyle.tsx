import { AppBar, Drawer, styled } from "@mui/material";

const drawerWidth = 240;
export const CustomizedAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

export const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: `${drawerWidth}`,
  },
}));

export const CustomizedDrawerNav = styled("nav")(({ theme }) => ({
  zIndex: 0,

  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
  "& ::-webkit-scrollbar": {
    display: "none",
  },
}));

export const TemporaryDrawer = styled(Drawer)(() => ({
  "& ::-webkit-scrollbar": {
    display: "none",
  },
}));

export const drawerPaper = {
  width: drawerWidth,
};

export const Toolbar = styled("div")(({ theme }) => ({
  "": theme.mixins.toolbar,
}));
