import WordTestButton from "@/components/Button/WordTestButton";

type ResultProps = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

const Result: React.FC<ResultProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-orange-500">
        Quiz Completed!
      </h2>
      <p className="mb-4 text-xl font-bold text-gray-700">
        Your score: {score} out of {totalQuestions}
      </p>
      <WordTestButton label="Restart Quiz" func={onRestart} />
    </div>
  );
};

export default Result;
