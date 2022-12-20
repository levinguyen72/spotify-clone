import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "../configs";
import { getToken } from "./authService";
export const getAccessToken = async () => {
    const _token =  getToken().token  
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