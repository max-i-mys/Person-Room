import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    showModal: false,
    showLogIn: false,
    showLogUp: false,
  },
  reducers: {
    visibleModal: (state, action) => {
      state.showModal = true;
      switch (action.payload) {
        case "signIn":
          state.showLogIn = true;
          state.showLogUp = false;
          break;
        case "signUp":
          state.showLogUp = true;
          state.showLogIn = false;
          break;
        default:
          break;
      }
    },
    hiddenModal: (state, action) => {
      state.showModal = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { visibleModal, hiddenModal } = authSlice.actions;
