import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import "./index.css";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const drawerHeight = 680;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const setSearch = () => {
    // alert(124);
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // side bar
  const drawer = (
    <div className="sidebar">
      {/* <Toolbar /> */}
      {/* side bar logo */}
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/* <Divider /> */}
      <List>
        {/*  */}
        <NavLink to="/home">
          <ListItem disablePadding className="sidebar-list">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon className="sidebar-list__logo" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/*  */}
        <NavLink to="/search">
          <ListItem disablePadding className="sidebar-list">
            <ListItemButton onClick={setSearch}>
              <ListItemIcon>
                <SearchIcon className="sidebar-list__logo" />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/*  */}
        <NavLink to="/library">
          <ListItem disablePadding className="sidebar-list">
            <ListItemButton>
              <ListItemIcon>
                <LibraryMusicIcon className="sidebar-list__logo" />
              </ListItemIcon>
              <ListItemText primary="Your library" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/*  */}
        <br />
        {/*  */}
        <NavLink to="/create-playlist">
          <ListItem disablePadding className="sidebar-list">
            <ListItemButton>
              <ListItemIcon>
                <AddBoxIcon className="sidebar-list__logo" />
              </ListItemIcon>
              <ListItemText primary="Create Playlist" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/*  */}
        {/*  */}
        <NavLink to="/liked-song">
          <ListItem disablePadding className="sidebar-list">
            <ListItemButton>
              <ListItemIcon>
                <FavoriteIcon className="sidebar-list__logo" />
              </ListItemIcon>
              <ListItemText primary="Liked Songs" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        {/*  */}
      </List>
      <Divider className="sidebar_divider" />
      <List>
        <ListItem disablePadding className="sidebar-list">
          <ListItemButton>
            <ListItemText primary="My playlist #3" />
          </ListItemButton>
        </ListItem>
        {/*  */}
        <ListItem disablePadding className="sidebar-list">
          <ListItemButton>
            <ListItemText primary="My playlist #2" />
          </ListItemButton>
        </ListItem>
        {/*  */}
        <ListItem disablePadding className="sidebar-list">
          <ListItemButton>
            <ListItemText primary="My playlist #1" />
          </ListItemButton>
        </ListItem>
        {/*  */}
        <ListItem disablePadding className="sidebar-list__download">
          <ListItemButton>
            <ListItemIcon>
              <DownloadForOfflineOutlinedIcon className="sidebar-list__logo" />
            </ListItemIcon>
            <ListItemText primary="Install" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="sidebar-container">
      <CssBaseline />
      {/* content sidebar */}
      <AppBar
        className="drawer-h"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      ></AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          className="drawer-h"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: drawerHeight,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: drawerHeight,
            },
          }}
          open
          className="drawer-h"
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
