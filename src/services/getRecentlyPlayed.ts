import axios  from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`


export const getRecentlyPlayed = async () => {
    
     const _token =  getToken().token
    
 
    const { data } = await axios.get(
        RECENTLY_PLAYED_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                limit: 50,
                // additional_types: "track",
                after: 1484811043508
            }
        }
    )
  
    return data
}


