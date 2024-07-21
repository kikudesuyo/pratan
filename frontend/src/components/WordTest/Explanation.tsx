import { Question } from "@/components/WordTest/types";

interface ExplanationProps {
  question: Question;
  onNext: () => void;
}

const Explanation: React.FC<ExplanationProps> = ({
  question: { word, definition, example },
  onNext,
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-blue-500">
        Let's Learn!
      </h2>
      <div className="mb-6 rounded-lg bg-orange-100 p-4">
        <h3 className="mb-2 text-center text-2xl font-semibold text-orange-700">
          {word}
        </h3>
      </div>
      <div className="mb-6">
        <h4 className="mb-2 text-xl font-semibold">Definition:</h4>
        <p className="text-lg text-gray-600">{definition}</p>
      </div>
      <div className="mb-6">
        <h4 className="mb-2 text-xl font-semibold">Example:</h4>
        <p className="text-lg text-gray-600">{example}</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onNext}
          className="w-3/5 rounded-md bg-orange-500 p-3 text-center text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Explanation;
