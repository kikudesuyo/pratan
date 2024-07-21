import { fetchData } from "@/utils/api";

type Data = {
  examples: { text: string }[];
};

const fetchExample = async (spell: string) => {
  const data: Data = await fetchData(
    `https://api.wordnik.com/v4/word.json/${spell}/examples?includeDuplicates=false&useCanonical=false&limit=3&api_key=${
      import.meta.env.VITE_WORDNNIKAPI_KEY
    }`
  );
  return data.examples[0].text;
};

export default fetchExample;
