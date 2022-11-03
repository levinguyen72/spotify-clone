import axios  from 'axios';

import { getToken } from './authService';

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`


export const getRecentlyPlayed = async () => {
    
     const _token =  getToken().token
    // console.log("XXXXXXXXXXXXXXX_token========"+_token)
 
    const { data } = await axios.get(
        RECENTLY_PLAYED_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer BQCBImlmeZ2xFoxy8toonWZrx8gTKlC8aAzqpUtT_BjqqeTwm8zmWK1itRRIsFyVe8bf74cEcj0gsOZwMja-QNLjl5Bw6iDPu6M8mSdvkomxaaEfP-Kk7FbmqiNb6L23TChqlCVfYBrztYdlTYnKLk0cwf5tiCUnt7tukI5aTmc4tdPJu0RQwMGkPYlb_N-yKYFnGxIB`
            },
            params: {
                limit: 50,
                // additional_types: "track",
                after: 1484811043508
            }
        }
    )
  
    return data
}


