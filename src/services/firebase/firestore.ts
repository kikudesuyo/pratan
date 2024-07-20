import {
  arrayUnion,
  DocumentData,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { app } from "@/services/firebase/initFirebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const db = getFirestore(app);
export const registerDataToDb = async (path: string, data: DocumentData) => {
  const docRef = doc(db, path);
  await setDoc(docRef, data);
  return docRef;
};

export const updateArrayInDb = async <T>(
  path: string,
  key: string,
  elem: T
) => {
  const docRef = doc(db, path);
  try {
    await updateDoc(docRef, {
      [key]: arrayUnion(elem),
    });
  } catch (error) {
    console.error(error);
  }
};

export const fetchDataFromDb = async (path: string) => {
  const docRef = doc(db, path);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.error("No such document");
  }
};
