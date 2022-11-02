import axios  from 'axios';

import { getToken } from './authService';

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`


export const getRecentlyPlayed = async () => {
    
     const _token =  getToken().token
    // console.log("XXXXXXXXXXXXXXX_token========"+_token)
 
    const { data } = await axios.get(
        RECENTLY_PLAYED_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer BQAJhZlzC91jFaGwKbmb8q4tS4uwMEvYHlbcYdruLzEa35xXCg1qF4INvFpcpba3OkgWgKDiMYyDG5pgihfpaKk132pQWfZMxtcGi6zHZHMHUWX3QSmK_KjQEO6iqNkXZmmaOksu8AuJWGEENq7s1jGRcXun6gPlFW45Ny4pzGEJsr444wsXnNkeIc-BcgLyqiJAy52f`
            },
            params: {
                limit: 50,
                // additional_types: "track",
                after: 1484811043508
            }
        }
    )
  
    return data
}


