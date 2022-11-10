import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQAGe9VNYkcrzt5NlJWh3OROTEq_zaGLzG_raDaO7MEQuuJTe89sAvKl_FFJON0SkTn5V1m9V-BuGRkF-HBFcfKRAku9amMJskC3TKkpYr06i7c2U5WzVz7HRKn7gDSFcqkFwTmCXJcpTdxt5wd4vbsogUQE8qC3nmfQwXxIFXjhYmSAPNTNQ2pKCWamNKY8LXKfdtYtstTF2zjozNhGIUyxcyqTITxdBVBJMGouutCghUWK`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
