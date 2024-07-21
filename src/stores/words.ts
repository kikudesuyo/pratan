import { Word } from "@/utils/types";
import { create } from "zustand";

type WordsState = {
  words: Word[];
  setWords: (words: Word[]) => void;
};

export const useWordsStore = create<WordsState>((set) => ({
  words: [],
  setWords: (words) => set({ words }),
}));

export const addWord = (newWord: Word) => {
  const { words, setWords } = useWordsStore.getState();
  setWords([...words, newWord]);
};
