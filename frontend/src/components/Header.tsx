import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/Button/Button";
import { PATHS } from "@/utils/constants/Paths";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 flex justify-between h-16 p-3 bg-white border-b-2 shadow-md border-slate-300">
      <div className="flex flex-col justify-center text-xl font-bold">
        <Link to={PATHS.LANDING}>Pratan📙</Link>
      </div>
      <div className="flex gap-4">
        <Button
          label="Login"
          style="bg-slate-300 hover:bg-gray-400 px-4"
          func={() => {
            navigate(PATHS.LOGIN);
          }}
        />
        <Button
          label="Signup"
          style="bg-slate-300 hover:bg-gray-400 px-4"
          func={() => {
            navigate(PATHS.SIGNUP);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
