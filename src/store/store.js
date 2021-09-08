import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../slices/authenticationSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
