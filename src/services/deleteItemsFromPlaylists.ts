import axios from "axios";

import { PLAYLIST_ID, _fakeToken } from "../configs";
import { DEL_ITEM_FROM_PLAYLIST_ENDPOINT } from "./Endpoint/endPoint";

export const DelItemPL = async (itemURI:string) => {
    
    await axios
        .delete(
            DEL_ITEM_FROM_PLAYLIST_ENDPOINT,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
            data: {
              
                "tracks":[{"uri":`${itemURI}`}]

            },
          
         
          
        }, 
            
    )
    
}
