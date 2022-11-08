import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQCuD7mUhlsX0lAs3I_3U8KGvynpQmw9SclAJ0GvnGhG4fA0S7SzVlqK-zXoH0hKovAc4S6JKsbujnUswhv2Xp_gEWc8joJbmoY4_M7KdROtD4i4sNM0mY9U77Q1qs7yuzoP4xwtwO_m69eI77X61LEUnQSoD-Jj_aYxOn_D28G4Hk9AE9eVPELAdUtK4Yfxy2heM0vPf21dVyUPA07Nhw`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
