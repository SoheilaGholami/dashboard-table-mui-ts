import { Grid } from "@mui/material";
import { ReactNode, useState } from "react";
import { DashboardAppbar } from "./DashboardAppbar";
import MainDrawer from "./MainDrawer";
import { MainContent } from "./MainContent";

export const Dashboard: React.FC<{ children: ReactNode }> = () => {
  const [mobileOpen, setMobileOpen] = useState(true);
  return (
    <Grid container>
      <DashboardAppbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MainContent mobileOpen={mobileOpen}></MainContent>
      <MainDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </Grid>
  );
};
