import { getToken } from './../services/authService';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31tsqjfodeysf7ctzz7pfuvwfwrq`;

const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const TYPE = `artists`

const _fakeToken = "BQBbCzkrcUu5PFrlyMadu47WROznNN48RC129Gxj-vjXAw3dmi7wWrdxc4u7StshrzaTst2O-DW6eMMUfMUQEmwVmra6Qo5T2Mbu48GZ2cch2WErrn9CxQkUdKVOx3K8cijO_z7FQ5shwcSDcbEhsoSAyEko1qXgD0JiNb5x3C6cP3lfM1Yu7q2s1iUY8SuA3fskOxVj2IBnMCJRQC-bO77WDzEOsYsxIssW1s5mtvcJcdfNHLIrJQmuZyBp5OJta6YShBn6jy7RqSRc"

export { TYPE, _fakeToken, AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, USER_ID, PLAYLIST_ID };


