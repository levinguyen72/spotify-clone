import React from "react";
import "./index.css";

type Props = { item: any };

const TopResultResearch = ({ item }: Props) => {
  return (
    <div className="searchResultSong h-20 flex bg-footer mt-4 overflow-hidden">
      <a
        aria-current="page"
        className="rounded p-4 text-gray-400 group active mb-4 flex-1 w-96 bg-footer"
        href="#"
      >
        <div className="searchResultImg flex-2 px-2">
          <img
            className="w-24 h-24 inset-0 object-cover mb-4"
            src={item?.tracks?.items[0]?.album?.images[1]?.url}
            alt="track cover"
          />
     
          {/* <button
            
              className="w-12 h-12 bg-primary right-2 bottom-2 transition-opacity flex items-center shadow-2xl justify-center opacity-0 opacity-100 "
            >
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
        <div className="flex-1">
          <span className="text-3xl font-bold text-white text-[16px] whitespace-nowrap flex mb-2">
            {item?.tracks?.items[0]?.name}
          </span>{" "}
          <span className="text-[14px] whitespace-nowrap text-gray-400 flex">
            {item?.tracks?.items[0]?.artists[0].name}
          </span>
        </div>
        <br />
      </a>
    </div>
  );
};

export default TopResultResearch;
