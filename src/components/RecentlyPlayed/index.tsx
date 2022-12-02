import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { getToken } from "../../services/authService";

import { getNewReleases } from "../../services/getNewReleases";
import { getRecentlyPlayed } from "../../services/getRecentlyPlayed";
import { getRecommendations } from "../../services/getRecommendations";
import { getTokenHM } from "../../services/getTokenHM";
import NewRLSong from "../NewRLSong";
import ReCmtSong from "../ReCmtSong";

import Song from "../Song";
import "./index.css";

type songs = { items?: any };

const RecentlyPlayed = () => {
  const [songs, setSongs] = useState<any>({});
  const [newRL, setNewRL] = useState<any>({});
  const [reCmt, setReCmt] = useState<any>({})
  // get api is promise => use useEffect
  useEffect(() => {
    const getSongs = async () => {
      const recentlyPlayed = await getRecentlyPlayed();
      const newReleases = await getNewReleases();
      const reCommendations = await getRecommendations()

      setReCmt(reCommendations)
      setNewRL(newReleases);
      setSongs(recentlyPlayed);
     
    
    };
    getSongs();
  }, []);

  // Songs
  if (!songs) return null;

  return (
    <>
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
    </>
  );
};

export default RecentlyPlayed;
