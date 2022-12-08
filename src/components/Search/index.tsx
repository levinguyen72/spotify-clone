import * as React from "react";
import uuid from "react-uuid";
import { getSeveralBrowseCategories } from "../../services/getSeveralBrowseCategories";
import { searchForItem } from "../../services/searchForItem";
import SearchAlbum from "../SearchAlbum";
import SearchArtist from "../SearchArtist";
import { SearchOutPut } from "../SearchOutPut";
import SearchRecom from "../SearchRecom";
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
  // recommend
  const [reComSearch, setReComSearch] = React.useState<any>({});
  React.useEffect(() => {
    getSeveralBrowseCategories().then((res) => setReComSearch(res));
  }, []);

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
      {searchValue ? (
        <SearchOutPut searchValue={searchValue} />
      ) : (
        <SearchRecom reComSearch={reComSearch} />
      )}

      {/*SEARCH OUTPUT  */}

      {/* SEARCH RECOMMEND */}
    </section>
  );
};

export default Search;
