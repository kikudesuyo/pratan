import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BodyButton from "@/components/Button/BodyButton";
import { PATHS } from "@/utils/constants/Paths";
import LearningIcon from "@/assets/imgs/leaning-language.jpg";
import SignupIcon from "@/assets/icon/SignupIcon";
import AuthInput from "@/components/Input/AuthInput";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // サインアップ処理をここに実装
    console.log("Signup attempt with:", name, email, password);
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-8">
      <div className="mb-8 flex gap-2">
        <SignupIcon size="w-12 h-12 " />
        <h2 className="text-4xl font-extrabold">Signup</h2>
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
      <BodyButton label="Signup" func={() => navigate(PATHS.WORDLIST)} />
    </div>
  );
};

export default Signup;
