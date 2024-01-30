import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout(""));

      const { uid, email, displayName } = user;
      dispatch(login({ uid, email, displayName }));
    });
  }, []);

  return status;
};
