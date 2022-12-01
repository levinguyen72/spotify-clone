import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { setDeviceId } from "../../redux/slices/auth";
import { getDeviceID } from "../../services/getIdDevices";
import { getRecentlyPlayed } from "../../services/getRecentlyPlayed";

import Song from "../Song";

type songs = { items?: any };


const RecentlyPlayed = () => {
  // use state to set song
  const [songs, setSongs] = useState<any>({});
  const dispatch = useDispatch()
  // get api is promise => use useEffect
  useEffect(() => {
    const getSongs = async () => {
      dispatch(setDeviceId({getDeviceID}))
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
        <Song key={"RecentlyPlayed "+  uuid() + item?.track?.id.toString()} item={item} itemIndex={index} />
       
      ))}      
       
    </div> 
  );
};

export default RecentlyPlayed;
