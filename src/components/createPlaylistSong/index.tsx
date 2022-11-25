import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRenderState } from "../../redux/slices/auth";
import { AddItemToPL } from "../../services/addItemsToPlaylist";
import "./index.css";
type Props = { item: any };

const CreatePlaylistSong = ({ item }: Props) => {
  const dispatch = useDispatch();
  const addItemToPlayList = (itemURI: string) => {
    dispatch(setRenderState());
    console.log("AT ADD")
    AddItemToPL(itemURI);
  };
  return (
    //
    <div className="createResultSong leftResultSong flex">
      {/* item */}
      <div
        aria-current="page"
        className="rounded p-4 text-gray-400 group active flex hover:bg-footer "
        // href="#"
      >
        <div className="searchResultImg w-12 h-12 flex-2 px-2">
          <img
            className="w-10 h-10 inset-0 object-cover"
            src={
              item &&
              item?.album &&
              item?.album?.images &&
              item?.album?.images[1] &&
              item?.album?.images[1]?.url
            }
            alt="track cover"
            height="40px"
            width="40px"
          />
          {}
          <button className="w-12 h-12 bg-primary right-2 bottom-2 transition-opacity flex items-center shadow-2xl justify-center opacity-0 opacity-100 ">
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
          </button>
        </div>
        <div className="flex-5 ">
          <span className=" font-semibold text-white text-[16px] whitespace-nowrap flex">
            {item?.name}
          </span>{" "}
          <span className=" text-[14px] whitespace-nowrap text-gray-400 flex">
            {item?.artists[0].name}
          </span>
        </div>
        <br />
      </div>
      {/* button */}
      <button onClick={() => addItemToPlayList(item.uri)}>Add</button>
    </div>
  );
};

export default CreatePlaylistSong;
