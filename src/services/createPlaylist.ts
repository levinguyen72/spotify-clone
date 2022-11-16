import { getUserID } from './getUserId';
import axios from "axios";
import { getToken } from './authService';
import { USER_ID, _fakeToken } from "../configs";



const CREATE_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/users/${USER_ID}/playlists`

export const createPlaylist = async () => {
    console.log("=============================Create Playlist:========" + USER_ID)
    const _token = getToken().token

    await axios.post(
        CREATE_PLAYLIST_ENDPOINT,
        {
        headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
        },
        body: {
                 "name": "XXXXXXXXXXX",
                 "description": "BBBBBBBBBBBB",
                 "public": true
            }
        }
    )
    
    
}