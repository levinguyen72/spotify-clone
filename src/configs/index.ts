import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;


const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQAfXG41utA3krTfEUs8oZHIgX7a3uA_w3iXIhsVM8QNnY7vtxM8V5-4799LU0NhdXZA5oKgj_8PIiBY7_rj7raP-apGyrXRPsAlkjqBQdxCxiwJbLppbf6H8mneHwCm8J76vA45vUh2NufNH35b_UH6IVzUtvs43NpdcV7IKawDCLRrb9vQDbeazSp4RzOz5K4BT06Fdp1Arkwhhc0lEXl9DmuqlGgccWZn70ut7G3Yoi-5zy7Q_QmZt6DGAPXkpaqxg5w1gurEzA`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID};
