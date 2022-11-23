import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;




const _fakeToken = `BQCZflcQGh0IAvp-YmGlb3Dgk-j7ModXIq8gEGpSgH3zp3nTIjLOLyq1y-QNgiZGEj2S1VaJa6nOCXDdtpGj9AZRdw0za6DJlLO4DJylL8TdrLusRsMzxoo3eMRORPCLeZjFXqw2WyeqY6AJtlJlPMrZqT-SC1RVQSqMNHCqcxDt-J_ySgjfIlRUIFuSsIDezRJvc6ukQT4AfTHKh4ORiO8GNIouxvNDRpIq2lhY13cEhSG3sCszqd9fs09lDX1CU9j2Ti_f3GWpqA`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID};
