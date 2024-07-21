import { useState } from "react";
import { Question } from "@/components/WordTest/types";

interface QuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onWrongAnswer: () => void;
}

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
        <p className="mb-2 text-xl font-semibold">Definition:</p>
        <p className="text-lg text-gray-600">{definition}</p>
      </div>
      <div className="mb-6">
        <p className="mb-2 text-xl font-semibold">Example:</p>
        <p className="text-gray-600">{example.replace(word, "______")}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the word"
          className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-orange-500 p-2 text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      <p className="mt-6 text-center text-gray-600">
        Question {currentQuestion + 1} of {totalQuestions}
      </p>
    </div>
  );
};

export default Questions;
