import axios from 'axios'
import { getToken } from './authService';

import { _fakeToken } from '../configs'
const PLAYLIST_ID = `0HGMBuaYn95EQDORCHsVEn`
const URIS = `uris:spotify:track:0HGMBuaYn95EQDORCHsVEn,spotify:track:1301WleyT98MSxVHPZCA6M`
const ADD_ITEM_TO_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`

export const addItemToPL = async () => {
    const _token = getToken().token

    await axios
        .post(
            ADD_ITEM_TO_PLAYLIST_ENDPOINT,
            URIS,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${_fakeToken}`
                },

            }
        
    )
}