import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", // 'checking', 'not-authenticated', 'authenticated'
    uuid: null,
    email: null,
    displayName: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uuid = payload.uuid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.errorMessage = payload.errorMessage;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uuid = null;
      state.email = null;
      state.displayName = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
