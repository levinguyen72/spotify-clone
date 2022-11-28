import { useDispatch } from 'react-redux';
import SpotifyApi from "spotify-web-api-js";
import { getDeviceID } from './getIdDevices';
import axios from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';
import { setItem, setPlaying } from "../redux/slices/auth";

const START_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`

const device_id = getDeviceID

// 
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

