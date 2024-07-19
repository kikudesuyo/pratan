import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import AuthButton from "@/components/Button/AuthButton";
import Sidebar from "@/components/Sidebar";
import { PATHS } from "@/utils/constants/Paths";
import { useAuth } from "@/auth/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  if (loading) {
    return <></>;
  }

  return (
    <header className="sticky top-0 flex justify-between h-16 p-3 bg-white border-b-2 shadow-md border-slate-300">
      <div className="flex flex-col justify-center text-xl font-bold">
        <Link to={PATHS.LANDING}>Pratan📙</Link>
      </div>
      <div className="flex gap-4">
        {!user ? (
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
