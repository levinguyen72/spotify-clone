import { getToken } from './../services/authService';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31tsqjfodeysf7ctzz7pfuvwfwrq`;

const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const TYPE = `artists`

const _fakeToken = "BQDOGKlASs2TaWS987U3FYX1kXUJ-A4ughuL-KabvbS5y2M0amexcaL3Uz12zl6dNe1W2kCRbzTJVAW549cH047FY6bijzVAxcflzF509uTMDUBat-mIeg8O1eL4VRRprGTIh5yMu_581d-zcO5TijcYKfVH41GbSJgFsecE81jV8dM_L2cXKxH93x0klo0fBIxlEfGZueIskYYCVatsmagUeQFNFa4R5sXQEbrnHER4YYgxExwBw0dUB92XXodssJxe8YloeagY3_Uy"

export { TYPE, _fakeToken, AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, USER_ID, PLAYLIST_ID };


