import { configureStore } from "@reduxjs/toolkit";

import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chat from "./ChatSlice";
import darkMode from "./ModeSlice";
const appstore = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chat,
    darkMode: darkMode,
  },
});
export default appstore;
