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
                Authorization: `Bearer BQDPumSP7NPde1DJBKAtsHU-6KGSHJi6gIgc_fmkz-7bx9mZmbc_ZJWp7homlPjuD4qwYWnbAKFtMMro_7DkOqfsj1vMCVyrl3mIGRYV-iHMPQdacR3itt3AdanTZ8Yn4ROkSyAbzdVrMPq3boZEVtjUTrBoesejc8Y43gkYXTT3c8Gu0O_NMUxabYiuHa22szZACNFB`
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
