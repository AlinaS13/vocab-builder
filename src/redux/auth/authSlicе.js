import { createSlice } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registrationUser,
} from "./authOperation";

const initialState = {
  name: "",
  email: "",
  token: null,
  error: null,
  isAuth: false,
  isAuthLoading: false,
  isModalOpen: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    openModalLogOut(state) {
      state.isModalOpen = true;
    },
    closeModalLogOut(state) {
      state.isModalOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.pending, (state, action) => {
        state.isAuthLoading = true;
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.status = true;
        state.isAuthLoading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthLoading = false;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isAuthLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isAuthLoading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthLoading = false;
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.isAuthLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.name = null;
        state.email = null;
        state.token = null;
        state.isAuth = false;
        state.isAuthLoading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthLoading = false;
      })
      .addCase(getCurrentUser.pending, (state, action) => {
        state.isAuthLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.isAuthLoading = false;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthLoading = false;
        state.isAuth = false;
      });
  },
});

export const { setUser, removeUser, openModalLogOut, closeModalLogOut } =
  authSlice.actions;

export default authSlice.reducer;
