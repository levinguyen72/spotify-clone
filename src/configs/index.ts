import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;


const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQDYKttKAkvSiQVoUW2D6qzWoVOGYClnDlKj9XJYBfCcHgV_wm6x1uAJcbKnchZObXFhXXXz8j6wIN-JWiaCTdzbaswUU6zHxejTuDbQV5Tkb8X2TjZ-Jp-28RObfJ_IfiFCsbTHVyCzL-60GIfvYGWhsiBjNvNka-EphjFMeHXLRlR3yNbdjJb7EFuzHpRM7y62U5H_mCq-jOT8WfqKrhhRF_yaaQzpp77m8p9svnYgKMohI_qvzaDOvIOy151OyKiSmR2Cg4x8DA`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID};
