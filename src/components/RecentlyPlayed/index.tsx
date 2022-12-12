import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getNewReleases } from "../../services/getNewReleases";
import { getRecentlyPlayed } from "../../services/getRecentlyPlayed";
import { getRecommendations } from "../../services/getRecommendations";
import { getSeArtists } from "../../services/getSeArtists";
import { getSeveralShows } from "../../services/getSeveralShows";
import { getUserTopItems } from "../../services/getUserTopItem";
import NewRLSong from "../NewRLSong";
import ReCmtSong from "../ReCmtSong";
import SeShow from "../SeShow";
import Song from "../Song";
import { TopListenItem } from "../TopListenItem";
import TopSong from "../TopSong";
import "./index.css";

type songs = { items?: any };

const RecentlyPlayed = () => {
  const [urTopSong, setUrTopSong] = useState<any>({});
  const [songs, setSongs] = useState<any>({});
  const [newRL, setNewRL] = useState<any>({});
  const [reCmt, setReCmt] = useState<any>({});
  const [seShows, setSeShows] = useState<any>({});
  const [seArtists, setSeArtists] = useState<any>({});
  // get api is promise => use useEffect
  useEffect(() => {
    const getSongs = async () => {
      const topSong = await getUserTopItems();
      const recentlyPlayed = await getRecentlyPlayed();
      const newReleases = await getNewReleases();
      const reCommendations = await getRecommendations();
      const severalShow = await getSeveralShows();
      const severalArtist = await getSeArtists();
      setUrTopSong(topSong);
      setReCmt(reCommendations);
      setNewRL(newReleases);
      setSeShows(severalShow);
      setSongs(recentlyPlayed);
      setSeArtists(severalArtist);
    };
    getSongs();
  }, []);

  // Songs
  if (!songs) return null;

  return (
    <>
      {/* Good morning */}
      <div className="mt-10">
        <h1 className="song__title">GOOD MORNING</h1>
        <div className="grid grid-cols-3 gap-x-6 gap-y-6 mt-10">
          {seArtists?.artists?.map((item: any, index: string) => (
            <TopListenItem
              key={uuid()}
              item={item}
              itemIndex={index}
            />
          ))}
       
        </div>
      </div>

      {/* Your top mixed */}
      <div className="mt-10">
        <h1 className="song__title">Your top mixed</h1>
        <div className="grid grid-cols-5 gap-x-6 mt-10">
          {/* render playlist here */}

          {urTopSong.items?.map((item: any, index: string) => (
            <TopSong
              key={"Your top mixed" + uuid() + item?.track?.id.toString()}
              item={item}
              itemIndex={index}
            />
          ))}
        </div>
      </div>

      {/* recently played */}
      <div className="mt-10">
        <h1 className="song__title">Recently played</h1>
        <div className="grid grid-cols-5 gap-x-6 mt-10">
          {/* render playlist here */}

          {songs.items?.map((item: any, index: string) => (
            <Song
              key={"RecentlyPlayed " + uuid() + item?.track?.id.toString()}
              item={item}
              itemIndex={index}
            />
          ))}
        </div>
      </div>

      {/* // new release */}
      <div className="mt-10">
        <h1 className="song__title">New Releases</h1>
        <div className="grid grid-cols-5 gap-x-6 mt-10">
          {/* render playlist here */}

          {newRL?.albums?.items?.map((item: any, index: string) => (
            <NewRLSong
              key={"New Releases " + uuid() + item?.track?.id.toString()}
              item={item}
              itemIndex={index}
            />
          ))}
        </div>
      </div>

      {/* recommendation */}
      <div className="mt-10">
        <h1 className="song__title">Recommendation</h1>
        <div className="grid grid-cols-5 gap-x-6 mt-10">
          {/* render playlist here */}

          {reCmt?.tracks?.map((item: any, index: string) => (
            <ReCmtSong
              key={"RecentlyPlayed " + uuid() + item?.track?.id.toString()}
              item={item}
              itemIndex={index}
            />
          ))}
        </div>
      </div>

      {/* several show */}
      <div className="mt-10">
        <h1 className="song__title">Several Show</h1>
        <div className="grid grid-cols-5 gap-x-6 mt-10">
          {/* render playlist here */}

          {seShows?.shows?.map((item: any, index: string) => (
            <SeShow
              key={"RecentlyPlayed " + uuid() + item?.track?.id.toString()}
              item={item}
              itemIndex={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentlyPlayed;
