import { getUserID } from './../services/getUserId';
import { getDeviceID } from './../services/getIdDevices';


const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;


const _fakeToken = `BQBg9clzP0jpRiEEHYhXO--pJxRGzkpM7ZOYibuEYWaXP-OYkXCWNzai3EOp3iqN8Iyiq8lbvVJ-_pK2Q2EADaF_Y_cmnzkTp4IXG5ESXJrQDXH1GAQ9yo4jY97m_JBhEQwvNEYBdHAbEYuG5ZQcAueDs61alUTqsi-_xCsV_79WrxjF8yz5KJjmmKK_Y--btQDObN_V_zW90XWb6dja7IoMZ0akpg`

const USER_ID = getUserID()

export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID };
