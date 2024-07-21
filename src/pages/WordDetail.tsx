import { useWordsStore } from "@/stores/words";
import { Word } from "@/utils/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WordDetail = () => {
  const [currentMode, setCurrentMode] =
    useState<(typeof modes)[number]["id"]>("definitions");
  const { spell } = useParams();
  const words = useWordsStore((state) => state.words);
  const [word, setWord] = useState<Word>();

  useEffect(() => {
    setWord(words.find((w) => w.spell === spell));
    console.log(
      words,
      words.find((w) => w.spell === spell)
    );
  }, [spell, words]);

  const modes = [
    { id: "definitions", label: "Definition" },
    { id: "synonyms", label: "Synonym" },
    { id: "derivatives", label: "Derivative" },
  ] as const;

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h1 className=" mb-6 text-center text-4xl font-bold">
        {word && word.spell}
      </h1>
      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {modes.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setCurrentMode(id)}
              className={`
                 border px-4 py-2 text-lg font-medium
                ${currentMode === id ? "bg-orange-400 text-white" : " bg-white"}
                ${id === "definitions" ? "rounded-l-lg" : ""}
                ${id === "derivatives" ? "rounded-r-lg" : ""}
                transition duration-300 hover:bg-orange-400 hover:text-white
              focus:text-white focus:ring-2 focus:ring-orange-400
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="min-h-[200px] rounded border border-gray-200 bg-gray-50 p-4 text-lg">
        {word &&
          currentMode === "definitions" &&
          word.definitions.map((def, idx) => <p key={idx}>{def}.</p>)}
        {word &&
          currentMode === "synonyms" &&
          word.synonyms.map((syns) => (
            <div>
              {syns.map((s) => (
                <span>{s}, </span>
              ))}
            </div>
          ))}
        {word &&
          currentMode === "derivatives" &&
          word.derivatives.map((def, idx) => <span key={idx}>{def}, </span>)}
      </div>
    </div>
  );
};

export default WordDetail;
