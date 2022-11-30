import axios from 'axios';
import { getToken } from './authService';
import { _fakeToken } from '../configs';
import { USER_ID_ENDPOINT } from './Endpoint/endPoint';

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
    return data.id
}
