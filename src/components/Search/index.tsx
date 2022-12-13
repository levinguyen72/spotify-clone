import * as React from "react";
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
    }, 6000);
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
        <SearchOutPut searchValue={searchValue} />
      ) : (
        /* SEARCH RECOMMEND */
        <SearchRecom reComSearch={reComSearch} />
      )}
    </section>
  );
};

export default Search;
