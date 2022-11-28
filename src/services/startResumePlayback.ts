import { getDeviceID } from './getIdDevices';
import axios  from 'axios';

import { getToken } from './authService';
import { DEVICE_ID, DEVICE_ID3, _fakeToken } from '../configs';

const START_RESUME_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`


export const startResumePlayback = async (itemUri: string) => {
  
        await axios
            .put(
            START_RESUME_PLAYBACK_ENDPOINT,
            {
       
                    "context_uri":  `${itemUri}`,
                    "offset": { "position": 1 },
                     "position_ms": 0
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${_fakeToken}`
                   
                },
                params: {
     
                    device_id: DEVICE_ID3
                }
            }
        )
    

}


