import React, { useEffect, useState } from "react";
import { getRecentlyPlayed } from "../../services/getRecentlyPlayed";
import Song from "../Song";

type songs = { items?: any };
// const recentlyPlayed: Promise<any>

const RecentlyPlayed = () => {
  // use state to set song
  const [songs, setSongs] = useState<any>({});

  // get api is promise => use useEffect
  useEffect(() => {
    const getSongs = async () => {
      const recentlyPlayed = await getRecentlyPlayed();
      setSongs(recentlyPlayed);
    };
    getSongs();
  }, []);

  // Songs
  if (!songs) return null;

  return (
    <div className="grid grid-cols-5 gap-x-6 mt-10">
      {/* render playlist here */}

      {songs.items?.map((item: any, index: string) => (
        <Song key={item.track?.id} item={item} itemIndex={index} />
      ))}

      {}
    </div>
  );
};

export default RecentlyPlayed;
