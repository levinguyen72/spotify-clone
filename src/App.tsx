import Main from "./components/main";
import SideBar from "./components/sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import Body from "./components/Body";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Layout from "./layout";

function MyApp({ Component, pageProps }: any) {
  console.log("app");
  return (
    <Provider store={store}>
      {/* <SideBar /> */}
      {/* <Body></Body> */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes> */}

      {/*  */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Body />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
      {/*  */}

      {/* <Main>
           
              <Component {...pageProps} />
            </Main> */}
    </Provider>
  );
}
export default MyApp;
