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

const _fakeToken = `BQBCyPjnQfA0-Sw1vbh8L7vkegy27eexw-9rSKrSHf-RxdJGMiNFFoQxvv9noxXQs2k99tHp3sN7LPUYfbJAKT3buP9LA9p1Q9NE4Mt7a8WsLqdQzn18TiyUBy60EEPHqtWv4ImSr8IDR7LnCp-CrTAf8EPbSZyZIrE1oKJgDjx1gPYqMsWrqh9Ugbk5Bif2VUP165Y7pnEsuapcLq2dOaxuWx_wsD7dYmDYkfnou8a3TjqKiMy0gDJr3OG6XKvxOOPTfg_a9UJwyg`


const DEVICE_ID3 =  `0d1841b0976bae2a3a310dd74c0f3df354899bc8`

export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID, DEVICE_ID, DEVICE_ID3 };
