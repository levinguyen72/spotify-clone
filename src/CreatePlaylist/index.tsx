import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import CreatePlaylistSong from "../components/createPlaylistSong";
import { createForItem } from "../services/createSongPlaylist";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../services/getPlaylist";
import ItemAdded from "../components/ItemAdded";
import { RootState } from "../redux/store";
import "./index.css";

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
import uuid from "react-uuid";
import PenLogoIcon from "../components/PenLogoIcon";
import DurationIcon from "../components/durationIcon";
import { getPlaylistCoverImage } from "../services/getPlaylistCoverImage";

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

  const [searchValue, setSearchValue] = React.useState<any>("");
  const [isAddItem, setIsAddItem] = React.useState<boolean>(false);
  const [currentList, setCurrentList] = React.useState<any>({});
  const inputValue = React.useRef<any>();
  const setValue = () => {
    createForItem(inputValue.current.value).then((res) => {
      setSearchValue(res);
    });
    setIsAddItem(false);
  };

  const renderState = useSelector(
    (state: RootState) => state.auth.render_state
  );
  const [coverImage, setCoverImage] = React.useState<any>({});
  React.useEffect(() => {
    getPlaylist().then((res: any) => setCurrentList(res));
    getPlaylistCoverImage().then((res1: any) => setCoverImage(res1));
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
              {pages?.map((page) => (
                <div>
                  <MenuItem key={"page" + uuid()} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" fontSize={30} color="red">
                      <div className="header-btn">{page}</div>
                    </Typography>
                  </MenuItem>
                </div>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages?.map((page) => (
              <Button
                key={"page" + uuid()}
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
        {/*  */}
        <div className="createPlHeader__Container flex flex-1 ">
          <div className="createPlHeader__Left">
            {/* cover image*/}

            {
              <img
                src={coverImage[0]?.url}
                height={coverImage[0]?.height}
                width={coverImage[0]?.width}
              />
            }
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
          {/* duration svg */}
          <DurationIcon />
        </div>
      </div>

      {/*added songs =================> */}
      <div>{renderCurrentListTrack}</div>
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
            {searchValue?.tracks?.items?.map((item: any) => (
              <CreatePlaylistSong item={item} key={Math.random()} />
            ))}
          </div>
        </section>
        {/*  */}
      </div>
    </div>
  );
};
