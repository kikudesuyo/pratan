import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BodyButton from "@/components/Button/BodyButton";
import { PATHS } from "@/utils/constants/Paths";
import signUp from "@/features/signUp";
import useUserStore from "@/stores/user";
import fetchWords from "@/features/fetchWords";
import { useWordsStore } from "@/stores/words";
import LearningIcon from "@/assets/imgs/leaning-language.jpg";
import SignupIcon from "@/assets/icon/SignUpIcon";
import AuthInput from "@/components/Input/AuthInput";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const userId = await signUp(email, password);
      useUserStore.getState().setUserId(userId);
      const words = await fetchWords(userId);
      useWordsStore.getState().setWords(words);
      navigate(PATHS.WORDLIST);
    } catch (e) {
      console.error(e);
      alert("Failed to signup");
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-8">
      <div className="mb-8 flex gap-2">
        <SignupIcon size="w-12 h-12 " />
        <h2 className="text-4xl font-extrabold">Signup</h2>
      </div>
      <img src={LearningIcon} alt="" />
      <form className="w-4/5">
        <AuthInput
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </form>
      <BodyButton label="Signup" func={handleClick} />
    </div>
  );
};

export default Signup;
