import React from "react";
import "./index.css";
type Props = { item: any, index: number };

const index = ({ item, index }: Props) => {
  return (
    <div className="createPlOption">
      <div className="createPlOption__number-child">{index }</div>
      <div className="createPlOption__title">
        <img
          className="createPlOption__img"
          src={item?.track?.album?.images[0].url}
          alt="img-pig"
        />
        <div className="createPlOption_box">
          <div className="createPlOption__name ">{item?.track?.name}</div>
          <div className="createPlOption__artists ">
            {item?.track?.artists.map((item: any) => item.name + ", ")}
          </div>
        </div>
      </div>
      <div className="createPlOption__album">
        {item?.track?.album?.name.slice(0, 40)}
      </div>
      <div className="createPlOption__date-add">
        {item.added_at.slice(0, 10)}
      </div>
      <div className="createPlOption__duration">
        {(item?.track?.duration_ms / (1000 * 60))
          .toFixed(2)
          .replace(".", ":")}
      </div>
    </div>
  );
};

export default index;
