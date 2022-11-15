import axios from 'axios'
import { getToken } from './authService';

import { _fakeToken } from '../configs'

const ADD_ITEM_TO_PLAYLIST_ENDPOINT = `	https://api.spotify.com/v1/playlists/{playlist_id}/tracks`

export const addItemToPL = async () => {
    const _token = getToken().token

    const { data } = await axios.post(
        ADD_ITEM_TO_PLAYLIST_ENDPOINT, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                uris: "spotify:track:4iV5W9uYEdYUVa79Axb7Rh,spotify:track:1301WleyT98MSxVHPZCA6M",
                playlist_id: `3cEYpjA9oz9GiPac4AsH4n`,
            }
        }
    )
}