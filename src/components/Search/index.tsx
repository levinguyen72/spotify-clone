import * as React from "react";
import "./index.css";

// import SearchIcon from "@mui/icons-material/Search";
interface ISearch {}

const Search: React.FunctionComponent<ISearch> = ({}) => {
  const [searchValue, setSearchValue] = React.useState<any>();
  const inputValue = React.useRef<any>();
  console.log(searchValue);
  return (
    <section className="searchContainer">
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
          onChange={() => setSearchValue(inputValue.current.value)}
          className="searchInput"
          placeholder="What do you want to listen to?"
          ref={inputValue}
        />
      </div>

      <div className="searchResult">
        <h1>{searchValue}</h1>
      </div>
    </section>
  );
};

export default Search;
