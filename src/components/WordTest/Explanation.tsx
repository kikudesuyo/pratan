import { Question } from "@/utils/types";
import WordTestButton from "@/components/Button/WordTestButton";

interface ExplanationProps {
  question: Question;
  onNext: () => void;
}

const Explanation: React.FC<ExplanationProps> = ({
  question: { spell, definition, example },
  onNext,
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-blue-500">
        Let's Learn!
      </h2>
      <div className="flex items-center justify-center">
        <div className="mb-6 rounded-xl bg-orange-100 px-8 py-4">
          <h3 className="mb-2 text-center text-3xl font-semibold text-orange-700">
            {spell}
          </h3>
        </div>
      </div>
      <div className="mb-6">
        <h4 className="mb-2 text-xl font-semibold">Definition:</h4>
        <p className="rounded-lg bg-gray-100 p-4 text-lg">{definition}</p>
      </div>
      <div className="mb-6">
        <h4 className="mb-2 text-xl font-semibold">Example:</h4>
        <p className="rounded-lg bg-gray-100 p-4 text-lg">{example}</p>
      </div>
      <div className="flex justify-center">
        <WordTestButton label="Next Question" func={onNext} />
      </div>
    </div>
  );
};

export default Explanation;
