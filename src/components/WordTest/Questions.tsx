import { useState } from "react";
import { Question } from "@/components/WordTest/types";
import QuestionExample from "@/components/WordTest/QuestionExample";
import WordTestButton from "@/components/Button/WordTestButton";

type QuestionProps = {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onWrongAnswer: () => void;
};

const Questions: React.FC<QuestionProps> = ({
  question: { word, definition, example },
  currentQuestion,
  totalQuestions,
  onAnswer,
  onWrongAnswer,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = input.toLowerCase().trim() === word.toLowerCase();
    if (isCorrect) {
      onAnswer(true);
    } else {
      onWrongAnswer();
    }
    setInput("");
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-orange-500">
        Question {currentQuestion + 1}
      </h2>
      <div className="mb-6">
        <p className="mb-2 text-xl font-semibold ">Definition:</p>
        <p className="rounded-lg bg-gray-100 p-4 text-lg">{definition}</p>
      </div>
      <div className="mb-6">
        <p className="mb-2 text-xl font-semibold">Example:</p>
        <QuestionExample word={word} sentence={example} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the word"
          className="w-4/5 rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <WordTestButton label="Submit" func={() => {}} />
      </form>
      <p className="mt-6 text-center text-gray-600">
        Question {currentQuestion + 1} of {totalQuestions}
      </p>
    </div>
  );
};

export default Questions;
