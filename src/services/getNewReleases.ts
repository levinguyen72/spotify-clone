import axios from "axios";
import { _fakeToken } from "../configs";
import { GET_NEW_RELEASES_ENDPOINT } from "./Endpoint/endPoint";

export const getNewReleases = async () => {
    const { data } = await axios.get(
        GET_NEW_RELEASES_ENDPOINT, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`

            },
            params: {
                country: "SE",
                limit: 10,
                offset: 5
            }
        }
    )
    return data
}