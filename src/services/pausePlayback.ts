import axios  from 'axios';
import { getToken } from './authService';
import { _fakeToken } from '../configs';

const PAUSE_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/pause`
const DEVICE_ID =  `0d1841b0976bae2a3a310dd74c0f3df354899bc8`


export const pausePlayback = async () => {
    
    const _token = getToken().token

        const pauseMusic = await axios.put(
            PAUSE_PLAYBACK_ENDPOINT,
            DEVICE_ID,
          
            {
                
           
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${_fakeToken}`
                },
           
            }
        )

}
