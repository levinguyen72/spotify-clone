
import axios from 'axios'
import React from 'react'
import { DEVICE_ID, _fakeToken } from '../configs'
import { getToken } from './authService';
import { SKIP_ENDPOINT } from './Endpoint/endPoint';

export const skipToPrevious = async() => {
    const _token = getToken().token
     const skipToPrevious = await axios.post(
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

