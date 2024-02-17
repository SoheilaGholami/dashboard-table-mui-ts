import { Stack, useTheme } from "@mui/material";
import { Content } from "./DashboardStyle";
import { ReactNode } from "react";
import DashboardTable from "./DashboardTable";

export const MainContent: React.FC<{ children: ReactNode }> = () => {
  const theme = useTheme();
  return (
    <Content>
      <div style={theme.mixins.toolbar} />
      <Stack>
        <DashboardTable />
      </Stack>
    </Content>
  );
};
