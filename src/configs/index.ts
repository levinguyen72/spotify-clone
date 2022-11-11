import { getDeviceID } from './../services/getIdDevices';

const AUTH_URL = `https://accounts.spotify.com/authorize`;
const REFRESH_URL = `https://accounts.spotify.com/api/token`;
const CLIENT_ID = `8d5346bd5c3f4a95bbacaede3940227b`;
const CLIENT_SECRET = `99a2d014a58a4df5878a9b84a1158f05`;
const URI = `http://localhost:3000`;

const _fakeToken = `BQAsEs4ukCeoCwNMQfQSm5f3l01bFZ9e3NICzgpPMHZizKVnpdDTXQRSYmaTLIR1O7CIRxgwHYk4EsDchTtKozJLhB5dH7_VmFkVwnygxgAfVbTSVqbOf4PPDmZV-4O_cu4sNUJz501uSLmdFEq_6nzMQPmJOmNoG2Mmy7739wkPqphdxD6c4zWzq_DceqYFc0FQ3BdesA8N9Da5ryk3z7k2gmWfYF0sQqDvaGBMpWR2jxKeJhI`


export { AUTH_URL, REFRESH_URL, CLIENT_SECRET, CLIENT_ID, URI, _fakeToken };
