import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "../features/userDetailSlice";

const store = configureStore({
  reducer: {
    app: userDetailSlice,
  },
});

export default store;
