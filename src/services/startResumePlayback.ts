import { getDeviceID } from './getIdDevices';
import axios  from 'axios';

import { getToken } from './authService';
import { DEVICE_ID, _fakeToken } from '../configs';

const START_RESUME_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`

//export const startResumePlayback = async (id: any) => {
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
                    device_id: DEVICE_ID
                }
            }
        )
    

}


// const axiosClient = axios.create({
//     baseURL: "https://api.spotify.com/",
//     headers:  {
//         Accept: "application/json",
//         "Content-Type": "application/json",
       
//         Authorization: `Bearer ${_fakeToken}`
//     },
    
// })



// //export const startResumePlayback = async (id: any) => {
//     export const startResumePlayback = async () => {

//         await axiosClient
//             .put(
//             "v1/me/player/play",
//             {
//                 // { "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr", "offset": { "position": 5 }, "position_ms": 0 }
                
//                     "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
//                     "offset": { "position": 5 },
//                      "position_ms": 0
//             },
//             {
//                 params: {
//                     device_id: DEVICE_ID
//                 }
//             }
//         )
    

// }