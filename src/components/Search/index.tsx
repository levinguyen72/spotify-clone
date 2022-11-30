import * as React from "react";
import uuid from "react-uuid";

import { searchForItem } from "../../services/searchForItem";
import SearchAlbum from "../SearchAlbum";
import SearchArtist from "../SearchArtist";
import SearchPlaylist from "../SearchPlaylist";
import SearchSong from "../SearchSong";
import TopResultResearch from "../TopResultSearch";
import "./index.css";

interface ISearch {}

const Search: React.FunctionComponent<ISearch> = ({}) => {
  const [searchValue, setSearchValue] = React.useState<any>();
  const inputValue = React.useRef<any>();
  const setValue = () => {
    searchForItem(inputValue.current.value).then((res) => {
      setSearchValue(res);
    });
  };


  return (
    <section className="searchContainer">
      {/* input */}
      <div className="searchInputContainer">
        
        <input
          type="text"
          onChange={setValue}
          className="searchInput"
          placeholder="What do you want to listen to?"
          ref={inputValue}
        />
      </div>

      {/*  */}
      <div className="searchResult mt-6">
        {/* song */}
        <div className=" grid grid-cols-2 gap-4">
          {/* top result */}
          <div className="my-4">
            <h1 className="text-2xl font-bold my-4">Top result</h1>
            <TopResultResearch key={uuid()} item={searchValue} />
          </div>
          {/* song */}
          <div className="grid grid-rows-4 gap-4">
            <h1 className="text-2xl font-bold">Songs</h1>
            {searchValue?.tracks?.items.map((item: any) => (
              <>
                <SearchSong
                  key={uuid() + item.id.toString()}
                  item={item}
                />
              </>
            ))}
          </div>
        </div>

        {/* artist */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Artists</h1>
          <div className="grid grid-cols-4 gap-4 searchArtist">
            {searchValue?.artists?.items.map((item: any) => (
              <SearchArtist
                key={uuid() + item.id.toString()}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* album */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Albums</h1>
          <div className="grid grid-cols-4 gap-4 searchArtist">
            {searchValue?.tracks?.items.map((item: any) => (
              <SearchAlbum
                key={uuid() + item.id.toString()}
                item={item}
              />
            ))}
          </div>
        </div>
        {/* artist */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Artists</h1>
          <div className="grid grid-cols-4 gap-4 searchArtist">
            {searchValue?.artists?.items.map((item: any) => (
              <SearchArtist
                key={uuid() + item.id.toString()}
                item={item}
              />
            ))}
          </div>
        </div>
        {/* album */}
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Albums</h1>
          <div className="grid grid-cols-4 gap-4 searchArtist">
            {searchValue?.tracks?.items.map((item: any) => (
              <SearchAlbum
                key={uuid() + item.id.toString()}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
