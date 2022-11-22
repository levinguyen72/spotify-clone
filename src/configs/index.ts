import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;

// const PLAYLIST_ID = useSelector((state:RootState) => state.auth.playlist_id)


const _fakeToken = `BQDQSsOyyR7_sf7uoT4_RZmOuCpCGuDxw0Dq7IfctDyO_Ko1_xNBZ3MJDMyfr5U8Az29Rwn-vIgGBapu4G2_m2arT5fJk0fYx8E5oTPl1DNYpscBSrdcVCpC7DTK5zKIATBYmOLurXCYrxQyIeGYvH4mVhxzCgFK42N2fF_9Xs0jQwh0FiqGSnu7h95DWVxzA-Cx2l1idqV6qGeCTQ498KoxvsrZ43d05Z9OCQzqoYXOqQICdc1OL4m1W9AjC9lGdQKn6prpZx4`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID};
