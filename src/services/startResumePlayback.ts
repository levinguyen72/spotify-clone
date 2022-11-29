import axios  from 'axios';
import {  DEVICE_ID3, _fakeToken } from '../configs';
import { START_RESUME_PLAYBACK_ENDPOINT } from './Endpoint/endPoint';

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


