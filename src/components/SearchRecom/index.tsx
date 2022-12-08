import uuid from "react-uuid";
import SearchReComItem from "../SearchReComItem";

type Props = { reComSearch: any };

const SearchReCom = ({ reComSearch }: Props) => {
  return (
    <>
      <div className="searchResult searchReCom mt-6">
        {/* song */}

        {/* album */}
        <div className="mt-4">
          {/* recent search */}
          <h1 className="text-2xl font-bold">Recent Search</h1>
          <div className="grid grid-cols-5  rounded-lg gap-x-2 gap-y-4">
            {/* {reComSearch?.categories?.items?.map((item: any) => (
              <SearchReComItem key={uuid() + item.id.toString()} item={item} />
            ))} */}
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
