import { Dispatch } from "@reduxjs/toolkit";
import { checkingCredentials } from ".";

export const checkingAuthentication = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(checkingCredentials());
  };
};
