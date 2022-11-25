import {
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useEffect } from "react";
import "./index.css";

import { searchForItem } from "../services/searchForItem";
import CreatePlaylistSong from "../components/createPlaylistSong";
import SearchSong from "../components/SearchSong";
import { createForItem } from "../services/createSongPlaylist";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../services/getPlaylist";
import ItemAdded from "../components/ItemAdded";
import { RootState } from "../redux/store";

type Props = {};
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

export const CreatePlaylist = (props: Props) => {
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
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = React.useState<any>();
  const [isAddItem, setIsAddItem] = React.useState<boolean>(false);
  const [currentList, setCurrentList] = React.useState<any>();
  const inputValue = React.useRef<any>();
  const setValue = () => {
    createForItem(inputValue.current.value).then((res) => {
      setSearchValue(res);
    });
    setIsAddItem(false);
  };

  const renderState = useSelector((state: RootState) => state.auth.render_state)
  
  React.useEffect(() => {
    getPlaylist().then((res: any) => setCurrentList(res));
    console.log("At create playlist ========== " + ((new Date()).getTime()).toString())
  }, [renderState]);
 
  const renderCurrentListTrack = React.useMemo(() => {
    return currentList?.tracks?.items?.map((item: any, index: number) => (
      <ItemAdded
        index={currentList?.tracks?.items?.indexOf(item) + 1}
        item={item}
        key={item.id}
      />
    ));
  }, [currentList?.tracks?.items, renderState]);
  return (
    <div className="createPlaylistContainer">
      {/* header */}
      <div className="createPlHeader ">
        {/*  */}
        <Toolbar disableGutters className="header flex-auto">
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
              {pages.map((page) => (
                <div>
                  <MenuItem
                    key={"page" + Math.random().toString()}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center" fontSize={30} color="red">
                      <div className="header-btn">{page}</div>
                    </Typography>
                  </MenuItem>
                </div>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={"page" + Math.random().toString()}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem
                  key={"setting" + Math.random().toString()}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {/*  */}
        <div className="createPlHeader__Container flex flex-1 ">
          <div className="createPlHeader__Left">
            <svg
              role="img"
              height="48"
              width="48"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="Svg-ytk21e-0 eqtHWV createPlHeader__Left-img"
            >
              <path d="M17.318 1.975a3.329 3.329 0 114.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 01-1.28-1.28l1.581-4.376a4.726 4.726 0 011.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 00-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 001.001-.636L20.611 5.268a1.329 1.329 0 000-1.879z"></path>
            </svg>
          </div>
          <div className="createPlHeader__Right">
            <h4>Playlist</h4>
            <h1>My playlist #3</h1>
            <h2>Louis Nguyen</h2>
          </div>
        </div>
      </div>
      {/* option */}
      <div className="createPlOption mt-6">
        <div className="createPlOption__number">#</div>
        <div className="createPlOption__title">Title</div>
        <div className="createPlOption__album">Album</div>
        <div className="createPlOption__date-add">Date add</div>
        <div className="createPlOption__duration">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
            <path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path>
          </svg>
        </div>
      </div>

      {/*<===================== added songs =================> */}
      <div>
        {renderCurrentListTrack}

        {/* {currentList?.tracks?.items?.map((item: any, index: number) => (
          <ItemAdded
            index={currentList?.tracks?.items?.indexOf(item) + 1}
            item={item}
            key={item.id}
          />
        ))}; */}
      </div>
      {/*<==================== added song ================> */}

      {/* Body */}
      <div className="createPlBody">
        {/* body title */}
        <div className="createPlBodyTitle">
          <h1>Let's find something for your playlist</h1>
        </div>
        {/* body search */}
        <div className="createPlBodySearch">
          {/* input */}
          <div className="searchInputContainer">
            <input
              type="text"
              onChange={setValue}
              className=""
              placeholder="Search for songs or episodes"
              ref={inputValue}
            />
            <div className="clearArea">
              <ClearIcon className="clearIcon" />
            </div>
          </div>
        </div>

        {/*result  */}
        <section className="createResult mt-6">
          {/* song */}
          <div className="grid grid-rows-10 gap-4">
            {searchValue?.tracks?.items.map((item: any) => (
              <CreatePlaylistSong item={item} />
            ))}
          </div>
        </section>
        {/*  */}
      </div>
    </div>
  );
};
