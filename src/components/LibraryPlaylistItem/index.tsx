
import "./index.css";
type Props = {};

const LibraryPlaylistItem = (props: Props) => {
  return (
    <>
      <a
        aria-current="page"
        className="bg-footer rounded p-4 transition-all hover:bg-menubg group active mb-4 libraryPlaylistItem"
        href="#"
      >
        <div className="relative libraryPlaylistItem-img">
          <svg
            role="img"
            height="64"
            width="64"
            aria-hidden="true"
            data-testid="card-image-fallback"
            viewBox="0 0 24 24"
            data-encore-id="icon"
            className="Svg-sc-ytk21e-0 uPxdw"
          >
            <path d="M6 3h15v15.167a3.5 3.5 0 11-3.5-3.5H19V5H8v13.167a3.5 3.5 0 11-3.5-3.5H6V3zm0 13.667H4.5a1.5 1.5 0 101.5 1.5v-1.5zm13 0h-1.5a1.5 1.5 0 101.5 1.5v-1.5z"></path>
          </svg>
          {}
        </div>
        <div className="py-2 libraryPlaylistItem-title">
          <span className="font-semibold text-white text-[16px] whitespace-nowrap py-2">
            {/* {item?.track.album.artists[0].name} */}
            My Playlist #1
          </span>{" "}
          <br />
          <span className="mt-1 text-[14px] text-link">
            {/* {item?.track.name} */}
            test
          </span>
        </div>
      </a>
    </>
  );
};

export default LibraryPlaylistItem;
