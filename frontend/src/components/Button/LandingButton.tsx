import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import { PATHS } from "@/utils/constants/Paths";

const LandingButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      label="Let's start Learning!"
      style="bg-orange-400 hover:bg-orange-500 py-4 px-8 text-xl"
      func={() => {
        navigate(PATHS.LOGIN);
      }}
    />
  );
};

export default LandingButton;
