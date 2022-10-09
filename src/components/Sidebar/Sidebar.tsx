import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { LogoMenu } from "./style";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = React.memo(({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <Drawer
      anchor={"left"}
      open={isOpen}
      variant={"persistent"}
      sx={{ width: 250 }}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem key={"close"}>
            <LogoMenu>
              <ListItemText primary={"DIET_LOG"} />
              <KeyboardDoubleArrowLeftIcon onClick={toggleSidebar} />
            </LogoMenu>
          </ListItem>
          <ListItem key={"E"}>
            <ListItemText primary={""} />
          </ListItem>
          <ListItem key={"Ee"}>
            <ListItemText primary={""} />
          </ListItem>
          <ListItem key={"메인"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"홈"} />
          </ListItem>
          <ListItem key={"REPORT"}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary={"통계"} />
          </ListItem>
          <ListItem key={"SETTING"}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"설정"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
});

export default Sidebar;
