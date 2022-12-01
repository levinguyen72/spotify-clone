import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import { createPlaylist } from "../../services/createPlaylist";
import "./index.css";
import { getPlaylistCoverImage } from "../../services/getPlaylistCoverImage";

type Props = {};

const CategorySideBar = (props: Props) => {
  const [countPl, setCountPl] = React.useState<number>(4);
  const [plListArr, setPlListArr] = React.useState<number[]>([1, 2, 3]);
  const dispatch = useDispatch();
  const createNewPlayList = () => {
  
    setCountPl(countPl + 1);
    plListArr.push(countPl);
    createPlaylist(countPl);
    createPlaylist().then((res) => dispatch({ res }));
  };
  return (
    <>
      {" "}
      <List>
        {/*  */}
        <NavLink to="/home">
          <ListItem key="home" disablePadding className="sidebar-list">
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
          <ListItem key="search" disablePadding className="sidebar-list">
            <ListItemButton>
              <ListItemIcon>
                <SearchIcon className="sidebar-list__logo" />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        {/*  */}
        <NavLink to="/library">
          <ListItem key="library" disablePadding className="sidebar-list">
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
        <NavLink to="/createPlaylist">
          <ListItem
            key="createPlaylist"
            disablePadding
            className="sidebar-list"
          >
            {/* function create playlist here */}
            <ListItemButton onClick={createNewPlayList}>
              <ListItemIcon>
                <AddBoxIcon className="sidebar-list__logo" />
              </ListItemIcon>
              <ListItemText primary="Create Playlist" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        {/*  */}
        <NavLink to="/likedSong">
          <ListItem key="likedSong" disablePadding className="sidebar-list">
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
      <Divider className="sidebarDivider" />
      <List>
        {plListArr.length < 5
          ? plListArr?.map((item: number) => (
              <ListItem
                key={item.toString() + uuid()}
                disablePadding
                className="sidebar-list"
              >
                <ListItemButton>
                  <ListItemText primary={`My Playlist #${item}`} />
                </ListItemButton>
              </ListItem>
            ))
          : plListArr?.map((item: number) => (
              <ListItem
                key={item.toString() + uuid()}
                disablePadding
                className="sidebar-list-than5"
              >
                <ListItemButton>
                  <ListItemText primary={`My Playlist #${item}`} />
                </ListItemButton>
              </ListItem>
            ))}

        <ListItem disablePadding className="sidebar-list__download">
          <ListItemButton>
            <ListItemIcon>
              <DownloadForOfflineOutlinedIcon className="sidebar-list__logo" />
            </ListItemIcon>
            <ListItemText primary="Install" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default CategorySideBar;
