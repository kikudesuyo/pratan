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
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h1 className=" mb-6 text-center text-4xl font-bold">{word}</h1>
      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {modes.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveMode(id)}
              className={`
                 border px-4 py-2 text-lg font-medium
                ${activeMode === id ? "bg-orange-400 text-white" : " bg-white"}
                ${id === "definition" ? "rounded-l-lg" : ""}
                ${id === "derivative" ? "rounded-r-lg" : ""}
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
        {getContent()}
      </div>
    </div>
  );
};

export default WordDetail;
