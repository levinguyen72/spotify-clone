import axios  from 'axios';
import { getToken } from './authService';
import { _fakeToken } from '../configs';
import { ID_DEVICES_ENDPOINT } from './Endpoint/endPoint';



export const getDeviceID = async () => {
    
     const _token =  getToken().token
    
    const { data } = await axios.get(
        ID_DEVICES_ENDPOINT, {
            
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`
               
            },
        }
    )
    return data.devices[0].id

}



