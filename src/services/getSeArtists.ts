import axios from "axios";
import { _fakeToken } from "../configs";
import { GET_SEVERAL_ARTISTS_ENDPOINT } from "./Endpoint/endPoint";

export const getSeArtists = async () => {
    const { data } = await axios.get(
        GET_SEVERAL_ARTISTS_ENDPOINT, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${_fakeToken}`

            },
            params: {
                ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,7n2Ycct7Beij7Dj7meI4X0,5WUlDfRSoLAfcVSX1WnrxN,3KJopZ2uUclqEtLxQg0FNn"
            }
        }
    )
    return data
}