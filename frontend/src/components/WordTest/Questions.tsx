import { useState } from "react";
import { Question } from "@/components/WordTest/types";

interface QuestionProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

const Questions: React.FC<QuestionProps> = ({
  question: { word, definition, example },
  currentQuestion,
  totalQuestions,
  onAnswer,
}) => {
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = input.toLowerCase().trim() === word.toLowerCase();
    setFeedback(isCorrect ? "Correct!" : "Incorrect. Try again.");
    if (isCorrect) {
      setTimeout(() => {
        onAnswer(true);
        setInput("");
        setFeedback("");
      }, 1000);
    }
  };

  return (
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold text-orange-500">
        Question {currentQuestion + 1}
      </h2>
      <div className="mb-6">
        <p className="mb-2 font-semibold">Definition:</p>
        <p className="text-gray-700">{definition}</p>
      </div>
      <div className="mb-6">
        <p className="mb-2 font-semibold">Example:</p>
        <p className="text-gray-700">{example.replace(word, "______")}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the word"
          className="w-full rounded-md border border-gray-300 p-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="w-4/5 rounded-md bg-orange-500 p-2 text-center text-white transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
          "
        >
          Submit
        </button>
      </form>
      {feedback && (
        <p
          className={`mt-4 text-center text-lg font-semibold ${
            feedback === "Correct!" ? "text-green-500" : "text-red-500"
          }`}
        >
          {feedback}
        </p>
      )}
      <p className="mt-6 text-center text-gray-600">
        Question {currentQuestion + 1} of {totalQuestions}
      </p>
    </div>
  );
};

export default Questions;
