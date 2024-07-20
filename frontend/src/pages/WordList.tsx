import { useState } from "react";

const WordList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const wordList = [
    {
      id: 1,
      word: "Eloquent",
      explanation:
        "(of language) fluent or persuasive; (of a person) having the ability to speak or write persuasively",
    },
    {
      id: 2,
      word: "Serendipity",
      explanation:
        "the occurrence and development of events by chance in a happy or beneficial way",
    },
    { id: 3, word: "Ephemeral", explanation: "lasting for a very short time" },
    {
      id: 4,
      word: "Ubiquitous",
      explanation: "present, appearing, or found everywhere",
    },
    {
      id: 5,
      word: "Mellifluous",
      explanation: "(of a voice or words) sweet or musical; pleasant to hear",
    },
    {
      id: 6,
      word: "Surreptitious",
      explanation:
        "kept secret, especially because it would not be approved of",
    },
    {
      id: 7,
      word: "Pernicious",
      explanation:
        "having a harmful effect, especially in a gradual or subtle way",
    },
    {
      id: 8,
      word: "Amalgamate",
      explanation: "combine or unite to form one organization or structure",
    },
  ];

  const filteredWords = wordList.filter((item) =>
    item.word.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const WordCard = ({
    word,
    explanation,
  }: {
    word: string;
    explanation: string;
  }) => (
    <div className="cursor-pointer rounded-lg border-l-4 border-orange-400 bg-white p-6 shadow-md transition duration-300 hover:shadow-lg">
      <h2 className="text-center font-semibold">
        <p className="mb-2 text-2xl text-orange-500">{word}</p>
        <p className="text-base text-gray-600">{explanation}</p>
      </h2>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Word List</h1>
        <input
          type="text"
          placeholder="Search for words..."
          className="w-full appearance-none  rounded-md border border-gray-300 bg-white p-2 focus:outline-none focus:ring-orange-500 "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWords.map((item) => (
          <WordCard
            key={item.id}
            word={item.word}
            explanation={item.explanation}
          />
        ))}
      </div>
    </div>
  );
};

export default WordList;
