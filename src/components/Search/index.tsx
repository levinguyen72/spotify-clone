import * as React from "react";
import uuid from "react-uuid";
import { getSeveralBrowseCategories } from "../../services/getSeveralBrowseCategories";
import { searchForItem } from "../../services/searchForItem";
import { SearchOutPut } from "../SearchOutPut";
import SearchRecom from "../SearchRecom";
import "./index.css";

interface ISearch {}

const Search: React.FunctionComponent<ISearch> = ({}) => {
  const [searchValue, setSearchValue] = React.useState<any>();
  const inputValue = React.useRef<any>();
  const setValue = () => {
    setTimeout(() => {
      searchForItem(inputValue.current.value).then((res) => {
        setSearchValue(res);
      });   
    }, 2200);
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
        /*SEARCH OUTPUT  */
        <SearchOutPut key={uuid() } searchValue={searchValue} />
      ) : (
        /* SEARCH RECOMMEND */
          <SearchRecom key={uuid() } reComSearch={reComSearch} />
      )}
    </section>
  );
};

export default Search;
