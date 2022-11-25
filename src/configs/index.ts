import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;


const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQBu1MrIBXONQdynOCmJ7AntqRUPIM4T-3BXGKA81hQYYvBYehwhqXMJ2yFuszGdZhfgdGPY6a2VargR7ManGOHjKwRorLo27SWx29bWMR-VUMNgDogAzNBKuYXqgcJ6eum7bKL2MTJdrtYLFnGinmotbyVgOBSl1Th14e5BHaGKpXz9Ihot_mMSCG0BT7I4IiM5Ficf7JnMmJJoTgUUkPGdPI6GcTE1zegoesaQGTZ8tf_od8dpRkT5CngMrod3CM_D9lGpi58`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID};
