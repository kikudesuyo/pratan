import React, { useState } from "react";
import Questions from "@/components/WordTest/Questions";
import Result from "@/components/WordTest/Result";
import StartScreen from "@/components/WordTest/StartScreen";
import Explanation from "@/components/WordTest/Explanation";
import { Question } from "@/components/WordTest/types";

const WordTest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isShowResult, setIsShowResult] = useState(false);
  const [isshowExplanation, setIsShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      word: "eloquent",
      definition: "Fluent or persuasive in speaking or writing.",
      example: "She gave an eloquent speech that moved the audience.",
    },
    {
      word: "serendipity",
      definition:
        "The occurrence and development of events by chance in a happy or beneficial way.",
      example: "The discovery of penicillin was a case of serendipity.",
    },
  ];

  const handleStart = () => {
    setIsStart(true);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      nextQuestion();
    }
  };

  const handleWrongAnswer = () => {
    setIsShowExplanation(true);
  };

  const nextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setIsShowExplanation(false);
    } else {
      setIsShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setIsShowResult(false);
    setIsStart(false);
    setIsShowExplanation(false);
    setScore(0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Word Test</h1>
      </header>

      <div className="mx-auto max-w-2xl">
        {!isStart ? (
          <StartScreen
            onStart={handleStart}
            totalQuestions={questions.length}
          />
        ) : !isShowResult ? (
          !isshowExplanation ? (
            <Questions
              question={questions[currentQuestion]}
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              onWrongAnswer={handleWrongAnswer}
            />
          ) : (
            <Explanation
              question={questions[currentQuestion]}
              onNext={nextQuestion}
            />
          )
        ) : (
          <Result
            score={score}
            totalQuestions={questions.length}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default WordTest;
