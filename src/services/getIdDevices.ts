import axios  from 'axios';

import { getToken } from './authService';
import { _fakeToken } from '../configs';

const ID_DEVICES_ENDPOINT = `https://api.spotify.com/v1/me/player/devices`


export const getDeviceID = async () => {
    
     const _token =  getToken().token
    
    const { data } = await axios.get(
        ID_DEVICES_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                //Authorization: `Bearer ${_token}`,
                Authorization: `Bearer ${_fakeToken}`
                // Authorization: `Bearer BQAvGK1b--scKrVGAaWUQlf0dvUus1XAKa8_I4fUeLlxhWHk8DL_7avrzEAkRoLtqBnOIN8z6Y7xKwD76TT_1YqUZuJhTHtONytH77TsQRQv8F-HfBcWRhZWjjLIxi6WFrrAGN-BQfoOHwZeX1Mj7smjpu334pjUulZeCCVA23OGKtHpwZP9jNC7fcD-mlOW0y2MSaCtX5ncAhdfmheM4QM`
            },
        }
    )
    
    console.log(data.devices[0].id)
    return data.devices[0].id

}



