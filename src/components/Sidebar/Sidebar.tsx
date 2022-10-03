import * as React from "react";
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

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
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
            <ListItemButton>
              <ListItemText primary={"DIET_LOG"} />
              <ListItemIcon onClick={toggleSidebar}>
                <KeyboardDoubleArrowLeftIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem key={"E"}>
            <ListItemText primary={""} />
          </ListItem>
          <ListItem key={"HOME"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"HOME"} />
          </ListItem>
          <ListItem key={"REPORT"}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary={"REPORT"} />
          </ListItem>
          <ListItem key={"SETTING"}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"SETTING"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
