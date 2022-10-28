import axios  from 'axios';
import scopes from '../configs/scopes'

// const [currentPlaying, setCurrentPlaying] = useState()
import { getToken } from './authService';

const CURRENT_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing"


export const getCurrentPlaying = async () => {
    const _token = getToken().token
    console.log("xxxxxxxxxxxxxxxxxxxxx========"+_token)
    // e.preventDefault()
    const { data } = await axios.get(
        CURRENT_PLAYING_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_token}`,
            },
            params: {
                market: "ES",
                additional_types: "track"
            }
        }
    )
    console.log(data)
    return data
}

