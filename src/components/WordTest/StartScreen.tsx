import WordTestButton from "@/components/Button/WordTestButton";

type StartScreenProps = {
  onStart: () => void;
  totalQuestions: number;
};

const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  totalQuestions,
}) => {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-lg">
      <h2 className="text-center text-2xl font-bold text-orange-500">
        Welcome to the Word Test!
      </h2>
      <p className="text-center text-lg">
        Test your vocabulary with {totalQuestions} questions.
      </p>
      <p className="text-center text-lg">Good luck!</p>
      <div className="flex items-center justify-center space-y-4">
        <WordTestButton label="Start Quiz" func={onStart} />
      </div>
    </div>
  );
};

export default StartScreen;
