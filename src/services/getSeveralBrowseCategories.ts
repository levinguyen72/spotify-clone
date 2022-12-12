import axios from "axios";
import { _fakeToken } from "../configs";
import { GET_SEVERAL_BROWSE_CATEGORIES_ENDPOINT } from "./Endpoint/endPoint";

export const getSeveralBrowseCategories = async () => {
    const { data } = await axios.get(
        GET_SEVERAL_BROWSE_CATEGORIES_ENDPOINT, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${_fakeToken}`
            },
            params: {
                country: "SE",
                locale: "sv_SE",
                limit: 50,
                offset: 5
            }
        }
    )   
    return data
}