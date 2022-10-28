import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth_url, getToken, getUriRefresh } from "../../services/authService";

//
import { getCurrentPlaying } from "../../services/currentPlayed";
//
interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  const dispatch = useDispatch();
  //kiểm tra xem có access token chưa
  const token = useSelector((state) => state.auth.access_token);

  React.useEffect(() => {
    if (window.location.href.includes("access_token")) {
      console.log("111111111================" + token);
      const _token = dispatch(getToken());
      console.log(_token);
      // nếu có access token thì lưu lại vào session
      window.sessionStorage.setItem("token", _token.token);
    } else {
      // không thì redirect về trang login
      window.location.href = auth_url;
    }
    // }
  }, [token]);

  React.useEffect(() => {
    // const _data = dispatch(getCurrentPlaying());
    // console.log(_data);
  }, []);

  return (
    <div>
      <h1>Main</h1>
    </div>
  );
};

export default Main;
