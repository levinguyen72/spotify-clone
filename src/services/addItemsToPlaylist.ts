
import axios from 'axios'
import { getToken } from './authService';
import {  _fakeToken } from '../configs'
import { ADD_ITEM_TO_PLAYLIST_ENDPOINT } from './Endpoint/endPoint';




export const AddItemToPL = async (itemURI:string) => {
    const _token = getToken().token
    
    await axios
        .post(
            ADD_ITEM_TO_PLAYLIST_ENDPOINT,
     
            undefined,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${_fakeToken}`
                },
                params: {      
                    uris: itemURI
                }
            },
         
        
    )

  
    
   
}