import { DocumentReference } from "firebase/firestore";

export type User = {
  wordsRefs: DocumentReference[];
};

export type Word = {
  spell: string;
  partOfSpeech: string;
  definitions: string[];
  synonyms: string[][];
  derivatives: string[];
};

export type StoredWord = Omit<Word, "synonyms"> & {
  synonyms: { [key: string]: string[] };
};
