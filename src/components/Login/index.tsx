import React from "react";
import { auth_url } from "../../services/authService";

type Props = {};

const Login = (props: Props) => {
  return <a href={auth_url}>Link to</a>;
};

export default Login;
