//@ts-nocheck
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../../services/authService";

import Login from "../Login";
import Root from "../root";
import "./index.css";

interface IMainProps {
  children?: JSX.Element | JSX.Element[];
}

const Main: React.FunctionComponent<IMainProps> = ({
  children,
}: IMainProps) => {
  const dispatch = useDispatch();
  //kiểm tra xem có access token chưa
  const token = useSelector((state) => state.auth.access_token);

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
