import { getUserID } from './getUserId';
import axios from "axios";
import { getToken } from './authService';
import { USER_ID, _fakeToken } from "../configs";
import { useState } from 'react';



const CREATE_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/users/${USER_ID}/playlists`

export const createPlaylist = async (countPl: any) => {
 
    const _token = getToken().token

    const { data } = await axios
        .post(
            CREATE_PLAYLIST_ENDPOINT,
            {
                "name": `Louis NG #${countPl}`,
                "description": "",
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
    // return playlist id
    console.log(data.id)
    return data
    
    
}