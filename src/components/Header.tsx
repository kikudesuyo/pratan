import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import AuthButton from "@/components/Button/AuthButton";
import Sidebar from "@/components/Sidebar";
import { PATHS } from "@/utils/constants/Paths";
import useUserStore from "@/stores/user";

const Header = () => {
  const navigate = useNavigate();
  const userId = useUserStore((state) => state.userId);

  return (
    <header className="sticky top-0 z-10 flex h-16 justify-between border-b-2 border-slate-300 bg-white p-3 shadow-md">
      <div className="justify-center text-xl font-bold">
        <Link to={PATHS.LANDING}>Pratan📙</Link>
      </div>
      <div className="flex gap-4">
        {!userId ? (
          <>
            <AuthButton
              label="Login"
              func={() => {
                navigate(PATHS.LOGIN);
              }}
            />
            <AuthButton
              label="Signup"
              func={() => {
                navigate(PATHS.SIGNUP);
              }}
            />
            <Sidebar />
          </>
        ) : (
          <Sidebar />
        )}
      </div>
    </header>
  );
};

export default Header;
