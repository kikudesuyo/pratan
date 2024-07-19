import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BodyButton from "@/components/Button/BodyButton";
import { PATHS } from "@/utils/constants/Paths";
import LearningLogo from "@/assets/imgs/leaning-language.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // サインアップ処理をここに実装
    console.log("Signup attempt with:", name, email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 gap-8">
      <h2 className=" text-4xl font-extrabold text-center">Signup</h2>
      <img src={LearningLogo} alt="" />
      <form className="w-4/5" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500  sm:text-sm"
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
              className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500  sm:text-sm"
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
