import { useState } from 'react';
import axios from 'axios'
import { getToken } from './authService';

import { PLAYLIST_ID, _fakeToken } from '../configs'
// import GetCurrentPlayListId from '../components/getCurrentPlaylistId';

//  const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const URIS = `spotify:track:4iV5W9uYEdYUVa79Axb7Rh`
const ADD_ITEM_TO_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}/tracks`


export const AddItemToPL = async () => {
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
                    uris: URIS
                }
            },
         
        
    )
  
    
   
}