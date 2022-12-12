import axios from "axios";
import { _fakeToken } from "../configs";
import { GET_USER_PLAYLIST_ENDPOINT } from "./Endpoint/endPoint";

export const getUserPlaylists = async () => {
    const { data } = await axios.get(
        GET_USER_PLAYLIST_ENDPOINT,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                limit: 10,
                offset: 5,

            }
        }
    )
    return data
}