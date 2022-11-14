import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQCH23BVPYeY-YBkEKaTNT0GtPY8ezXhCvvSZ7rCQ1L24Pm5MGSIfOKyycz82wLwxR9rYc2oUb-Jhuvxymm33Rq1YwxqFhFS1PWbmRvb_ypt5v64JmuHkoaj3mGbq0oDF7mT5KtMI5g1rvp3GslrOvd9t3dmiYJXWHPzSuyLt0t71eWUUE-e7aivWa7m6y4jPjHW2OuhLDew2SfvXC8d7Q`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
