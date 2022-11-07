
import axios from 'axios'
import React from 'react'
import { _fakeToken } from '../configs'
import { getToken } from './authService';

const SKIP_ENDPOINT = `https://api.spotify.com/v1/me/player/previous`
const DEVICE_ID =  `0d1841b0976bae2a3a310dd74c0f3df354899bc8`

export const skipToPrevious = async() => {
    const _token = getToken().token
     const skipToPrevious = await axios.post(
        SKIP_ENDPOINT,
        DEVICE_ID,
        {
                
           
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer ${_fakeToken}`
            },
       
        }

    )
    
    
    
}

