import axios from "axios";
import { _fakeToken } from "../configs";
import { GET_PLAYLIST_COVER_IMAGE_ENDPOINT } from "./Endpoint/endPoint";

export const getPlaylistCoverImage = async () => {
    const { data } = await axios.get(
        GET_PLAYLIST_COVER_IMAGE_ENDPOINT,
      
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            }, 
        }
    )

    return data
   
}

