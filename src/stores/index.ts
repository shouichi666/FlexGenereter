import { configureStore } from "@reduxjs/toolkit";
import flexSlice from "./slices/flexSlice";
import countSlice from "./slices/countSlice";
import modalDlice from "./slices/modalSlice";

const store = configureStore({
  reducer: { flex: flexSlice, count: countSlice, modal: modalDlice },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
