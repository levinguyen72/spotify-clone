
import ButtonItem from '../buttonItem'

type Props = {
    item: any
    itemIndex: string
}

export const TopListenItem = ({item, itemIndex}: Props) => {
  return (
      <>
            <div className="topListenItem">
            <div className="topListenItem__img">
                  <img src={item?.images[2]?.url || " " } />
            </div>
            <div className="topListenItem__title">
              <h2>{item?.name.slice(0, 10)}</h2>
            </div>
            {/*  */}
            <div className="topListenItem__button">
              <button
                // onClick={PlaySongID}
                className="w-12 h-12  absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100"
              >
                <ButtonItem />
              </button>
            </div>
          </div>
      </>
  )
}