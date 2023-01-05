import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import CategorySideBar from "../categorySideBar";

const drawerWidth = 240;
const drawerHeight = 680;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
 
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  // side bar
  const drawer = (
    <div className="sidebar">
      {/* side bar logo */}
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      {/* <Category sidebar /> */}
     <CategorySideBar />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="sidebar-container" style={{backgroundColor:"none"}}>
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
        style={{backgroundColor: "none"}}
      >
        <Drawer
          className="drawer-h"
          style={{backgroundColor: "none"}}
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
