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
                Authorization: `Bearer BQDkdXqMmdnFM3JA3U_0wQTN2u37KYNW5vcDYNNqKuU26JTEqDYScECUN6PDYN2HVi3Leo4oAQ7MvlOxn9U4lDBP3VqowPZkCb1M_dyhBsXm1aB6YwL86842zJuQqt8PfRwQXoOM-KWb434fN_pcW397eyOJmRbhpovSUQwU1XAypxvNwVgyqbB4zfqgavp-_kRkYNQ8`
            },
            params: {
                limit: 30,
                // additional_types: "track",
                after: 1484811043508
            }
        }
    )
  
    return data
}


