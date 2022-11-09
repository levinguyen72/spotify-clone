import axios  from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';

const SEARCH_ENDPOINT = `https://api.spotify.com/v1/search`


export const searchForItem = async () => {
    
     const _token =  getToken().token
    
 
    const { data } = await axios.get(
        SEARCH_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                q: "remaster%20track:Doxy%20artist:Miles%20Davis",
                type: "track, artist",
                limit: 10,
                offset: 5
                
            }
        }
    )
  
    return data
}


