import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BodyButton from "@/components/Button/BodyButton";
import { PATHS } from "@/utils/constants/Paths";
import LearningLogo from "@/assets/imgs/leaning-language.jpg";
import { signup } from "@/services/firebase/auth";
import useUserStore from "@/stores/user";
import fetchWords from "@/features/fetchWords";
import { useWordsStore } from "@/stores/words";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    const userId = await signup(email, password);
    useUserStore.getState().setUserId(userId);
    const words = await fetchWords(userId);
    useWordsStore.getState().setWords(words);

    navigate(PATHS.WORDLIST);
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-8">
      <h2 className=" text-center text-4xl font-extrabold">Signup</h2>
      <img src={LearningLogo} alt="" />
      <form className="w-4/5">
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500  sm:text-sm"
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
              className="w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500  sm:text-sm"
              placeholder="your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </form>
      <BodyButton label="Signup" func={handleClick} />
    </div>
  );
};

export default Signup;
