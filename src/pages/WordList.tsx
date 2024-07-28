import { registerWord } from "@/features/registerWord";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserStore from "@/stores/user";
import WordCard from "@/pages/WordCard";
import { useWordsStore, addWord } from "@/stores/words";
import { PATHS } from "@/utils/constants/Paths";

const WordList = () => {
  const [newWordSpell, setNewWordSpell] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const userId = useUserStore((state) => state.userId);
  const words = useWordsStore((state) => state.words);
  const navigate = useNavigate();

  const handleAddClick = async () => {
    if (!userId) {
      console.error("User is not logged in");
      return;
    }
    if (
      words.some(
        (word) => word.spell.toLowerCase() === newWordSpell.toLowerCase()
      )
    ) {
      alert("This word is already in the list");
      throw new Error("This word is already in the list");
    }
    const word = await registerWord(userId, newWordSpell);
    addWord(word);
    setNewWordSpell("");
  };

  const filteredWords = words.filter((word) => {
    return word.spell.toLowerCase().startsWith(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Word List</h1>
        <div className="mx-auto flex w-4/5 flex-col items-center gap-4">
          <div className="flex w-full gap-2">
            <input
              type="text"
              placeholder="Add a new word..."
              className="flex w-full appearance-none  rounded-md border border-gray-300 bg-white p-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
              value={newWordSpell}
              onChange={(e) => setNewWordSpell(e.target.value)}
            />
            <button
              className="rounded-lg bg-orange-500 px-4 text-center font-bold text-white"
              onClick={async () => {
                await handleAddClick();
              }}
            >
              +
            </button>
          </div>
          <input
            type="text"
            placeholder="Search for words..."
            className="w-full appearance-none  rounded-md border border-gray-300 bg-white p-2 focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWords.map((word, idx) => (
          <WordCard
            key={idx}
            spell={word.spell}
            definitions={word.definitions}
          />
        ))}
      </div>
      {words.length > 0 && (
        <div className="flex justify-center">
          <button
            className="mt-8 rounded-2xl bg-orange-500 p-4 text-center text-lg font-bold text-white shadow-md transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
            onClick={() => navigate(PATHS.WORDTEST)}
          >
            Start Word Test
          </button>
        </div>
      )}
    </div>
  );
};

export default WordList;
