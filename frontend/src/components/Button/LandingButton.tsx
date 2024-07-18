import { useNavigate } from "react-router-dom";
import Button from "@/components/Button/Button";
import { PATHS } from "@/utils/constants/Paths";

const LandingButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      label="Let's start Learning!"
      style="bg-orange-500 hover:bg-orange-600 text-white py-4  px-8"
      func={() => {
        navigate(PATHS.LOGIN);
      }}
    />
  );
};

export default LandingButton;
