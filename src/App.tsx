import Main from "./components/main";
import SideBar from "./components/sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import Body from "./components/Body";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Layout from "./layout";
import { getToken } from "./services/authService";

function MyApp({ Component, pageProps }: any) {
  const token = getToken().token;
  console.log(token);
  console.log(12345);
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Body />{" "}
            </Main>
          }
        />
        <Route
          path="/home"
          element={
            <Main>
              <Home />{" "}
            </Main>
          }
        />
        <Route
          path="/search"
          element={
            <Main>
              <Search />
            </Main>
          }
        />
      </Routes>

      {/* <Main>
           
              <Component {...pageProps} />
            </Main> */}
      {/*  */}
    </Provider>
  );
}
export default MyApp;
