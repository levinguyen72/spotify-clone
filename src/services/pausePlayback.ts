import { getDeviceID } from './getIdDevices';
import axios  from 'axios';
import { getToken } from './authService';
import {  _fakeToken } from '../configs';
import { PAUSE_PLAYBACK_ENDPOINT } from './Endpoint/endPoint';

export const pausePlayback = async () => {
    const DEVICE_ID = await getDeviceID()
    
    const _token = getToken().token
    
        const pauseMusic = await axios.put(
            PAUSE_PLAYBACK_ENDPOINT,
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
