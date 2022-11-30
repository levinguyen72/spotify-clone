import axios from 'axios';

import { getToken } from './authService';
import {  _fakeToken } from '../configs';
import { GET_PLAYLIST_ENDPOINT } from './Endpoint/endPoint';

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
