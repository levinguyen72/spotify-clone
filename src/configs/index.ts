import { getToken } from './../services/authService';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31tsqjfodeysf7ctzz7pfuvwfwrq`;

const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const TYPE = `artists`

const _fakeToken = "BQAKGkMHIjKr82jF8ehHBs8-SAA4huVpYeSGoWUVdWFfogONRUKQq7o9yBLsYgu6b1SlOHnxj9sgOHhC74f_Tm_2wjdOH3bkRegN5gAAIVqME-J5eOEg_pHjiWmMBrzAfzl2HuGhA-T_9WzDr8WiUjFTAi0ENT24C-r7ShIF66gJq-hKxFPyBm1qSwKdpmSY28_aPDWZMVp1ZPEJISZZCIF7loKmmxWRArP8-mcPZS8rwRVVmAZStSs3ITIfeWfO13Yu2XJWuE6gkwmA"

export { TYPE, _fakeToken, AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, USER_ID, PLAYLIST_ID };


