import LandingButton from "@/components/Button/LandingButton";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        English Vocabulary Explorer
      </h1>
      <div className="relative w-full max-w-4xl h-96 bg-white border-4 border-orange-400 rounded-lg shadow-xl flex items-center justify-center mb-8">
        <div className="absolute -top-6 left-0 right-0 text-3xl text-blue-300 flex justify-around">
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
        </div>
        <div className="flex flex-col text-center">
          <p>プロトタイプを挿入</p>
          <br />
          <p>何ページか移動出来たら面白そう</p>
        </div>
      </div>
      <LandingButton />
      <p className="mt-6 text-gray-600 text-center max-w-2xl text-lg">
        Learn new words and their meanings in English! Expand your vocabulary
      </p>
    </div>
  );
};

export default Landing;
