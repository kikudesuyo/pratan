import { Word } from "@/utils/types";
import { fetchDataFromDb } from "@/services/firebase/firestore";
import { User } from "@/utils/types";
import { getDoc } from "firebase/firestore";

const fetchWords = async (userId: string) => {
  const userData: User | undefined = (await fetchDataFromDb(
    `users/${userId}`
  )) as User;
  return Promise.all(
    userData.wordsRefs.map(async (ref) => {
      const docSnap = await getDoc(ref);
      return docSnap.data() as Word;
    })
  );
};

export default fetchWords;
