import LandingButton from "@/components/Button/LandingButton";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 gap-8">
      <h1 className=" text-3xl font-bold text-center">
        English Vocabulary Explorer
      </h1>
      <div className="relative flex items-center justify-center w-11/12 bg-white border-4 border-orange-400 rounded-lg shadow-xl h-80">
        <div className="absolute left-0 right-0 flex justify-around text-3xl text-blue-500 -top-6">
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
      <LandingButton />
      <p className="max-w-2xl text-lg text-center text-gray-600">
        Learn new words and their meanings in English! Expand your vocabulary
      </p>
    </div>
  );
};

export default Landing;
