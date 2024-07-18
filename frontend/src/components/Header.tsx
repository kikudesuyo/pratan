import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/Button";
import { PATHS } from "@/utils/constants/Paths";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 flex h-16 justify-between border-b-2 border-slate-300 bg-white p-3 shadow-md">
      <div className="flex flex-col justify-center text-xl font-bold">
        <Link to={PATHS.TOP}>Pratan📙</Link>
      </div>
      <div className="flex gap-4">
        <Button
          label="Login"
          style="bg-slate-300 hover:bg-gray-400"
          func={() => {
            navigate(PATHS.LOGIN);
          }}
        />
        <Button
          label="Signup"
          style="bg-slate-300 hover:bg-gray-400"
          func={() => {
            navigate(PATHS.SIGNUP);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
