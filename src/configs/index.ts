import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;


const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQAoj5ubuLm9DZW2qUA-r4MksOBebY1F7ZC7kMiOQMkvbO_x9ii-xQBYvCR9o5lVjsf4ZKYJKLd6KwtGXQ-uR-yEUSnLGfFRfN1hSzrhkZXYjGAzAR9a20-tS5-ceKLPqv6ZGVmQtRDHfv31iKjYYVBf_OnNmlPs6KE22Flh0JMi3GIMVvWCbHXwRgHx-mCo7fuq--qgK2y5hXf4x4WHRyb9uwGpsybSq5fvhMwBGs5mOvJXuIRLoUZHS75MnrMtRxm13_yg9v_hGQ`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID};
