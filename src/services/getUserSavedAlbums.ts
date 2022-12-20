import axios from "axios";
import { GET_USER_SAVED_ALBUMS_ENDPOINT } from "./Endpoint/endPoint";

export const getUserSavedAlbums = async () => {
    const { data } = await axios.get(
        GET_USER_SAVED_ALBUMS_ENDPOINT,
        {
            headers: {
                
            }
        }
    )
}