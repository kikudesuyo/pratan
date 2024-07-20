import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BodyButton from "@/components/Button/BodyButton";
import { PATHS } from "@/utils/constants/Paths";
import LearningIcon from "@/assets/imgs/leaning-language.jpg";
import SignupIcon from "@/assets/icon/SignupIcon";

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
      <div className="flex gap-2">
        <SignupIcon size="w-12 h-12" />
        <h2 className="text-4xl font-extrabold">Signup</h2>
      </div>
      <img src={LearningIcon} alt="" />
      <form className="w-4/5" onSubmit={handleSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full appearance-none rounded-none rounded-t-md border border-gray-300 bg-white px-3 py-2 placeholder:text-gray-500  focus:outline-none focus:ring-orange-500  sm:text-sm"
              placeholder="e.g.) example@pratan.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 bg-white px-3 py-2 placeholder:text-gray-500 focus:outline-none focus:ring-orange-500  sm:text-sm"
              placeholder="your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </form>
      <BodyButton label="Signup" func={() => navigate(PATHS.WORDLIST)} />
    </div>
  );
};

export default Signup;
