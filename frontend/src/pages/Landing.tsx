import { useNavigate } from "react-router-dom";
import BodyButton from "@/components/Button/BodyButton";
import { PATHS } from "@/utils/constants/Paths";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-8">
      <h1 className=" text-center text-3xl font-bold">
        English Vocabulary Explorer
      </h1>
      <div className="relative flex h-80 w-11/12 items-center justify-center rounded-lg border-4 border-orange-400 bg-white shadow-xl">
        <div className="absolute inset-x-0 -top-6 flex justify-around text-3xl text-blue-500">
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
        </div>
        <div className="flex flex-col text-center">
          //修正箇所
          <p>プロトタイプを挿入</p>
          <br />
          <p>ページ移動出来たら面白そう</p>
        </div>
      </div>
      <BodyButton
        label="Let's start learning!"
        func={() => navigate(PATHS.LOGIN)}
      />
      <p className="max-w-2xl text-center text-lg text-gray-600">
        Learn new words and their meanings in English! Expand your vocabulary
      </p>
    </div>
  );
};

export default Landing;
