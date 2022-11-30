import axios from 'axios'
import { getDeviceID } from './getIdDevices';
import { _fakeToken } from '../configs'
import { getToken } from './authService';
import { REPEAT_ENDPOINT } from './Endpoint/endPoint';

export const setRepeatMode = async () => {
    const DEVICE_ID =  getDeviceID()
    const _token = getToken().token
     const setRepeatMode = await axios.put(
        REPEAT_ENDPOINT,      
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

