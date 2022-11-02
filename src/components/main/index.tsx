//@ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { JsxAttribute } from "typescript";
import { auth_url, getToken, getUriRefresh } from "../../services/authService";
import Sidebar from "../sidebar";
import Footer from "../footer";
import "./index.css";
//
import { getCurrentPlaying } from "../../services/getRecentlyPlayed";
//
interface IMainProps {
  children?: JsxAttribute | undefined;
  // children?: any;
}

const Main: React.FunctionComponent<IMainProps> = ({
  children,
}: IMainProps) => {
  const dispatch = useDispatch();
  //kiểm tra xem có access token chưa
  const token = useSelector((state) => state.auth.access_token);

  React.useEffect(() => {
    if (window.location.href.includes("access_token")) {
      //console.log("token================" + token);
      const _token = dispatch(getToken()).token;
      //const _token = getToken();
      //console.log("dispatch_xxxxxxxxxxxx_token================" + _token);
      // nếu có access token thì lưu lại vào session
      window.sessionStorage.setItem("token", _token);
    } else {
      //console.log("auth_url================" + auth_url);
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
    <>
      <div>
        <Sidebar />

        <h1>{children}</h1>

        <Footer />
      </div>
    </>
  );
};

export default Main;
