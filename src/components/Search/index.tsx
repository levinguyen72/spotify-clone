import * as React from "react";
import { idText } from "typescript";
import { searchForItem } from "../../services/searchForItem";
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
        <svg
          role="img"
          height="24"
          width="24"
          className="Svg-ytk21e-0 eqtHWV mOLTJ2mxkzHJj6Y9_na_ searchIcon"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
        </svg>
        <input
          type="text"
          onChange={setValue}
          className="searchInput"
          placeholder="What do you want to listen to?"
          ref={inputValue}
        />
      </div>

      {/*  */}

      <div className="searchResult grid grid-cols-2 gap-4 mt-6">
        {/* top result */}
        <div className="my-4">
          <h1 className="text-2xl font-bold my-4">Top result</h1>
          <TopResultResearch item={searchValue} />
        </div>
        {/* song */}
        <div className="grid grid-rows-4 gap-4">
          <h1 className="text-2xl font-bold">Songs</h1>
          {searchValue?.tracks?.items.map((item: any) => (
            <>
              <SearchSong item={item} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
