import { signUp as signUpWithFirebaseAuth } from "@/services/firebase/auth";
import { registerDataToDb } from "@/services/firebase/firestore";

const signUp = async (email: string, password: string) => {
  const userId = await signUpWithFirebaseAuth(email, password);
  await registerDataToDb(`users/${userId}`, { wordsRefs: [] });
  return userId;
};

export default signUp;
