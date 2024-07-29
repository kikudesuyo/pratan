import useUserStore from "@/stores/user";
import { useWordsStore } from "@/stores/words";
import { registerWord } from "@/features/registerWord";
import { addWord as addWordWithZustand } from "@/stores/words";

export const addWord = async (spell: string) => {
  const userId = useUserStore.getState().userId;
  const words = useWordsStore.getState().words;
  if (!userId) {
    console.error("User is not logged in");
    throw new Error("User is not logged in");
  }
  if (words.some((word) => word.spell.toLowerCase() === spell.toLowerCase())) {
    alert("This word is already in the list");
    throw new Error("This word is already in the list");
  }
  const word = await registerWord(userId, spell);
  addWordWithZustand(word);
};
