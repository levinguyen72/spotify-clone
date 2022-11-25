import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;


const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQB6DOMbILnNp8nuU4NWG9lrp2WAAWb2uBqoqCoQnZhXWWGpqf_sjo-0YB8SdACZApBPY1KCpnzvERtUUmnzCaUC0WiN6v_U8azbuD-8GxHjbjWkiP04qgnAdfDklkFCkJ6EsO7eUezADTx1IjQlxCzQ39KhKYF6Dz9qf5pPQCthqobAG0nnTWBfhFHeKgZfVOrfRqeD4X9UnBQNp5RtF0znEH1Qna_dLLqNoT6SCiGFuAIbprPzLy5QbAAppnVu869sVUM5xN8`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID};
