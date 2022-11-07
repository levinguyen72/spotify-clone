import { getDeviceID } from './getIdDevices';
import axios  from 'axios';
//import scopes from '../configs/scopes'

// const [currentPlaying, setCurrentPlaying] = useState()
import { getToken } from './authService';
import { _fakeToken } from '../configs';

const START_TRACK_ENDPOINT = `https://api.spotify.com/v1/me/player/play`
// const device_id =  `0d1841b0976bae2a3a310dd74c0f3df354899bc8`

const device_id = getDeviceID



export const startTrack = async (id: any) => {
    
    const _token = getToken().token

    
    // const { data } =
    // try {
        const plMusic = await axios.put(
            START_TRACK_ENDPOINT,
            device_id,
            // `https://api.spotify.com/v1/me/player/play?device_id=${DEVICE_ID}`,
            {
                
           
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    //Authorization: `Bearer ${_token}`,
                    Authorization: `Bearer ${_fakeToken}`
                    // Authorization: `Bear BQAn_Aw1bHR6_bfc2BTuTKsf_0RWiPp5UiGwqsdcaeLSGUop_9AoUGdRPxoV-zoTE8WMVRsQYH-e55YT7SI3H3rhX3DTQJw-cq0g7oiuZYBsboa3dsxQ-2FyLvWAlnN-qkcrXYv-0tfA817XjjCHFDVnBfUyGOK15ge0UiGXlzPfIoFXX5ecS6D5M2j8ouN9MOsIgxwf5LA`
                },
                params: {
                    // device_id: "0d1841b0976bae2a3a310dd74c0f3df354899bc8",
                    
                        "context_uri": `spotify:track:${id}`,
                        "offset": {
                        "position": 5
                        },
                        "position_ms": 0
                    
                
                    },
            }
        )
       
    

  
    
}
