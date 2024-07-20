import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "@/services/firebase/initFirebase";

export const signup = async (email: string, password: string) => {
  const auth = getAuth(app);
  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credential.user;
    return user.uid;
  } catch (e) {
    throw Error("failed to sign up user");
  }
};

export const login = async (email: string, password: string) => {
  const auth = getAuth(app);
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password);
    const user = credential.user;
    return user.uid;
  } catch (e) {
    throw Error("failed to log in user");
  }
};