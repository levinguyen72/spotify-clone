import { getStepLabelUtilityClass } from "@mui/material";
import Icon from "@mui/material/Icon";
import { iteratorSymbol } from "immer/dist/internal";
import React, { useEffect } from "react";
import { NavLink, useActionData } from "react-router-dom";
import { isConstructorDeclaration, isTemplateExpression } from "typescript";
import "./index.css";

import { startResumePlayback } from "../../services/startResumePlayback";

import { BsSpotify } from "react-icons/bs";
import { propTypesChildren } from "@material-tailwind/react/types/components/typography";
import { useDispatch } from "react-redux";
import { setItem, setPlaying } from "../../redux/slices/auth";

// import playMusic function api

type Props = {
  // key: string,
  item: any;
  itemIndex: string;
};
function Song({ item, itemIndex }: Props) {
  const dispatch = useDispatch();
  // const PlaySong = () => {

  //   startResumePlayback();
  //   item.play({
  //     uri: [`spotify:track:${itemIndex}`],
  //   });

  //   dispatch(setItem({ item: item }));
  //   dispatch(setPlaying({ playing: true }));
  // };

  return (
    <a
      aria-current="page"
      className="bg-footer rounded p-4 transition-all hover:bg-menubg group active mb-4"
      href="#"
    >
      <div className="relative ">
        <img
          className="w-auto h-auto inset-0 object-cover mb-4"
          src={item?.track.album.images[0].url || ""}
          alt="track cover"
          height="40px"
          width="40px"
        />
        <button
          // onClick={PlaySong}
          className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100"
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
        </button>
      </div>
      <span className="font-semibold text-white text-[16px] whitespace-nowrap">
        {item?.track.album.artists[0].name}
      </span>{" "}
      <br />
      <span className="mt-1 text-[14px] text-link">{item?.track.name}</span>
    </a>
  );
}

export default Song;
