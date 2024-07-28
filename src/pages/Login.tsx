import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PATHS } from "@/utils/constants/Paths";
import LearningIcon from "@/assets/imgs/leaning-language.jpg";
import BodyButton from "@/components/Button/BodyButton";
import { login } from "@/services/firebase/auth";
import useUserStore from "@/stores/user";
import fetchWords from "@/features/fetchWords";
import { useWordsStore } from "@/stores/words";
import LoginIcon from "@/assets/icon/LoginIcon";
import AuthInput from "@/components/Input/AuthInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const userId = await login(email, password);
      useUserStore.getState().setUserId(userId);
      const words = await fetchWords(userId);
      useWordsStore.getState().setWords(words);
      navigate(PATHS.WORDLIST);
    } catch (e) {
      console.error(e);
      alert("Failed to login");
    }
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-8">
      <div className="mb-8 flex gap-2">
        <LoginIcon size="w-12 h-12" />
        <h2 className="text-4xl font-extrabold">Login</h2>
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
      <BodyButton label="Login" func={handleClick} />

      <div className="flex flex-col items-center">
        <p>Don't have an account?</p>
        <Link to={PATHS.SIGNUP} className="font-medium text-orange-400 ">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
