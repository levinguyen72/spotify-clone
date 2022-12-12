import React from "react";
import uuid from "react-uuid";
import { getPlaylist } from "../../services/getPlaylist";
import { getRecentlyPlayed } from "../../services/getRecentlyPlayed";
import SearchArtist from "../SearchArtist";
import SearchReComItem from "../SearchReComItem";
import Song from "../Song";

type Props = { reComSearch: any };

const SearchReCom = ({ reComSearch }: Props) => {
  const [songs, setSongs] = React.useState<any>({});
  React.useEffect(() => {
    getRecentlyPlayed().then((res) => setSongs(res));
  }, []);

  return (
    <>
      <div className="searchResult searchReCom mt-6">
        {/* album */}
        <div className="mt-4">
          {/* artist */}
          <div className="mt-10">
            <h1 className="song__title">Recently search</h1>
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

          {/* brower all */}
          <h1 className="text-2xl font-bold">Browser all</h1>
          <div className="grid grid-cols-5  rounded-lg gap-x-2 gap-y-4">
            {reComSearch?.categories?.items?.map((item: any) => (
              <SearchReComItem key={uuid() + item.id.toString()} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchReCom;
