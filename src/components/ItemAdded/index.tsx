import React from "react";
import "./index.css";
type Props = {item: any };

const index = ({item}: Props) => {
  return (
    <div className="createPlOption">
      <div className="createPlOption__number">#</div>
      <div className="createPlOption__title">
        <img className="createPlOption__img" src={item?.track?.album?.images[0].url} alt="img-pig"/>
              <div className="createPlOption__name">{item?.track?.name}</div>
              
      </div>
          <div className="createPlOption__album">{item?.track?.album?.name}</div>
          <div className="createPlOption__date-add">{item.added_at.slice(0, 10)}</div>
          <div className="createPlOption__duration">{((item?.track?.duration_ms / (1000 * 60)).toFixed(2)).replace(".", " : ")}</div>
    </div>
  );
};

export default index;
