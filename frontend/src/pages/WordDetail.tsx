import { useState } from "react";

type WordCardProps = {
  word: string;
};

const WordDetail = ({ word }: WordCardProps) => {
  const [activeMode, setActiveMode] = useState("definition");

  const modes = [
    { id: "definition", label: "Definition" },
    { id: "synonym", label: "Synonym" },
    { id: "derivative", label: "Derivative" },
  ];

  const getContent = () => {
    switch (activeMode) {
      case "definition":
        return "(of language) fluent or persuasive; (of a person) having the ability to speak or write persuasively";
      case "synonym":
        return "articulate (明確な), expressive (表現力のある), fluent (流暢な)";
      case "derivative":
        return "eloquently (adv. 雄弁に), eloquence (n. 雄弁), eloquentness (n. 雄弁)";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-custom-primary">
        {word}
      </h1>
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {modes.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveMode(id)}
              className={`
                px-4 py-2 text-lg font-medium border border-custom-primary
                ${
                  activeMode === id
                    ? "bg-orange-400 text-white"
                    : "bg-white text-custom-primary"
                }
                ${id === "definition" ? "rounded-l-lg" : ""}
                ${id === "derivative" ? "rounded-r-lg" : ""}
                hover:bg-orange-400 hover:text-white focus:z-10 focus:ring-2
                focus:ring-orange-400 focus:text-white transition duration-300
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="min-h-[200px] p-4 border border-gray-200 rounded bg-gray-50 text-lg">
        {getContent()}
      </div>
    </div>
  );
};

export default WordDetail;
