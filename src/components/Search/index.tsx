import * as React from "react";
import { searchForItem } from "../../services/searchForItem";
import "./index.css";

// import SearchIcon from "@mui/icons-material/Search";
interface ISearch {}

const Search: React.FunctionComponent<ISearch> = ({}) => {
  const [searchValue, setSearchValue] = React.useState<any>();
  const inputValue = React.useRef<any>();
  const setValue = () => {
    searchForItem(inputValue.current.value).then((res) => {
      console.log(res);
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
      <h1 className="">Top Result</h1>

      <div className="searchResult">
        <a
          aria-current="page"
          className="bg-footer rounded p-4 transition-all group active mb-4"
          href="#"
        >
          <div className="searchResultImg">
            <img
              className="w-auto h-auto inset-0 object-cover mb-4"
              src={
                searchValue &&
                searchValue?.tracks &&
                searchValue?.tracks?.items &&
                searchValue?.tracks?.items.length &&
                searchValue?.tracks?.items[0]?.album &&
                searchValue?.tracks?.items[0]?.album?.images[0]?.url
              }
              alt="track cover"
              height="40px"
              width="40px"
            />
            {}
            <button
              // onClick={PlaySongID}
              className="w-12 h-12 bg-primary right-2 bottom-2 transition-opacity flex items-center shadow-2xl justify-center opacity-0 opacity-100 "
            >
              <svg
                role="img"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                className="Svg-sc-1bi12j5-0 hDgDGI"
              >
                <path
                  d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
                  fill="black"
                ></path>
              </svg>
            </button>
          </div>
          <span className="font-semibold text-white text-[16px] whitespace-nowrap">
            {searchValue?.tracks.items[0].name}
          </span>{" "}
          <br />
          {/* <span className="mt-1 text-[14px] text-link">
            {searchValue?.tracks.items[0].name}
          </span> */}
        </a>
      </div>
    </section>
  );
};

export default Search;
