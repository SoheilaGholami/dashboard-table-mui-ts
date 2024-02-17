import { Box, Divider, Drawer, Hidden, Typography } from "@mui/material";
import { CustomizedDrawerNav } from "./DashboardStyle";
import { DrawerList } from "./DrawerItemList";

type MainDrawerProps = {
  mobileOpen: boolean;
  setMobileOpen: (data: boolean) => void;
};

const MainDrawer = ({ mobileOpen, setMobileOpen }: MainDrawerProps) => {
  return (
    <CustomizedDrawerNav>
      <Hidden smUp>
        {mobileOpen && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            PaperProps={{
              sx: {
                width: 240,
                paddingTop: "10px !important",
                transition: "all 1s",
              },
            }}
          >
            <Box paddingX={2} component="span">
              <Typography variant="h5">Dashboard</Typography>
            </Box>
            <Divider />
            <DrawerList />
          </Drawer>
        )}
      </Hidden>

      <Hidden smDown>
        {mobileOpen && (
          <Drawer
            variant="permanent"
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(!mobileOpen)}
            PaperProps={{ sx: { width: 240, paddingTop: "64px !important" } }}
          >
            <DrawerList />
          </Drawer>
        )}
      </Hidden>
    </CustomizedDrawerNav>
  );
};

export default MainDrawer;
