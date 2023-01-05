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
  
 
  Avatar,
  Tooltip,
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
    setTimeout(() => {
      createForItem(inputValue.current.value).then((res) => {
        setSearchValue(res);
      });
    }, 2200);
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
        
          {/* left header */}
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
