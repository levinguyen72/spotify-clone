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

const _fakeToken = `BQBaQfQlSvmlN0WOQLTb1O4_CEqoNWUAA1xmdExCh-OgR3qznNx1MlA846pKj4tOk2avtQtWwAFjZsHnjOyUOA5iHvT-J96yb9gLgQSekHdoN6LY61YOqrXV9Y-a9Lt8L6wR8crnE67H8pCypyV7jj17t4e6QXmAyeiAf2UVFjAwo73QWdDNZ-u4IJoscYM22rYNed7_SYzmgE_u7w_F_CiQCp27DBCdVM7VgHjga5KGE-ZqyeEeex-wHqzDZKJIU561xjiDTtxAUikcahN8og`


const DEVICE_ID3 =  `4c89137386aed01d16632d6cb532fc2787f00984`

export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID, DEVICE_ID, DEVICE_ID3 };
