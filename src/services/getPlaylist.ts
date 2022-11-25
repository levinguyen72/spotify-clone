import axios from 'axios';

import { getToken } from './authService';
import { PLAYLIST_ID, _fakeToken } from '../configs';

const GET_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`

export const getPlaylist = async () => {

    const _token = getToken().token

    const { data } = await axios.get(
        GET_PLAYLIST_ENDPOINT, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            }, 
            params: {
                market: "ES",
              
               
            }
        }
    )
    
    
    return data
}
