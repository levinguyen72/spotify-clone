import Icon from "@mui/material/Icon";
import { iteratorSymbol } from "immer/dist/internal";
import React from "react";
import { NavLink } from "react-router-dom";
import { isTemplateExpression } from "typescript";
import "./index.css";

type Props = {
  item: {};
  itemIndex: string;
};

function Song({}: Props) {
  return (
    <a
      aria-current="page"
      className="bg-footer rounded p-4 transition-all hover:bg-menubg group active mb-4"
      href="/"
    >
      <div className="relative ">
        <img
          className="w-auto h-auto inset-0 object-cover mb-4"
          src="https://i.scdn.co/image/ab67616d00001e02e9c9fc7a8155861f8db6b28f"
        />
        <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
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
        MIX CHILL
        {/* {item.track?.album.artist.name} */}
        {/* {data */}
      </span>{" "}
      <br />
      <span className="mt-1 text-[14px] text-link">Da lab</span>
    </a>
  );
}

export default Song;
