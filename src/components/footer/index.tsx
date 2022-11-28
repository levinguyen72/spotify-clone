import * as React from "react";
import "./index.css";
import {
  MdShuffle,
  MdRepeat,
  MdPlaylistAddCheck,
  MdVolumeDown,
} from "react-icons/md";
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { Progress } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { setPlaying } from "../../redux/slices/auth";
import { RootState } from "../../redux/store";
import { pausePlayback } from "../../services/pausePlayback";
import { skipToNext } from "../../services/skipToNext";
import { startResumePlayback } from "../../services/startResumePlayback";
import { useState } from "react";
import { skipToPrevious } from "../../services/skipToPrevious";
import { setRepeatMode } from "../../services/setRepeatMode";

import SpotifyApi from "spotify-web-api-js";
import { startTrack } from "../../services/startTrack";
interface IFooter {}

const Footer: React.FunctionComponent<IFooter> = ({}) => {
  const spotify = new SpotifyApi();
  const itemIsPlaying = useSelector((state: RootState) => state.auth.item);

  const dispatch = useDispatch();

  const setPause = () => {
    pausePlayback();
    setIsPlaying(false);
  };
  const setSkipNext = () => {
    skipToNext();
  };
  const setSkipPrevious = () => {
    skipToPrevious();
  };
  const setPlay = () => {

    startResumePlayback(itemIsPlaying.track.album.uri);
    setIsPlaying(true);
  };
  const setRepeat = () => {
    setRepeatMode();
  };
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="footer">
      <div className="footer__left">
        {itemIsPlaying ? (
          <div className="flex">
            <img
              className="footer__left-logo "
              src={itemIsPlaying?.track.album.images[2].url}
              alt={itemIsPlaying?.track.name}
            />
            <div className="footer__songInfo">
              <h5 className="footer_songArtist">
                <a>{itemIsPlaying?.track.album.artists[0].name}</a>
              </h5>
              <h5 className="footer_songName">
                <a>{itemIsPlaying?.track.name}</a>
              </h5>
            </div>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
          </div>
        )}
      </div>

      <div className="footer__center ">
        <div className="footer__button-control">
          <div className="footer__button">
            {" "}
            <MdShuffle />{" "}
          </div>
          <div className="footer__button" onClick={setSkipPrevious}>
            <BsFillSkipStartFill />
          </div>
          {isPlaying ? (
            <div className="footer__button button-play" onClick={setPause}>
              <AiFillPauseCircle />
            </div>
          ) : (
            <div className="footer__button button-play" onClick={setPlay}>
              <AiFillPlayCircle />
            </div>
          )}

          <div className="footer__button" onClick={setSkipNext}>
            <BsFillSkipEndFill />
          </div>
          <div className="footer__button" onClick={setRepeat}>
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
