import { getDeviceID } from './../services/getIdDevices';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;
const DEVICE_ID = `13b33866c1bf611c22a2256bf500c7d6a0b8a175`

const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQBqfaAU-MYMQE4Tp7bD_5s9opqx_bRcUrQrvhl0fAT0dA220yd724sXS7tSGqu8HzOHCLXow3HK6oaIU_3aafEbULQukAcLs0pTtfpcahBUO6KuxJgQrMuKcziPBxrIcwU5dd7J3UdGpLGhFLHMzrVII4g7nGVxuHDxwiesOocY-6tI_hoG9O_nFiwJQ4E24ljx-1PeqL0JtAwKVAKlmJta4z-s4WcG8OeCum9rqe7E90t9W8AJgeDw20FSCK35VpnJprvfOxA5kQ`


const DEVICE_ID3 =  `4c89137386aed01d16632d6cb532fc2787f00984`

export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID, DEVICE_ID, DEVICE_ID3 };
