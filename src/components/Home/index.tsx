import * as React from "react";
import "./index.css";
interface IHome {}

const Home: React.FunctionComponent<IHome> = ({}) => {
  return <h1 className="bg-red">Home</h1>;
};

export default Home;
