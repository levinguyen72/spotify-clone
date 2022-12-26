import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUriRefresh } from '../../services/authService';

interface State {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

type TAuthState = {
  access_token: string
  refresh_token: string,
  expires_in: number,
  playing: boolean,
  item: any,
  playlist_id: string,
  render_state: number,
  device_id: string,


}

const initialState: TAuthState = {
  access_token: "",
  refresh_token: "",
  expires_in: 0,
  playing: false,
  item: null,
  playlist_id: "",
  render_state: 0,
  device_id: "",


};

interface ObjResponse {
  access_token: string;
  token_type: string;
  scopes: string;
  expires_in: number;
  refresh_token: string;
}




export const fetchRefreshToken = createAsyncThunk(
  "auth/fetchRefreshToken",
  async (_, { getState }) => {
    const state = getState() as State;
    const uri = getUriRefresh(state.access_token);
    const response = await axios.get(uri);
    return response.data as ObjResponse;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action?) => {
      state.access_token = action.payload.access_token;
      // state.expires_in = +action.payload.expire_in;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload.playing
    },
    setItem: (state, action) => {
      state.item = action.payload.item
    },
    setPlayListId: (state, action) => {
      state.playlist_id = action.payload.playlist_id
    },
    setRenderState: (state) => {
      state.render_state = state.render_state + 1;
    },
    setDeviceId: (state, action) => {
      state.device_id = action.payload.device_id
    },
    
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRefreshToken.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
    });
  },
});

export const {setToken, setPlaying, setItem, setPlayListId, setRenderState, setDeviceId } = authSlice.actions;

export default authSlice.reducer;

