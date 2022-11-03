import React from "react";
import { BsSearch } from "react-icons/bs";
import "./index.css";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="header__left">
        <BsSearch />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        {/* <img alt={user?.display_name} src={user?.images[0].url} /> */}
        <img alt="avatar" />
        {/* <h4>{user?.display_name}</h4> */}
        <h4>Louis Ng</h4>
      </div>
    </div>
  );
};

export default Header;
