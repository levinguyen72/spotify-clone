import React from "react";
import "./index.css";
type Props = { item: any };

const SearchReComItem = ({ item }: Props) => {
  return (
    <div className="searchReComItem">
      <a
        aria-current="page"
        className="rounded p-4 text-gray-400 group active block hover:bg-footer"
        href="#"
      >
        {/* img */}
        <div className="block px-2" style={{backgroundColor: "#" + Math.floor(Math.random()*16777215).toString(16).toString() }}>
          <h2 className="SearchReComItemTitle">{item?.name}</h2>
          <img
            className="SearchReComItemImg inset-0 object-cover"
            src={item?.icons[0]?.url || " "}
            alt="track cover"
          />
          {}
        </div>
        {/* artist name */}

        <br />
      </a>
    </div>
  );
};

export default SearchReComItem;
