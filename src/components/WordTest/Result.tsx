interface ResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-4 text-2xl font-bold text-orange-500">
        Quiz Completed!
      </h2>
      <p className="mb-4 text-xl text-gray-700">
        Your score: {score} out of {totalQuestions}
      </p>
      <button
        onClick={onRestart}
        className="rounded-full bg-orange-500 px-6 py-2 text-white shadow-md transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
