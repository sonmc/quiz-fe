import { configureStore } from "@reduxjs/toolkit";
import rootSlices from "./slices";
const store = configureStore({
  reducer: rootSlices,
});

export default store;
