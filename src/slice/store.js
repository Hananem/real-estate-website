import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import uiReducer from "./uiSlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
});
