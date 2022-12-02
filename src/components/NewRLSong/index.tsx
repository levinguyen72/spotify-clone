
import { release } from "os";
import { useDispatch } from "react-redux";
import { setItem } from "../../redux/slices/auth";
import { startResumePlayback } from "../../services/startResumePlayback";
import ButtonItem from "../buttonItem";

// import playMusic function api

type Props = {
  item: any;
  itemIndex: string;
};

function NewRLSong({ item, itemIndex }: Props) {
    console.log("CCCCCCCCCCCCCCCCCCCCC")
    console.log(item)
  const dispatch = useDispatch();
    const PlaySongID = () => {
    
    startResumePlayback(item?.uri);
    dispatch(setItem({ item }));
  };

  return (
    <a
      aria-current="page"
      className="bg-footer rounded p-4 transition-all hover:bg-menubg group active mb-4"
      href="#"
    >
      <div className="relative">
        <img
          className="w-auto h-auto inset-0 object-cover mb-4"
          src={item?.images[0]?.url || ""}
          alt="track cover"
          height="40px"
          width="40px"
        />
        {}
        <button
          onClick={PlaySongID}
          className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100"
        >
          <ButtonItem />
        </button>
      </div>
      <span className="font-semibold text-white text-[16px] whitespace-nowrap">
        {item?.name}
      </span>{" "}
      <br />
      <span className="mt-1 text-[14px] text-link">{item?.artists?.map((e:any) => e.name)}</span>
    </a>
  );
}

export default NewRLSong;
