import { useDispatch } from 'react-redux';
import SpotifyApi from "spotify-web-api-js";
import { getDeviceID } from './getIdDevices';
import axios from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';
import { setItem } from "../redux/slices/auth";

const START_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`

const device_id = getDeviceID

// 
const s = new SpotifyApi()

export const startTrack = async (id: any) => {
    // const dispatch = useDispatch()
    
    
    const _token = getToken().token

    const plMusic = await axios.put(
        START_TRACK_ENDPOINT,
        device_id,
           
        {
                
           
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            },
            params: {
                
                "context_uri": `spotify:album:${id}`,
                // "offset": {
                // "position": 5
                // },
                // "position_ms": 0
                    
                
            },
        }
    )
    s.play({
        uris: [`spotify:track:${id}`],
    })
    
    // s.getMyCurrentPlayingTrack().
    //     dispatch(setItem{ item });
          
        
}



// export const startTrack = (id: any) => {
//     s.play({
//         uris: [`spotify:track:${id}`],
//     })
// }

