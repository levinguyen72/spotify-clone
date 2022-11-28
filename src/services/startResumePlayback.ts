import { getDeviceID } from './getIdDevices';
import axios  from 'axios';

import { getToken } from './authService';
import { DEVICE_ID, DEVICE_ID3, _fakeToken } from '../configs';

const START_RESUME_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`

// const DEVICE_ID2 = getDeviceID().then(res => res)
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA")
console.log(DEVICE_ID3)
    export const startResumePlayback = async () => {

        await axios
            .put(
            START_RESUME_PLAYBACK_ENDPOINT,
            {
                    "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                    "offset": { "position": 5 },
                     "position_ms": 0
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${_fakeToken}`
                   
                },
                params: {
                    // device_id: DEVICE_ID
                    device_id: DEVICE_ID3
                }
            }
        )
    

}



// import { getDeviceID } from './getIdDevices';
// import axios  from 'axios';

// import { getToken } from './authService';
// import { _fakeToken } from '../configs';

// const START_RESUME_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`


// const device_id = getDevice  ID

// //export const startResumePlayback = async (id: any) => {
//     export const startResumePlayback = async () => {
    
//     const _token = getToken().token

//         const plMusic = await axios.put(
//             START_RESUME_PLAYBACK_ENDPOINT,
//             device_id,
           
//             {
           
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
                   
//                     Authorization: `Bearer ${_fakeToken}`
                   
//                 },
//                 params: {
                   
                    
//                       "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                   
//                         "offset": {
//                         "position": 5
//                         },
//                         "position_ms": 0
                    
                
//                     },
//             }
//         )
       
    

  
    
// }
