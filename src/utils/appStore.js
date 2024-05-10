import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSuggestionSlice";

const appStore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
});

export default appStore;
