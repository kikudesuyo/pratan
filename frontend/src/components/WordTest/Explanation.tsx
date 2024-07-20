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
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-3xl font-bold text-orange-500">
        Let's Learn!
      </h2>
      <div className="mb-6 rounded-lg bg-orange-100 p-4">
        <h3 className="mb-2 text-2xl font-semibold text-orange-700">{word}</h3>
        <p className="italic text-orange-600">"{word}"</p>
      </div>
      <div className="mb-6">
        <h4 className="mb-2 text-lg font-semibold text-gray-700">
          Definition:
        </h4>
        <p className="text-gray-600">{definition}</p>
      </div>
      <div className="mb-6">
        <h4 className="mb-2 text-lg font-semibold text-gray-700">Example:</h4>
        <p className="text-gray-600">"{example}"</p>
      </div>
      <div className="mb-4 rounded-lg bg-blue-100 p-4">
        <h4 className="mb-2 text-lg font-semibold text-blue-700">Remember:</h4>
        <p className="text-blue-600">
          Associate "{word}" with its definition and try to use it in a sentence
          similar to the example above.
        </p>
      </div>
      <button
        onClick={onNext}
        className="w-full rounded-md bg-orange-500 p-2 text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Next Question
      </button>
    </div>
  );
};

export default Explanation;
