import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PATHS } from "@/utils/constants/Paths";
import LearningIcon from "@/assets/imgs/leaning-language.jpg";
import BodyButton from "@/components/Button/BodyButton";
import LoginIcon from "@/assets/icon/LoginIcon";
import AuthInput from "@/components/Input/AuthInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // ログイン処理をここに実装
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-8">
      <div className="flex gap-2">
        <LoginIcon size="w-12 h-12" />
        <h2 className="text-4xl font-extrabold">Login</h2>
      </div>
      <img src={LearningIcon} alt="" />
      <form className="w-4/5" onSubmit={handleSubmit}>
        <AuthInput
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </form>
      <BodyButton label="Login" func={() => navigate(PATHS.WORDLIST)} />

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
