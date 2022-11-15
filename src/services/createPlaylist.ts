import axios from "axios";
import { getUserID } from './getUserId';
import { getToken } from './authService';
import { _fakeToken } from "../configs";
const CREATE_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/users/{user_id}/playlists`
const USER_ID = getUserID()

export const createPlaylist = async () => {
    const _token = getToken().token

    const { data } = await axios.post(
        CREATE_PLAYLIST_ENDPOINT,
        
        {
        headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
        },
            params: {
                user_id: USER_ID,
            "name": "New Playlist",
                    "description": "New playlist description",
                    "public": false
                    
                
            }
        }
    )
    
    
}