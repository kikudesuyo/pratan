import { useState } from "react";
import TestIcon from "@/assets/icon/TestIcon";
import GitHubIcon from "@/assets/icon/GitHubIcon";

const WordTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      word: "Eloquent",
      options: [
        "Fluent and persuasive in speaking or writing",
        "Short-lived or transient",
        "Present everywhere",
        "Sweet-sounding and pleasant to hear",
      ],
      correctAnswer: 0,
    },
    {
      word: "Serendipity",
      options: [
        "A harmful or destructive effect",
        "The occurrence of fortunate events by chance",
        "The act of combining or uniting",
        "Done secretly or furtively",
      ],
      correctAnswer: 1,
    },
  ];

  const handleAnswer = (selectedOption: unknown) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setScore(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <TestIcon size="h-12 w-12 mx-auto text-orange-500" />
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Word Test</h1>
      </header>

      <div className="mx-auto max-w-2xl">
        {showResult ? (
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-orange-500">
              Test Completed!
            </h2>
            <p className="mb-4 text-xl text-gray-700">
              Your score: {score} out of {questions.length}
            </p>
            <button
              onClick={restartTest}
              className="rounded-full bg-orange-500 px-6 py-2 text-white shadow-md transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Restart test
            </button>
          </div>
        ) : (
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-center text-2xl font-bold text-orange-500">
              {questions[currentQuestion].word}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full rounded-md bg-orange-100 p-4 text-left text-gray-800 transition duration-300 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  {option}
                </button>
              ))}
            </div>
            <p className="mt-6 text-center text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordTest;
