import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;

// const PLAYLIST_ID = useSelector((state:RootState) => state.auth.playlist_id)


const _fakeToken = `BQC4hlbsQGf2blYeBI9vXWBmfCRFzB5L0UHfhodknSy7TaJb_ISq-v610lb76CFS29Oc8Q5EbPsYZJDRD1w4k9lenB5fWkMV4k3Mrqjq-cOReNllz0vWFAYHfGXpFvL4yHQsoWZ-uAdUMnk9cz_5TVKJR9rbJ9g5N0AAx3QfzApvdb2Ld9YCrQo8KCBnVWEIzRlP_JqZQRCCKYq2zT2JLMucGXN76BoefXQIuLdaBP9CqOcCidOKWKHazZYVwmLM7t9SGzQFJzcfFvSB-TeA7w`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID};
