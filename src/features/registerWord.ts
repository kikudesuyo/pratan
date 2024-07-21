import {
  registerDataToDb,
  updateArrayInDb,
} from "@/services/firebase/firestore";
import { fetchNewWord } from "@/services/merriamWebster/fetchNewWord";
import { StoredWord, Word } from "@/utils/types";
import { arrayToMap } from "@/utils/arrayMap";
import { DocumentReference } from "firebase/firestore";

export const registerWord = async (userId: string, spell: string) => {
  const newWord = await fetchNewWord(spell);
  const formattedNewWord: StoredWord = formatWord(newWord);
  const newWordRef = await registerDataToDb(`words/${spell}`, formattedNewWord);
  await updateArrayInDb<DocumentReference>(
    `users/${userId}`,
    "wordsRefs",
    newWordRef
  );
  return newWord;
};

const formatWord = (word: Word): StoredWord => {
  return {
    spell: word.spell,
    definitions: word.definitions,
    derivatives: word.derivatives,
    partOfSpeech: word.partOfSpeech,
    synonyms: arrayToMap(word.synonyms),
  };
};
