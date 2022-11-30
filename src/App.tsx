import Main from "./components/main";
import { Provider } from "react-redux";
import store from "./redux/store";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import { getToken } from "./services/authService";
import { CreatePlaylist } from "./CreatePlaylist";
import uuid from 'react-uuid';
import Library from "./components/Library";

function MyApp({ Component, pageProps }: any) {
  const token = getToken().token;

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          key={"/" + uuid()}
          element={
            <Main>
              <Body />
            </Main>
          }
        />

        <Route
          path="/home"
          key={"/home" + uuid()}
          element={
            <Main>
              <Home />
            </Main>
          }
        />

        <Route
          path="/search"
          key={"/search" + uuid()}
          element={
            <Main>
              <Search />
            </Main>
          }
        />

        <Route
          path="/library"
          key={"library" + uuid()}
          element={
            <Main>
              <Library />
            </Main>
          }
        />

        <Route
          path="/CreatePlaylist"
          key={"/CreatePlaylist" + uuid()}
          element={
            <Main>
              <CreatePlaylist />
            </Main>
          }
        />
      </Routes>
    </Provider>
  );
}
export default MyApp;
