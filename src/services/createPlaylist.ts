
import axios from "axios";
import { getToken } from './authService';
import {  _fakeToken } from "../configs";
import { CREATE_PLAYLIST_ENDPOINT } from './Endpoint/endPoint';

export const createPlaylist = async (countPl?: any) => {
 
    const _token = getToken().token

    const { data } = await axios
        .post(
            CREATE_PLAYLIST_ENDPOINT,
            {
                "name": `9h07:::23/11/2022 #${countPl}`,
                "description": "test",
                "public": false
           },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${_fakeToken}`
                }
            }
    )

    return data.id
    
    
}