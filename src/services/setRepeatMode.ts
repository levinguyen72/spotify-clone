import { getDeviceID } from './getIdDevices';

import axios from 'axios'
import React from 'react'
import { _fakeToken } from '../configs'
import { getToken } from './authService';

const REPEAT_ENDPOINT = `https://api.spotify.com/v1/me/player/repeat`



export const setRepeatMode = async () => {
    const DEVICE_ID =  getDeviceID()

console.log(DEVICE_ID);

    const _token = getToken().token
     const setRepeatMode = await axios.put(
        REPEAT_ENDPOINT,      
        DEVICE_ID,
        {
                
           
            headers: {
                // state: "context",
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer ${_fakeToken}`
            },
       
        }

    )
    
    
    
}
