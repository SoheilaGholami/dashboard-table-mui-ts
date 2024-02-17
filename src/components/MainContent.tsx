import { Stack, useTheme } from "@mui/material";
import { Content } from "./DashboardStyle";
import DashboardTable from "./DashboardTable";

export const MainContent: React.FC<{ mobileOpen: boolean }> = ({
  mobileOpen,
}) => {
  const theme = useTheme();
  return (
    <Content
      sx={
        !mobileOpen
          ? {
              [theme.breakpoints.up("sm")]: {
                width: `calc(100% - ${0}px)`,
                marginRight: 0,
              },
            }
          : null
      }
    >
      <div style={theme.mixins.toolbar} />
      <Stack>
        <DashboardTable />
      </Stack>
    </Content>
  );
};
