import { configureStore } from "@reduxjs/toolkit";
import githubSlice from "./githubSlice";

export const store = configureStore({
  reducer: {
    github: githubSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
