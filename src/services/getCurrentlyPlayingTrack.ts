import axios from "axios";
import { _fakeToken } from "../configs";
import { GET_CURRENTLY_PLAYING_TRACK } from "./Endpoint/endPoint";

export const getCurrentlyPlayingTrack = async () => {
    const { data } = await axios.get(
        GET_CURRENTLY_PLAYING_TRACK,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                market: "ES"
            }

        }
    )
    return data
}