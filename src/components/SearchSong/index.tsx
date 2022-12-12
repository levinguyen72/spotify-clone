import { useDispatch } from "react-redux";
import { setItem } from "../../redux/slices/auth";
import { startResumePlayback } from "../../services/startResumePlayback";
import "./index.css";
type Props = { item: any };

const SearchSong = ({ item }: Props) => {
  const dispatch = useDispatch();
  const PlaySongID = () => {
    startResumePlayback(item.album.uri);
    dispatch(setItem({ item }));
  };
  return (
    <div className="searchResultSong leftResultSong" onClick={PlaySongID}>
      <a
        aria-current="page"
        className="rounded p-4 text-gray-400 group active flex hover:bg-footer"
        href="#"
      >
        <div className="searchResultImg flex-2 px-2">
          <img
            className="w-10 h-10 inset-0 object-cover"
            src={
              item &&
              item?.album &&
              item?.album?.images &&
              item?.album?.images[1] &&
              item?.album?.images[1]?.url
            }
            alt="track cover"
            height="40px"
            width="40px"
          />
          {}
          <button className="w-12 h-12 bg-primary right-2 bottom-2 transition-opacity flex items-center shadow-2xl justify-center opacity-0 opacity-100 ">
           
          </button>
        </div>
        <div className="flex-5 ">
          <span className=" font-semibold text-white text-[16px] whitespace-nowrap flex">
            {item?.name}
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

export default SearchSong;
