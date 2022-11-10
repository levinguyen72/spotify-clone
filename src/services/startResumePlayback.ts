import { getDeviceID } from './getIdDevices';
import axios  from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';

const START_RESUME_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`


const device_id = getDeviceID




//export const startResumePlayback = async (id: any) => {
    export const startResumePlayback = async () => {
    
    const _token = getToken().token

        const plMusic = await axios.put(
            START_RESUME_PLAYBACK_ENDPOINT,
            device_id,
           
            {
           
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                   
                    Authorization: `Bearer ${_fakeToken}`
                   
                },
                params: {
                   
                    
                     "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                    //"context_uri":  `spotify:album:${id}`,
                        "offset": {
                        "position": 5
                        },
                        "position_ms": 0
                    
                
                    },
            }
        )
       
    

  
    
}
