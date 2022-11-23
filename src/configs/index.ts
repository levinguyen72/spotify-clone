import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;




const _fakeToken = `BQDsV6CjtdOZCqFSCnssAGwrT554DF-h4yBEjsn71HnQjQPFC35MdktXWAaNWYr7MlFhoBz9Ur3p9xA28VRbcR1bmTqjUv_yR0_v46cLxUsOcl1DlDwB8JHjnXkxxerTXG7Oxl3n56_LJlD-yAZPK_93-HttraUGvhkud5E5LBw84qnNvdCV_HHktYSxeYrjs7uKBEYB0CXJ61O-9xuLyj1Bji487eC94FTvVNb0WFp3uUUghZbXaVo89k3MIhlmY-Z3tcg2HwzR6A`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID};
