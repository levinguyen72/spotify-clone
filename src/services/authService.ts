import scopes from '../configs/scopes'
import {
  AUTH_URL,
  CLIENT_SECRET,
  CLIENT_ID,
  REFRESH_URL,
  URI,
} from "../configs";

// access url
    export const auth_url = AUTH_URL +
        "?client_id=" +
        CLIENT_ID +
        "&redirect_uri=" +
        URI +
        "&response_type=token" +
        "&scope=" +
        scopes.join("%20");

    export const getUriRefresh = (access_token: string) => {
        return (
            REFRESH_URL +
            "?grant_type=authorization_code&" +
            "code=" +
            access_token +
            "&redirect_uri=http://localhost:3000" +
            "&client_id=" +
            CLIENT_ID +
            "&client_secret=" +
            CLIENT_SECRET
        ); 
    }

    export const getToken = () => {
        let substring = window.location.hash.substring(1);
        let subs = substring.split("&");
        const token = subs[0]?.split("=")[1] || "";
        const type = subs[1]?.split("=")[1];
        const expire_in = subs[2]?.split("=")[1] || 0;
        return { token, type, expire_in };
    }
    

    
