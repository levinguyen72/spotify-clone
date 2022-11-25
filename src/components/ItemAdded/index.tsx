import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import "./index.css";
import { DelItemPL } from "../../services/deleteItemsFromPlaylists";
import { getPlaylist } from "../../services/getPlaylist";

type Props = { item: any; index: number };

const ItemAdded = ({ item, index }: Props) => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const handleDeleteItem = (itemURI:any) => {
    alert(1234)
    DelItemPL(itemURI)
    getPlaylist()
  }
  // console.log(12345657)
  // console.log(item.track.uri)
  return (
    <div className="createPlOption">
      <div className="createPlOption__number-child">{index}</div>
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

      <div className="createPlOption__duration" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {isHovering ? (
          // <IconButton aria-label="delete" className="createPlOption__duration-delBtn" size="small">
          //   <DeleteIcon />
          // </IconButton>
          <div className="" onClick={() => handleDeleteItem(item.track.uri)}>

            {/* <h1>Delete</h1> */}
          <DeleteIcon />
          </div>
          
        ) : (
          (item?.track?.duration_ms / (1000 * 60)).toFixed(2).replace(".", ":")
        )}
      </div>
    </div>
  );
};

export default ItemAdded;
