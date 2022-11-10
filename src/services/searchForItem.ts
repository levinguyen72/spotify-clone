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
                //Authorization: `Bearer BQCJwbmC_nXoc3BnBNKjQS-qkby22E3DFkTKNy1WueWMnFuf4lmf0pobxA-NGE5SMVuphYQfmCMUZXc49sBdaoJrrOB-FKdNaF0zrSTojRSZygbLJH3ci4H-O_fQ9Wlck4r4DUWWAL2-R79ikuByQklp-Wx6w_aN9CB3tNrxl5bZOTOKywQJmUS_Sal7vhdu_EWJVCwgpa2mRPhYhbPZ2g`

            },
            params: {
                // q: `${searchValue}`,
                q: `${searchValue}`,
                type: "track,artist",
                market: "ES",
                limit: 1,
                offset: 0
                
            }
        }
    )
  
    return data
}


