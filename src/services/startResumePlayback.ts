import axios  from 'axios';
//import scopes from '../configs/scopes'

// const [currentPlaying, setCurrentPlaying] = useState()
import { getToken } from './authService';

const START_RESUME_PLAYBACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`
const DEVICE_ID =  "0d1841b0976bae2a3a310dd74c0f3df354899bc8"


export const startResumePlayback = async () => {
    
    const _token = getToken().token
    console.log("++++++++=")
    
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
                Authorization: `Bearer BQDf9LzENV6iMsPoDlTaEEv925VngRHfsiVAGa5d_-9O2ggmO4zgTG8dBKhj9zIbl7dODH5fG5IK2WGceHQ5ajpPdV2t8VW9w6fwVTTMMPbiFDzKy5v4oPE5rMdswkHfj1Co4nLiSH2PXHEiiUv-mMjReDyCaw2CEtlLrBV92OJ-yKBabJEnyjJdJNN557T7os4kzKmK`
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
