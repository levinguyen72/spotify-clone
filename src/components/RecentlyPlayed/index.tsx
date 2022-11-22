import React, { useEffect, useState } from "react";
import { getRecentlyPlayed } from "../../services/getRecentlyPlayed";
import Footer from "../footer";
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
  console.log(22/11/22)
  console.log(Date().toLocaleString())
  return (
    <div className="grid grid-cols-5 gap-x-6 mt-10">
      {/* render playlist here */}
      {songs.items?.map((item: any, index: string) => (
        <Song key={"RecentlyPlayed "+ item?.track?.id.toString()} item={item} itemIndex={index} />
       
      ))}      
       
    </div> 
  );
};

export default RecentlyPlayed;
