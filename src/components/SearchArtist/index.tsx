import React from "react";
import "./index.css";

type Props = { item: any };

const SearchArtist = ({ item }: Props) => {
  return (
    <div className="searchArtistItem">
      <a
        aria-current="page"
        className="rounded p-4 text-gray-400 group active block hover:bg-footer"
        href="#"
      >
        {/* img */}
        <div className=" block px-2">
          <img
            className="w-96 h-96 inset-0 object-cover"
            src={item && item?.images[0] && item?.images[0]?.url}
            alt="track cover"
          />
          {}
          
        </div>
        {/* artist name */}
        <div className="searchArtistName">
          <span className=" font-semibold text-white text-[16px] whitespace-nowrap flex">
            {item?.name}
          </span>{" "}
          <span className=" text-[14px] whitespace-nowrap text-gray-400 flex">
            Artists
          </span>
        </div>
        <br />
      </a>
    </div>
  );
};

export default SearchArtist;
