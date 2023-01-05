import { getToken } from './../services/authService';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31tsqjfodeysf7ctzz7pfuvwfwrq`;

const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const TYPE = `artists`

const _fakeToken = "BQAL-hJye0fJHwB9tCUOpA6YJAP6ttuc7xJ8B748j8r_pdwfw3gmSfBH2ChaQ5HbAL3GrEp_UYsSteLdxNcaGPoftQOsKNAGKCtFPqye57cplPpAS5xANZq3MAVfPQtNHN6D-_FN3xwTbuljrsrYkyll1p-ELxyoOhrKLlcr8EMAYrgwT4yX9NVQkljTM78tZs7Rb_0oe-QtYS2LOqgzXUTJo-VvfJZfne5kvzSAVq2rOEh2-NMyRt-1e0YWpoxiLarkQFyA2uHriC-9"

export { TYPE, _fakeToken, AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, USER_ID, PLAYLIST_ID };


