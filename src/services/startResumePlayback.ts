import axios  from 'axios';
//import scopes from '../configs/scopes'

// const [currentPlaying, setCurrentPlaying] = useState()
import { getToken } from './authService';

const START_RESUME_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`
const DEVICE_ID =  "0d1841b0976bae2a3a310dd74c0f3df354899bc8"


export const startResumePlayback = async () => {
    
    //const _token = getToken().token

    
    // const { data } =
    try {
        const plMusic = await axios.put(
            START_RESUME_PLAYBACK_ENDPOINT,
            DEVICE_ID,
            {
                
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer BQCBImlmeZ2xFoxy8toonWZrx8gTKlC8aAzqpUtT_BjqqeTwm8zmWK1itRRIsFyVe8bf74cEcj0gsOZwMja-QNLjl5Bw6iDPu6M8mSdvkomxaaEfP-Kk7FbmqiNb6L23TChqlCVfYBrztYdlTYnKLk0cwf5tiCUnt7tukI5aTmc4tdPJu0RQwMGkPYlb_N-yKYFnGxIB`
            },
            params: {
                // device_id: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
                
                    "context_uri": "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                    "offset": {
                      "position": 5
                    },
                    "position_ms": 0
                
            
                }
            }
        )
       
        console.log(plMusic)
    
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
        
  
    // return data
}
