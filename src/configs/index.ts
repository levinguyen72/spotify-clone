import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQBAKonWX7jj3zaQ3377uXmIVtIqzzGv8HLhpamo-8VulppCHLPIrmWpBmjz443if70HpKMWylbcQmF_ifbMRxPXVBksB_xU6zIPdUc6EX2XtxtHK_t4EeHWOfLMj2oRAgouM3m2nN2VhbSfx8Me_kZmjACPt3k7Vct3xovxMsU0zjK5bQJmq7JrjKVo8Da7mFHH3fLwROYHoj5galHziQ`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
