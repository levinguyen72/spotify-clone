import { getToken } from "../services/authService";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;
const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`
const TYPE = `artists`

const _fakeToken = "BQDRwj9mD_lIxh3b3dGqpen6bSq7sLtyiBt8cy1VfdnpYcs2XazanW5El_FUvvCh6bCskKbKKTihlYSn4gIYyTpXg1YFbjeNoG3DGpjkvzVi2y6WpBcY5_4Iwza9Pu0zwhWeQK8_uxLRiTKLRQp1503GONUsjxhY_m3LohFD8DXlvJe-9gRjJifUO8-vRnCzR6NIhLTOFX7dxG6m_g0ZCUzWVyaRE7hMNHyagVl2ayfHWVYNiJxzUFqPw63hmEeDTupCOUdyDucIhhpy"
export { TYPE, _fakeToken, AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, USER_ID, PLAYLIST_ID };


