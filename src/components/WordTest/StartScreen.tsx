interface StartScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  totalQuestions,
}) => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-orange-500">
        Welcome to the Word Test!
      </h2>
      <p className="mb-6 text-center text-gray-700">
        Test your vocabulary with {totalQuestions} questions.
      </p>
      <div className="space-y-4">
        <button
          onClick={onStart}
          className="w-full rounded-md bg-orange-500 p-4 text-center text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Start Quiz
        </button>
      </div>
      <p className="mt-6 text-center text-gray-600">Good luck!</p>
    </div>
  );
};

export default StartScreen;
