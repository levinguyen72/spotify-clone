import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;
const USER_ID = `31pgebwoflxhzefq42jop6gvupry`;
const DEVICE_ID = `13b33866c1bf611c22a2256bf500c7d6a0b8a175`

const PLAYLIST_ID = `4ooGTcshbw1b2fLY8QCgvL`

const _fakeToken = `BQBtBrnzw8DDjljqpjX3m5rllvC3B6xZWtwVlUDowyIeNo0kIAtmVYF-nkUHVIz1D4kFB7WNHxuGAcyq1QDxjppF313H5HivEP_XL32K8BuBWwCDbVMQTrJrCYMj3p5Qx37D8qJYRkt2Eo2AFpkDYr_8TC2ZxYdIm432B_mayxipoKyJkQWi9Ohktknp3vPJvn9EyCvpRQUqO270wd5pCsY1FKnqYnINv9uYkPAWES60mL3BOC_gWb0vE2gXvPgm-9jamTK8A5yhtbWA`



export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken, USER_ID, PLAYLIST_ID, DEVICE_ID };
