import { fetchData } from "@/utils/api";

type RawWord = {
  fl: string;
  shortdef: string[];
  meta: {
    stems: string[];
    syns: string[][];
  };
};

export const fetchWordFromDictionaryapi = async (
  word: string
): Promise<RawWord> => {
  const datas = await fetchData(
    `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${
      import.meta.env.VITE_DICTIONARYAPI_KEY
    }`
  );
  const data = datas[0] as RawWord;
  return data;
};
