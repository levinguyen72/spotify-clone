import axios from "axios";

import { getToken } from "./authService";

import { PLAYLIST_ID, _fakeToken } from "../configs";

const DEL_ITEM_FROM_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`

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
