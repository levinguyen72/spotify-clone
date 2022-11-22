import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;

// const PLAYLIST_ID = useSelector((state:RootState) => state.auth.playlist_id)


const _fakeToken = `BQCEMcqnNxmVuannKeYLZXI8SGkQ5vfIUcrH6XpZ44Pg9vHc_FzcG-AkAvWH9dRdVyKmjBh8bQ-B1cuW6egBMHWp8xEtjbBNoUpdemoJx2T8woWb5HQM-I3LD_nrw4d33-t45O6R8GnvqEeI73ufQm3MbBhFTaQkMpx4HjJeoj35BtdoSUUnC0jjbWaJknYOjesKvPsm-nBWMzfWiuloBwi2p7PyopK5_g0tsL9QruuOVA`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID};
