import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "@/components/Button/Button";
import { PATHS } from "@/utils/constants/Paths";
import LearningLogo from "@/assets/imgs/leaning-language.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // ログイン処理をここに実装
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8 gap-8">
      <h2 className=" text-4xl font-extrabold text-center">Login</h2>
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
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
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
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
              placeholder="your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </form>
      <Button
        label="Login"
        style="bg-orange-400 hover:bg-orange-500 w-1/2 h-12"
        func={() => {
          navigate(PATHS.WORDLIST);
        }}
      />
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
