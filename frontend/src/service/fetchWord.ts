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
    `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=30f0fcac-b66e-485f-bb60-afab37255bc6`
  );
  const data = datas[0] as RawWordDetail;
  return {
    partOfSpeech: data.fl,
    definitions: data.shortdef,
    synonyms: data.meta.syns,
    derivatives: data.meta.stems,
  };
};
