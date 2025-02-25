import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const store = configureStore({
  reducer: {
    main: mainSlice,
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>;