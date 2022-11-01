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
                Authorization: `Bearer BQDwz1UtQPqY6b8JPAe5zy8fTI9fKkrpP8ddxTqkaMqfZu8vez8NoUU2AyLUHtzJGJGc-8AiOpznbnzSyNVQH3UHSb0oV5qBYsuVm9hn6m5AUlkwHdqLQrH75EJeBBE2SVS2j8Ri5wbAfKl3Vk8tnYjBT9g9GIu19PImN6VH5nJBP2A0g1pWOaxb0mxuSxyyhCfqTSNZ`
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
