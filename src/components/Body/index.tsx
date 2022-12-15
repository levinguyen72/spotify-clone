
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import "./index.css";

const pages = ["<<", ">>"];

const settings = [
  "Account",
  "Profile",
  "Update to Premium",
  "Support",
  "Download",
  "Setting",
  "Log out",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className="body">
      <Container maxWidth="xl"></Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
