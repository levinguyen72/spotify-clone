import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getUriRefresh } from '../../services/authService';

interface State {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

const initialState = {
  access_token: "",
  refresh_token: "",
  expires_in: 0,
  //  infor
  // user: null,
  // playlists: [],
  playing: false,
  item: null,

};

interface ObjResponse {
  access_token: string;
  token_type: string;
  scopes: string;
  expires_in: number;
  refresh_token: string;
}
interface RecentlyPlayedParameterObject {
  limit?: number;
  after?: number;
  before?: number;
}

interface PlayParameterObject {
  device_id?: string;
  context_uri?: string;
  uris?: string[];
  offset?: {
    position?: number;
    uri?: string;
  };
  position_ms?: number;
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
      state.expires_in = +action.payload.expire_in;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload.playing
    },
    setItem: (state, action) => {
      state.item = action.payload.item
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRefreshToken.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
    });
  },
});

export const { setToken, setPlaying, setItem } = authSlice.actions;

export default authSlice.reducer;

console.log("++++++++++++++++++++++")
console.log(authSlice.reducer)