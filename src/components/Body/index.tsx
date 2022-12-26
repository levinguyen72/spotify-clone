import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import "./index.css";
import { getToken } from "../../services/authService";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/auth";

const pages = ["<", ">"];

const settings = [
  "Account",
  "Profile",
  "Update to Premium",
  "Support",
  "Download",
  "Setting",
  "Log out",
];
const token = getToken().token;

function ResponsiveAppBar() {
  console.log("123AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  console.log(token);

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
