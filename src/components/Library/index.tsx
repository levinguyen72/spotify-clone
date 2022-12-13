import React from "react";
import { getUserPlaylists } from "../../services/getUserPlaylists";
import LibraryPlaylistItem from "../LibraryPlaylistItem";
import "./index.css";
type Props = {};

const Library = (props: Props) => {
  const [userPl, getUserPl] = React.useState<any>({})
  React.useEffect(() => {
    getUserPlaylists().then(res => getUserPl(res))
  }, [])

  return (
    <div className="library__container">
      <div className="library__header-content">Playlists</div>

      <div className="grid grid-cols-5 gap-x-6 mt-10 mb-8">
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
        <LibraryPlaylistItem />
      </div>
    </div>
  );
};

export default Library;
