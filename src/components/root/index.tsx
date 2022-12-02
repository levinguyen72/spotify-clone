import React from "react";
import Footer from "../footer";
import Sidebar from "../sidebar";

interface IMainProps {
  children?: JSX.Element | JSX.Element[];
}

const Root: React.FunctionComponent<IMainProps> = ({
  children,
}: IMainProps) => {
  return (
    <div>
      <Sidebar />

      <h1>{children}</h1>

      <Footer />
    </div>
  );
};

export default Root;
