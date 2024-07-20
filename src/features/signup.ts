import { signup as signupWithFirebaseAuth } from "@/services/firebase/auth";
import { registerDataToDb } from "@/services/firebase/firestore";

const signup = async (email: string, password: string) => {
  const userId = await signupWithFirebaseAuth(email, password);
  await registerDataToDb(`users/${userId}`, { wordsRefs: [] });
  return userId;
};

export default signup;
