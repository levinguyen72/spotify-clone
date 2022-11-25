import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;


const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQCvNRb3P7sYeEuP_UaqxL8lhEwbf8noCw01iAvv9dm39wIDKnCmERaWpt2zzkn4hObDrlrfgco-Xi9KA1F6g-FfB8slxEmHQukcilc2najoUfP-dkNZXcvDCNpWTzaO8-LbfUYUNEN2WdtIHE8wStsKmNca31zEkntJpqv6b8M0OGlMuZi0-KwIRZnmETHUBwfBUR1AS4YLbuLVj6AYEeq6a-BGatrt6Yei2soktJFHzWvYqvw2c4kwh-XJu9dC7HNYoS8BZPo`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID};
