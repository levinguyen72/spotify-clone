
import ButtonItem from '../buttonItem'
import "./index.css"
type Props = {
    item: any
    itemIndex: string
}
const PlaySongID = () => {
  
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
                onClick={PlaySongID}
                className="hoverBtnGoodMoring"
              >
                <ButtonItem />
              </button>
            </div>
          </div>
      </>
  )
}