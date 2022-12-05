import axios from "axios";
import { _fakeToken } from "../configs";
import { GET_SEVERAL_SHOWS_ENDPOINT } from "./Endpoint/endPoint";

export const getSeveralShows = async () => {
    const { data } = await axios.get(
        GET_SEVERAL_SHOWS_ENDPOINT,
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                market: "ES",
                ids: "5CfCWKI5pZ28U0uOzXkDHe,5as3aKmN2k11yfDDDSrvaZ"
            }
        }
    )
    return data
}