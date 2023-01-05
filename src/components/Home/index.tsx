import * as React from "react";
import { AppBar, Container, makeStyles, Toolbar } from "@mui/material";
import RecentlyPlayed from "../RecentlyPlayed";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "./index.css";
import uuid from "react-uuid";
import { getToken } from "../../services/authService";
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

function Home() {
  console.log("AAAAAAAAAAAAAaaaaaa")
  const _accessToken = getToken().token;
  console.log(_accessToken)

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
      <Container maxWidth="xl">
        <Toolbar disableGutters className="header">
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="header-btn"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages?.map((page) => (
                <MenuItem key={"pages" + uuid()} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    fontSize={30}
                    style={{ color: "black" }}
                    className="pagesButton"
                  >
                    <div className="header-btn">{page}</div>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div className="left__header">
              <button
                data-testid="top-bar-back-button"
                aria-label="Go back"
                className="control__button"
                aria-expanded="false"
              >
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path>
                </svg>
              </button>
              <button
                data-testid="top-bar-forward-button"
                aria-label="Go forward"
                className="control__button"
              >
                <svg
                  role="img"
                  height="24"
                  width="24"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-encore-id="icon"
                >
                  <path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path>
                </svg>
              </button>
            </div>
          </Box>
          {/* update */}
          <Box>
            <button
              className="update__button"
              title="Upgrade to Premium"
              aria-label="Upgrade to Premium"
              data-encore-id="buttonSecondary"
            >
              Upgrade
            </button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Louis Ng">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* avatar */}
                {/*  */}
                <div className="account__infor">
                  <div className="account__img-box">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                      className="account__img"
                    >
                      <path d="M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z"></path>
                    </svg>
                  </div>
                  {/* name */}
                  <h2 className="user__name">Louis Ng</h2>
                  {/* narrow down */}
                  <div className="narrow__down">
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      aria-hidden="true"
                      className="narrow__down-icon"
                      viewBox="0 0 16 16"
                      data-encore-id="icon"
                    >
                      <path d="M14 6l-6 6-6-6h12z"></path>
                    </svg>
                  </div>
                </div>
                {/*  */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings?.map((setting) => (
                <MenuItem
                  key={"setting" + uuid()}
                  onClick={handleCloseUserMenu}
                  
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <RecentlyPlayed />
      </Container>
    </AppBar>
  );
}

export default Home;
