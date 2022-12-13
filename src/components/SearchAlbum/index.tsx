import "./index.css";
type Props = { item: any };

const SearchAlbum = ({ item }: Props) => {
  return (
    <div className="searchAlbumItem">
      <a
        aria-current="page"
        className="rounded p-4 text-gray-400 group active block hover:bg-footer"
        href="#"
      >
        {/* img */}
        <div className=" block px-2">
          <img
            className="w-96 h-96 inset-0 object-cover"
            src={
              item &&
              item?.album &&
              item?.album?.images[0] &&
              item?.album?.images[0]?.url
            }
            alt="track cover"
          />
          {}
          
        </div>
        {/* artist name */}
        <div className="searchAlbumName">
          <span className=" font-semibold text-white text-[16px] whitespace-nowrap flex">
            {item?.album.name}
          </span>{" "}
          <span className=" text-[14px] whitespace-nowrap text-gray-400 flex">
            {item?.artists[0].name}
          </span>
        </div>
        <br />
      </a>
    </div>
  );
};

export default SearchAlbum;
