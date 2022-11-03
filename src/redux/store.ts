import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "../redux/slices/auth";


const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store;
