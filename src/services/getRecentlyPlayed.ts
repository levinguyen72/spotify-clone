import axios  from 'axios';
//import scopes from '../configs/scopes'

// const [currentPlaying, setCurrentPlaying] = useState()
import { getToken } from './authService';

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`


export const getRecentlyPlayed = async () => {
    
    const _token =  getToken().token
    console.log("XXXXXXXXXXXXXXX_token========"+_token)
    // e.preventDefault()
    const { data } = await axios.get(
        RECENTLY_PLAYED_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer BQATWbCR64X7l6msyBJow_ba_hoTCnsStfaKC9voggyyMS-kMH_NLXqD7sAkN0cgSVXld0wQdHy8keNumO3Gn8RKm-QiXn94GttseFosdDUcceVfpyhAbyPumpAotvyya-u9TQSja5VAHrpIsykJTQkK4S2PD_HFCEzCfBt9Yq-VaAohmgliXmAq-b_vHeCWj-o1EMty`
            },
            params: {
                limit: 10,
                // additional_types: "track",
                after: 1484811043508
            }
        }
    )
  
    return data
}


// const CURRENT_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

// const getCurrentPlaying = async () => {
//   const access_token = getToken()

//   return fetch(CURRENT_PLAYING_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`,
//     },
//   })
// }

// export { getCurrentPlaying }
