import axios from "axios";
import { _fakeToken } from "../configs";
import { GET_USER_TOP_ITEMS } from "./Endpoint/endPoint";

export const getUserTopItems = async () => {
    const { data } = await axios.get(
        GET_USER_TOP_ITEMS, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                time_range: "medium_term",
                limit: 5,
                offset: 5
            }
        }
    )

    return data
}