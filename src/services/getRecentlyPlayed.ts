import axios  from 'axios';
import { getToken } from './authService';
import { _fakeToken } from '../configs';
import { RECENTLY_PLAYED_ENDPOINT } from './Endpoint/endPoint';

export const getRecentlyPlayed = async () => {
    
     const _token =  getToken().token
    
 
    const { data } = await axios.get(
        RECENTLY_PLAYED_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
               
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                limit: 50,
                after: 1484811043508
            }
        }
    )
  
    return data
}


