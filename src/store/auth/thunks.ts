import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials, login, logout } from ".";
import {
  loginWithEmailPassword,
  logoutFirebase,
} from "../../firebase/providers";

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startLoginWithEmailPassword = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch: Dispatch) => {
    await logoutFirebase();
    dispatch(logout(""));
  };
};
