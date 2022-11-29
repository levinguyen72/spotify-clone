import { getDeviceID } from './../services/getIdDevices';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;
// const DEVICE_ID = `13b33866c1bf611c22a2256bf500c7d6a0b8a175`
const DEVICE_ID =  `0d1841b0976bae2a3a310dd74c0f3df354899bc8`
const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQBwatkcsUiydFjfXymde6KuSW_iGlMgRPFMzr_8JsGkfOkcVJ-A67nuXoCxpUHg_vo3EvCq0bDqHi0nNPGxDlrTKUH1JF1hXU9vSaSTMGpI08k0QfdZEu2R2sUUg036VDo0Zl_pq0elFWJbIgM2D35Frjp0P2Z4_N1NSpRIVQh8w6YfEshQLAmWL1KC35mXG6vqPvgw0wl7oT8xJzz4cvWU3Nbqd7JxfZ9lk1A_OQvxpjs4EHVTldQGKmNyMUh35_w4faK3qMJQXQ`


const DEVICE_ID3 =  `4c89137386aed01d16632d6cb532fc2787f00984`

export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID, DEVICE_ID, DEVICE_ID3 };
