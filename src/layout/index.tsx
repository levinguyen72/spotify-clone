// import React from "react";
// import SideBar from "../components/sidebar";
// import { Outlet } from "react-router-dom";
// import Footer from "../components/footer";

// type Props = {};

// function Layout({}: Props) {
//   return (
//     <div className="w-full h-full">
//       <div className="w-full h-full flex">
//         <SideBar />
//         <Outlet />
//         <Footer />
//       </div>
//     </div>
//   );
// }

//export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex">
        <Sidebar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
