import { configureStore } from "@reduxjs/toolkit";
import abc from "./slice";

export const store = configureStore({
  reducer: {
    count: abc,
  },
});
