import Main from "./components/main";
import SideBar from "./components/sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";

function MyApp({ Component, pageProps }: any) {
  console.log('app')
  return (
    <Provider store={store}>
      <div className="w-full h-full">
        <h1>spotify</h1>
        <div className="w-full h-main flex">
          <SideBar />
          <Main>
            <Component {...pageProps} />
          </Main>
        </div>
      </div>
    </Provider>
  );
}
export default MyApp;
