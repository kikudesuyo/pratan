import { fetchData } from "@/utils/api";

export type WordDetail = {
  partOfSpeech: string;
  definitions: string[];
  synonyms: string[][];
  derivatives: string[];
};

type RawWordDetail = {
  fl: string;
  shortdef: string[];
  meta: {
    stems: string[];
    syns: string[][];
  };
};

export const fetchWordDetail = async (word: string): Promise<WordDetail> => {
  const datas = await fetchData(
    `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${
      import.meta.env.VITE_DICTIONARYAPI_KEY
    }`
  );
  const data = datas[0] as RawWordDetail;
  return {
    partOfSpeech: data.fl,
    definitions: data.shortdef,
    synonyms: data.meta.syns,
    derivatives: data.meta.stems,
  };
};
