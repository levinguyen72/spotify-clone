import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "../configs";
export const getAccessToken = async () => {
    const { data } = await axios.get(
        'https://accounts.spotify.com/api/token',
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: 'Basic' + (CLIENT_ID + ':' + CLIENT_SECRET).toString()
            }
        }
    )
    return data
}