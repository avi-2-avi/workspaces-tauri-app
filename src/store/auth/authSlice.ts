import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'checking', 'not-authenticated', 'authenticated'
    uuid: null,
    email: null,
    displayName: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {},
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
