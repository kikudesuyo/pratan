import BodyButton from "@/components/Button/BodyButton";
import { registerWord } from "@/features/registerWord";
import { useState } from "react";
import useUserStore from "@/stores/user";
import WordCard from "@/pages/WordCard";
import { useWordsStore, addWord } from "@/stores/words";

const WordList = () => {
  const [newWordSpell, setNewWordSpell] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const userId = useUserStore((state) => state.userId);
  const words = useWordsStore((state) => state.words);

  const handleAddClick = async () => {
    if (!userId) {
      console.error("User is not logged in");
      return;
    }
    const word = await registerWord(userId, newWordSpell);
    addWord(word);
  };

  const filteredWords = words.filter((word) => {
    return word.spell.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Word List</h1>
        <input
          type="text"
          placeholder="Add word"
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={newWordSpell}
          onChange={(e) => setNewWordSpell(e.target.value)}
        />
        <BodyButton
          label="Add"
          func={async () => {
            await handleAddClick();
          }}
        />
        <input
          type="text"
          placeholder="Search for words..."
          className="w-full rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredWords.map((word, idx) => (
          <WordCard
            key={idx}
            spell={word.spell}
            definitions={word.definitions}
          />
        ))}
      </div>
    </div>
  );
};

export default WordList;
