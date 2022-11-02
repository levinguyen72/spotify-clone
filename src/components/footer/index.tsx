import * as React from "react";
import "./index.css";
import {
  MdReplay10,
  MdForward10,
  MdShuffle,
  MdRepeat,
  MdPlaylistAddCheck,
  MdVolumeDown,
} from "react-icons/md";
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { Progress } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";

interface IFooter {
  children: any;
}
console.log("AAAAAAAAAAAAAAAAAAAA");

const Footer: React.FunctionComponent<IFooter> = ({ children }) => {
  const dispatch = useDispatch();
  // const handlePlayPause = () => {
  //   if (playing) {
  //     children.pause();
  //     dispatch(setPlaying(false));

  //   } else {
  //     children.play();
  //     dispatch(setPlaying(true));
  //   }
  // };

  return (
    <div className="footer">
      <div className="footer__left">
        {/* <img
          className="footer__left-logo"
          src={item?.track.album.images[0].url}
          alt={item?.name}
        /> */}
        {/* {item ? (
          
        ): (
          <div className="footer__songInfo">
          <h4>No song is playing</h4>
          <p>...</p>
        </div>
        )} */}
      </div>

      <div className="footer__center ">
        {/*button control  */}
        <div className="footer__button-control">
          <div className="footer__button">
            {" "}
            <MdShuffle />{" "}
          </div>
          <div className="footer__button">
            <BsFillSkipStartFill />
          </div>
          <div
            className="footer__button button-play"
            onClick={() => alert(1234)}
          >
            <AiFillPlayCircle />
          </div>
          <div className="footer__button">
            <BsFillSkipEndFill />
          </div>
          <div className="footer__button">
            <MdRepeat />
          </div>
        </div>
      </div>

      <div className="footer__right">
        <div className="footer__button">
          <MdPlaylistAddCheck />
        </div>
        <div className="footer__button">
          <MdVolumeDown />
        </div>

        <Progress value={60} color="red" className="progress-bar" />
      </div>
    </div>
  );
};
export default Footer;
