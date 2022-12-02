import { getDeviceID } from './getIdDevices';

import axios from 'axios'
import { _fakeToken } from '../configs'
import { getToken } from './authService';
import { SKIP_ENDPOINT } from './Endpoint/endPoint';

export const skipToNext = async() => {
    const _token = getToken().token
    const DEVICE_ID = await getDeviceID()
     const skipToNext = await axios.post(
        SKIP_ENDPOINT,
        DEVICE_ID,
        {
          
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
       
        }

    )
    
    
    
}

