import axios from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';

const USER_ID_ENDPOINT = `https://api.spotify.com/v1/me`

export const getUserID = async () => {

    const _token = getToken().token

    const { data } = await axios.get(
        USER_ID_ENDPOINT, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
            }
        }
    )
    
    console.log("get user id =====================================" + data.id)
    return data.id
}
