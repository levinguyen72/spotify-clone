import axios  from 'axios';
import { getToken } from './authService';
import { _fakeToken } from '../configs';
import { SEARCH_ENDPOINT } from './Endpoint/endPoint';

export const createForItem = async (searchValue: string) => {
    
     const _token =  getToken().token  
    const { data } = await axios.get(
        SEARCH_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
      
            },
            params: {

                q: `${searchValue}`,
                type: "track,artist",
                market: "ES",
                limit: 10,
                offset: 0
                
            }
        }
    )
  
    return data
}


