import { Language, LightMode, Menu, Refresh } from "@mui/icons-material";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

type DashboardAppbarProps = {
  mobileOpen: boolean;
  setMobileOpen: (data: boolean) => void;
};

export const DashboardAppbar = ({
  mobileOpen,
  setMobileOpen,
}: DashboardAppbarProps) => {
  return (
    <AppBar position="fixed">
      <Stack
        flex={1}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={"row"}
      >
        <Stack
          flexDirection={"row"}
          flex={1}
          gap={2}
          alignItems={"flex-start"}
          paddingX={2}
        >
          <Refresh />
          <LightMode />
          <Language />
        </Stack>
        <Stack flex={1} alignItems={"flex-end"}>
          <Toolbar>
            <Button
              onClick={() => setMobileOpen(!mobileOpen)}
              color="inherit"
              endIcon={<Menu />}
            >
              <Typography variant="h6">Dashboard</Typography>
            </Button>
          </Toolbar>
        </Stack>
      </Stack>
    </AppBar>
  );
};
