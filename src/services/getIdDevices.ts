import axios  from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';

const ID_DEVICES_ENDPOINT = `https://api.spotify.com/v1/me/player/devices`

export const getDeviceID = async () => {
    
     const _token =  getToken().token
    
    const { data } = await axios.get(
        ID_DEVICES_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
               
            },
        }
    )
    return data.devices[0].id

}



