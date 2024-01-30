import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

export const loginWithEmailPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    const { uid, displayName } = resp.user;
    return { ok: true, uid, displayName };
  } catch (error: any) {
    return { ok: false, errorMessage: error.message };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
