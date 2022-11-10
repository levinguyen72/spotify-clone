import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQCJwbmC_nXoc3BnBNKjQS-qkby22E3DFkTKNy1WueWMnFuf4lmf0pobxA-NGE5SMVuphYQfmCMUZXc49sBdaoJrrOB-FKdNaF0zrSTojRSZygbLJH3ci4H-O_fQ9Wlck4r4DUWWAL2-R79ikuByQklp-Wx6w_aN9CB3tNrxl5bZOTOKywQJmUS_Sal7vhdu_EWJVCwgpa2mRPhYhbPZ2g`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
