import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQBZRpFdWkK-TnrS3RHEwAH0XB_WcCySThtK6FRkqcfTW2y_nuVvQc__0tFRJ9L2dInsAx8s3NEL9-UiFhMOYpkbb1Qfj5o05N4cBZS-j6_94ISsMF8myAoBLZg67cy8tWSMQg67UyP-8KVEVIga6Xdu6a5uc5elYnUc8YBJy70F5uP-zQ8hjeMCnNNVuBJT6D815iIN17bBFGayjJ9dwA`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
