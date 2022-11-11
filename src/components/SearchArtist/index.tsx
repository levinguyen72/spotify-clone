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
          {/* <button className="w-12 h-12 bg-primary right-2 bottom-2 transition-opacity flex items-center shadow-2xl justify-center opacity-0 opacity-100 ">
            <svg
              role="img"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              className="Svg-sc-1bi12j5-0 hDgDGI"
            >
              <path
                d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
                fill="black"
              ></path>
            </svg>
          </button> */}
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
