import axios from "axios";
// import { _fakeToken } from "../configs";
import { GET_RECOMMENDATIONS_ENDPOINT } from "./Endpoint/endPoint";
import { getTokenHM } from "./getTokenHM";


export const getRecommendations = async () => {
    const _fakeToken = await getTokenHM()
    const { data } = await axios.get(
        GET_RECOMMENDATIONS_ENDPOINT,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                limit: 5,
                market: "VN",
                seed_artists: "4NHQUGzhtTLFvgF5SZesLK",
                seed_genres: "country%2Cpop",
                seed_tracks: "0c6xIDDpzE81m2q797ordA"
            }
        }
    )
    return data
}