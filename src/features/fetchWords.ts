import { StoredWord, Word } from "@/utils/types";
import { fetchDataFromDb } from "@/services/firebase/firestore";
import { User } from "@/utils/types";
import { getDoc } from "firebase/firestore";
import { mapToArray } from "@/utils/arrayMap";

const formatWord = (word: StoredWord): Word => {
  return {
    spell: word.spell,
    definitions: word.definitions,
    derivatives: word.derivatives,
    partOfSpeech: word.partOfSpeech,
    synonyms: mapToArray(word.synonyms),
    example: word.example,
  };
};

const fetchWords = async (userId: string) => {
  const userData: User | undefined = (await fetchDataFromDb(
    `users/${userId}`
  )) as User;
  return Promise.all(
    userData.wordsRefs.map(async (ref) => {
      const docSnap = await getDoc(ref);
      const storedData = docSnap.data() as StoredWord;
      return formatWord(storedData);
    })
  );
};

export default fetchWords;
