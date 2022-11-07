import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQAEP6XOjvaAP9tCr2GdgUNwnl-eNDTMsHwlx-Nlif9KVfosgEYPyvAx7C2c5zjOx6fTFDidVkaTm7QMz9qke6QyEJWxawJgwqdUiap7I5tY4BsG9P2mttMqWzykiZCfQEfyF75EG6BixASy6d-WcPZ6ocJhgaDSWoV8t7mY4IH3---izaPJQy8GmTEny5hDYVogVN17YUXp_Iyh8AM`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
