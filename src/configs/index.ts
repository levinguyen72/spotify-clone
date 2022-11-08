import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQBf_AxsdKvhv7ctS6wyRi9wfUjYT7k5DCYQmsFMxM5_iVVtjvyOQbIoyJuxsNe6wWIcOnqHBEZtvLOpBCZyHrVVg6hxIPaJhOFe6LPA0XoKuX9S0a1LzmZtbAvpH6fZhp9NGFtRX_ySono2JLgV4O0tfv5nlIne76k6aPam6BtTRjc8_BcoD8Tn7FwqL1AmGWT--4llp2mOIJckBKqbQbODKslYiT7PCMTaX1SR5jWjX9COu4k`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
