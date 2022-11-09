import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQDhTWZQGCpHk9kymDrrPvsg46gos_X4lT4Y1fGmfk58cQ3sbJym0_-9675ZgbUjz4dptKM6tfeDmcgmIu-adTBCytKqlZvxCbPW4M5-bzH8naw5bRkibFFYUSlMfVa_76RoYnG0FUCRF-IlD9nC35ZjkgxaYK_MINQs5xmpyGGtBdGXItUff66mcAk1--MI_Ws8nOl60rDP7n5WRcuoRCj8s0r4Cgg5-MHZ5B97u8RinA`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
