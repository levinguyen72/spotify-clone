import axios from 'axios';
import SpotifyApi from "spotify-web-api-js";
import { getDeviceID } from './getIdDevices';
import { getToken } from './authService';
import { _fakeToken } from '../configs';
import { START_TRACK_ENDPOINT } from './Endpoint/endPoint';

const device_id = getDeviceID

const spotify = new SpotifyApi()

export const startTrack = async (itemUri: string) => {

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
                "uris": `${itemUri}`,
         
            },
            
        }
    )
    spotify.play({
        uris: [`${itemUri}`],
    })
}

