import axios  from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';

const SEARCH_ENDPOINT = `https://api.spotify.com/v1/search`


//export const searchForItem = async (searchValue: any) => {
export const searchForItem = async (searchValue: string) => {
    
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

                q: `${searchValue}`,
                type: "track,artist",
                market: "ES",
                limit: 4,
                offset: 0
                
            }
        }
    )
  
    return data
}


