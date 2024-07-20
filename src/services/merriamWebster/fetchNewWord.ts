import { fetchData } from "@/utils/api";
import { Word } from "@/utils/types";

type RawWord = {
  fl: string;
  shortdef: string[];
  meta: {
    stems: string[];
    syns: string[][];
  };
};

export const fetchNewWord = async (word: string): Promise<Word> => {
  const datas = await fetchData(
    `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${
      import.meta.env.VITE_DICTIONARYAPI_KEY
    }`
  );
  const data = datas[0] as RawWord;
  return {
    spell: word,
    partOfSpeech: data.fl,
    definitions: data.shortdef,
    synonyms: data.meta.syns,
    derivatives: data.meta.stems,
  };
};
