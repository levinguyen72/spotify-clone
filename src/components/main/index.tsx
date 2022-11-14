//@ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { JsxAttribute } from "typescript";
import { auth_url, getToken, getUriRefresh } from "../../services/authService";
import Sidebar from "../sidebar";
import Footer from "../footer";
import Login from "../Login";
import Root from "../root";
import "./index.css";
//
import { getCurrentPlaying } from "../../services/getRecentlyPlayed";
//
interface IMainProps {
  children?: JSX.Element | JSX.Element[];
}

const Main: React.FunctionComponent<IMainProps> = ({
  children,
}: IMainProps) => {
  const dispatch = useDispatch();
  //kiểm tra xem có access token chưa
  const token = useSelector((state) => state.auth.access_token);

  // React.useEffect(() => {
  //   if (window.location.href.includes("access_token")) {
  //     const _token = dispatch(getToken()).token;

  //     window.sessionStorage.setItem("token", _token);
  //   } else {
  //     window.location.href = auth_url;
  //   }
  // }, [token]);
  const [isAuth, setIsAuth] = React.useState();
  React.useEffect(() => {
    if (window.location.href.includes("access_token")) {
      setIsAuth(true);
      const _token = dispatch(getToken()).token;

      window.sessionStorage.setItem("token", _token);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);

  return <>{isAuth ? <Root children={children} /> : <Login />}</>;
};

export default Main;
