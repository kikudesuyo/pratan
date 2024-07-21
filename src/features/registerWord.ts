import {
  registerDataToDb,
  updateArrayInDb,
} from "@/services/firebase/firestore";
import { fetchWordFromDictionaryapi } from "@/services/merriamWebster/fetchNewWord";
import { StoredWord, Word } from "@/utils/types";
import { arrayToMap } from "@/utils/arrayMap";
import { DocumentReference } from "firebase/firestore";
import fetchExample from "@/services/wordnik/fetchExample";

export const registerWord = async (userId: string, spell: string) => {
  const rawWord = await fetchWordFromDictionaryapi(spell);
  const example = await fetchExample(spell);
  const newWord: Word = {
    spell: spell,
    partOfSpeech: rawWord.fl,
    definitions: rawWord.shortdef,
    synonyms: rawWord.meta.syns,
    derivatives: rawWord.meta.stems,
    example: example,
  };
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
    example: word.example,
  };
};
